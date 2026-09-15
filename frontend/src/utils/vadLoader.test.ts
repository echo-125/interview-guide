import assert from 'node:assert/strict';
import test from 'node:test';

import { loadVadRuntime } from './vadLoader.ts';

/**
 * vadLoader 的最小 DOM shim（仅在 Node 测试环境使用）。
 * vadLoader 只在浏览器注入 <script>，这里用假节点模拟 load/error 事件，
 * 用来验证「加载失败后重试能重新发起请求」这一关键行为。
 */
class FakeScript {
  src = '';
  async = false;
  dataset: Record<string, string> = {};
  removed = false;
  private listeners: Record<string, Array<() => void>> = {};

  addEventListener(type: string, cb: () => void) {
    (this.listeners[type] ||= []).push(cb);
  }

  remove() {
    this.removed = true;
    const idx = attached.indexOf(this);
    if (idx >= 0) attached.splice(idx, 1);
  }

  fire(type: 'load' | 'error') {
    (this.listeners[type] || []).forEach(cb => cb());
  }
}

const created: FakeScript[] = [];
const attached: FakeScript[] = [];

(globalThis as any).window = globalThis;
(globalThis as any).document = {
  querySelector(selector: string) {
    const matched = /script\[src="(.+)"\]/.exec(selector);
    if (!matched) return null;
    return attached.find(s => s.src === matched[1]) ?? null;
  },
  createElement() {
    const node = new FakeScript();
    created.push(node);
    return node;
  },
  head: {
    appendChild(node: FakeScript) {
      attached.push(node);
    },
  },
};

function reset() {
  created.length = 0;
  attached.length = 0;
}

test('CDN 脚本加载失败后，重试会重新注入新节点而不是复用死节点', async () => {
  reset();

  const first = loadVadRuntime().catch(() => undefined);
  assert.equal(attached.length, 1, '首次调用应注入第一个脚本');

  // 模拟网络失败 → 节点必须被移除
  attached[0].fire('error');
  await first;

  assert.equal(attached.length, 0, '失败的脚本节点必须从 DOM 移除，否则重试会 querySelector 命中它');
  assert.equal(created[0].removed, true);

  // 重试：必须创建全新节点并发起新请求，而不是挂在旧节点上永久 pending
  const retry = loadVadRuntime().catch(() => undefined);
  assert.equal(attached.length, 1, '重试时应重新注入脚本节点');
  assert.notEqual(attached[0], created[0], '不得复用已经失败的旧节点');
  attached[0].fire('error');
  await retry;
});

test('脚本成功加载后，再次调用复用缓存而不重复注入', async () => {
  reset();

  const loading = loadVadRuntime();
  attached[0].fire('load');
  await Promise.resolve();
  assert.equal(attached.length, 2, '第一个脚本成功后应继续注入第二个');
  attached[1].fire('load');
  await loading;

  const createdBefore = created.length;
  await loadVadRuntime();

  assert.equal(created.length, createdBefore, '已加载成功时不应再创建新脚本节点');
});

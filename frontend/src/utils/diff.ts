/**
 * 字符级 diff（中文无词边界，字符粒度即可）
 * 先裁剪公共前后缀，再对中间部分做 LCS；超长输入退化为整体替换，保证性能上界
 */
export type DiffSegmentType = 'same' | 'del' | 'add';

export interface DiffSegment {
  type: DiffSegmentType;
  text: string;
}

/** LCS 单侧输入上限，超出则整段替换（简历单句/段落远小于此值） */
const MAX_DIFF_CHARS = 1200;

/**
 * 对比 before/after，返回按序拼接可还原双方的分段
 * del 段只属于 before，add 段只属于 after，same 段两者共有
 */
export function charDiff(before: string, after: string): DiffSegment[] {
  if (!before && !after) return [];
  if (!before) return [{ type: 'add', text: after }];
  if (!after) return [{ type: 'del', text: before }];

  let start = 0;
  const minLen = Math.min(before.length, after.length);
  while (start < minLen && before[start] === after[start]) start++;
  let endB = before.length;
  let endA = after.length;
  while (endB > start && endA > start && before[endB - 1] === after[endA - 1]) {
    endB--;
    endA--;
  }

  const segments: DiffSegment[] = [];
  const prefix = before.slice(0, start);
  const suffix = before.slice(endB);

  if (prefix) segments.push({ type: 'same', text: prefix });
  segments.push(...lcsDiff(before.slice(start, endB), after.slice(start, endA)));
  if (suffix) segments.push({ type: 'same', text: suffix });

  return segments;
}

/** 提取「修改前」整行渲染用分段（same + del） */
export function beforeSegments(segments: DiffSegment[]): DiffSegment[] {
  return segments.filter((s) => s.type !== 'add');
}

/** 提取「修改后」整行渲染用分段（same + add） */
export function afterSegments(segments: DiffSegment[]): DiffSegment[] {
  return segments.filter((s) => s.type !== 'del');
}

function lcsDiff(b: string, a: string): DiffSegment[] {
  if (!b) return a ? [{ type: 'add', text: a }] : [];
  if (!a) return [{ type: 'del', text: b }];
  if (b.length > MAX_DIFF_CHARS || a.length > MAX_DIFF_CHARS) {
    return [{ type: 'del', text: b }, { type: 'add', text: a }];
  }

  const m = b.length;
  const n = a.length;
  const dp: Uint32Array[] = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = b[i] === a[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const out: DiffSegment[] = [];
  const push = (type: DiffSegmentType, ch: string) => {
    const last = out[out.length - 1];
    if (last && last.type === type) {
      last.text += ch;
    } else {
      out.push({ type, text: ch });
    }
  };

  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (b[i] === a[j]) {
      push('same', b[i]);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      push('del', b[i]);
      i++;
    } else {
      push('add', a[j]);
      j++;
    }
  }
  while (i < m) {
    push('del', b[i]);
    i++;
  }
  while (j < n) {
    push('add', a[j]);
    j++;
  }
  return out;
}

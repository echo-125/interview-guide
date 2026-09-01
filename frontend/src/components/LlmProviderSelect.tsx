import type { ProviderItem } from '../types/llmProvider';

type Props = {
  providers: ProviderItem[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  id?: string;
};

const SELECT_CLASS = `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
  bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
  focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow
  disabled:cursor-not-allowed disabled:opacity-60`;

/**
 * 业务页面的模型 Provider 选择下拉。
 * 空值 = 跟随系统默认；无可选 Provider 时自动禁用。
 */
export default function LlmProviderSelect({ providers, value, onChange, disabled, id }: Props) {
  if (providers.length === 0) {
    return (
      <select id={id} value="" disabled className={SELECT_CLASS}>
        <option value="">跟随系统默认（未配置其他 Provider）</option>
      </select>
    );
  }
  return (
    <select id={id} value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} className={SELECT_CLASS}>
      <option value="">跟随系统默认</option>
      {providers.map((provider) => (
        <option key={provider.id} value={provider.id}>
          {provider.id} · {provider.model}
        </option>
      ))}
    </select>
  );
}

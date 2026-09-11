import { getErrorMessage } from '../api/request';
import { useState, useEffect, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings, Plus, Trash2, Plug, CheckCircle, XCircle,
  Loader2, Eye, EyeOff, RefreshCw, Server, Edit2, Mic, Volume2, ChevronDown, Database,
  ArrowDownWideNarrow, ListPlus,
} from 'lucide-react';
import { llmProviderApi } from '../api/llmProvider';
import ConfirmDialog from '../components/ConfirmDialog';
import type {
  ProviderItem, CreateProviderRequest, UpdateProviderRequest,
  ProviderTestResult, AsrConfig, TtsConfig, AsrConfigRequest, TtsConfigRequest,
} from '../types/llmProvider';

type ConfigRowProps = {
  label: string;
  value: ReactNode;
  title?: string;
  monospace?: boolean;
  emphasis?: boolean;
};

type StatusBadgeProps = {
  icon: ReactNode;
  children: ReactNode;
};

const CARD_CLASS = `flex h-full min-h-[330px] flex-col rounded-xl border border-slate-200
  bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700
  dark:bg-slate-800`;

const ICON_WRAP_CLASS = `flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
  bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-300`;

const DETAILS_CLASS = `mb-4 flex-1 space-y-1 rounded-lg border border-slate-100 bg-slate-50/70
  p-3 dark:border-slate-700/80 dark:bg-slate-900/30`;

const ACTION_BAR_CLASS = `mt-auto flex min-h-12 flex-wrap items-center gap-2 border-t
  border-slate-100 pt-3 dark:border-slate-700`;

const ACTION_BUTTON_CLASS = `inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs
  font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50`;

// 模型类型 → 中文名（Tab 与模态框标题共用）
const MODEL_TYPE_LABEL: Record<'chat' | 'embedding' | 'rerank', string> = {
  chat: '聊天模型',
  embedding: '向量模型',
  rerank: '重排模型',
};

function StatusBadge({ icon, children }: StatusBadgeProps) {
  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-primary-50 px-2.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
      {icon}
      {children}
    </span>
  );
}

function ConfigRow({ label, value, title, monospace = false, emphasis = false }: ConfigRowProps) {
  return (
    <div
      className={`grid grid-cols-[108px_minmax(0,1fr)] items-start gap-3 rounded-md px-2 py-2 text-xs ${
        emphasis ? 'bg-white shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-700' : ''
      }`}
    >
      <dt className="whitespace-nowrap text-slate-500 dark:text-slate-400">{label}</dt>
      <dd
        className={`min-w-0 truncate text-right font-medium text-slate-700 dark:text-slate-200 ${
          monospace ? 'font-mono' : ''
        }`}
        title={title}
      >
        {value}
      </dd>
    </div>
  );
}

export default function SettingsPage() {
  const [providers, setProviders] = useState<ProviderItem[]>([]);
  const [defaultProviderId, setDefaultProviderId] = useState('');
  const [defaultEmbeddingProviderId, setDefaultEmbeddingProviderId] = useState('');
  const [defaultRerankProviderId, setDefaultRerankProviderId] = useState('');
  const [loading, setLoading] = useState(true);

  // 模型服务 Tab：聊天 / 向量 / 重排 / 语音
  const [activeTab, setActiveTab] = useState<'chat' | 'embedding' | 'rerank' | 'voice'>('chat');

  // 当前模态框对应的模型类型：从哪个 Tab 打开就只编辑该类型的字段
  const [modalType, setModalType] = useState<'chat' | 'embedding' | 'rerank'>('chat');

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingProvider, setEditingProvider] = useState<ProviderItem | null>(null);
  const [saving, setSaving] = useState(false);

  // Form fields
  const [formId, setFormId] = useState('');
  const [formBaseUrl, setFormBaseUrl] = useState('');
  const [formApiKey, setFormApiKey] = useState('');
  const [formModel, setFormModel] = useState('');
  const [formApiFormat, setFormApiFormat] = useState('openai');
  const [formEmbeddingModel, setFormEmbeddingModel] = useState('');
  const [formEmbeddingDimensions, setFormEmbeddingDimensions] = useState('1024');
  const [formSupportsEmbedding, setFormSupportsEmbedding] = useState(false);
  const [formRerankModel, setFormRerankModel] = useState('');
  const [formRerankApiFormat, setFormRerankApiFormat] = useState('cohere');
  const [formMaxTokens, setFormMaxTokens] = useState('');
  const [formTopP, setFormTopP] = useState('');
  const [formTemperature, setFormTemperature] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showEmbeddingDropdown, setShowEmbeddingDropdown] = useState(false);
  // 在线拉取的模型列表（预设 ∪ 拉取结果 共同构成下拉选项）
  const [fetchedModels, setFetchedModels] = useState<string[]>([]);
  const [fetchingModels, setFetchingModels] = useState(false);

  // 模型下拉选项 = 在线拉取的模型列表（不再内置预设模型名，选项以端点实际返回为准）
  const modelOptions = useMemo(
    () => fetchedModels.map((m) => ({ value: m, label: '在线获取' })),
    [fetchedModels],
  );

  // Test state
  const [testingId, setTestingId] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, ProviderTestResult>>({});

  // Delete confirmation
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [pendingDefaultProviderId, setPendingDefaultProviderId] = useState<string | null>(null);
  const [pendingDefaultEmbeddingProviderId, setPendingDefaultEmbeddingProviderId] = useState<string | null>(null);
  const [pendingDefaultRerankProviderId, setPendingDefaultRerankProviderId] = useState<string | null>(null);
  const [settingDefault, setSettingDefault] = useState(false);
  const [settingEmbeddingDefault, setSettingEmbeddingDefault] = useState(false);
  const [settingRerankDefault, setSettingRerankDefault] = useState(false);

  const pendingEmbeddingProvider = useMemo(
    () => providers.find(provider => provider.id === pendingDefaultEmbeddingProviderId) ?? null,
    [pendingDefaultEmbeddingProviderId, providers],
  );

  // Voice config state
  const [asrConfig, setAsrConfig] = useState<AsrConfig | null>(null);
  const [ttsConfig, setTtsConfig] = useState<TtsConfig | null>(null);
  const [showVoiceModal, setShowVoiceModal] = useState<'asr' | 'tts' | null>(null);
  const [testingAsr, setTestingAsr] = useState(false);
  const [asrTestResult, setAsrTestResult] = useState<ProviderTestResult | null>(null);
  const [voiceSaving, setVoiceSaving] = useState(false);

  // ASR/TTS form fields
  const [asrForm, setAsrForm] = useState<AsrConfigRequest>({});
  const [ttsForm, setTtsForm] = useState<TtsConfigRequest>({});

  // Toast notification
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const isGlobalDefaultProvider = useCallback((providerId: string) => (
    defaultProviderId === providerId
  ), [defaultProviderId]);

  const isDefaultEmbeddingProvider = useCallback((providerId: string) => (
    defaultEmbeddingProviderId === providerId
  ), [defaultEmbeddingProviderId]);

  const loadData = useCallback(async () => {
    try {
      const [providerList, defaultProvider, asr, tts] = await Promise.all([
        llmProviderApi.list(),
        llmProviderApi.getDefaultProvider(),
        llmProviderApi.getAsrConfig(),
        llmProviderApi.getTtsConfig(),
      ]);
      setProviders(providerList);
      setDefaultProviderId(defaultProvider.defaultProvider);
      setDefaultEmbeddingProviderId(defaultProvider.defaultEmbeddingProvider);
      setDefaultRerankProviderId(defaultProvider.defaultRerankProvider ?? '');
      setAsrConfig(asr);
      setTtsConfig(tts);
    } catch (err) {
      console.error('Failed to load settings:', err);
      showToast('加载数据失败', 'error');
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // --- Modal helpers ---
  const openCreateModal = (type: 'chat' | 'embedding' | 'rerank') => {
    setEditingProvider(null);
    setModalType(type);
    setFormId('');
    setFormBaseUrl('');
    setFormApiKey('');
    setFormModel('');
    setFormApiFormat('openai');
    setFormEmbeddingModel('');
    setFormEmbeddingDimensions('1024');
    setFormSupportsEmbedding(type === 'embedding');
    setFormRerankModel('');
    setFormRerankApiFormat('cohere');
    setFormMaxTokens('');
    setFormTopP('');
    setFormTemperature('');
    setFetchedModels([]);
    setShowApiKey(false);
    setShowModal(true);
  };

  const openEditModal = (provider: ProviderItem, type: 'chat' | 'embedding' | 'rerank') => {
    setEditingProvider(provider);
    setModalType(type);
    setFormId(provider.id);
    setFormBaseUrl(provider.baseUrl);
    setFormApiKey('');
    setFormModel(provider.model ?? '');
    setFormApiFormat(provider.apiFormat || 'openai');
    setFormEmbeddingModel(provider.embeddingModel || '');
    setFormEmbeddingDimensions(provider.embeddingDimensions != null ? String(provider.embeddingDimensions) : '1024');
    setFormSupportsEmbedding(provider.supportsEmbedding);
    setFormRerankModel(provider.rerankModel ?? '');
    setFormRerankApiFormat(provider.rerankApiFormat || 'cohere');
    setFormMaxTokens(provider.maxTokens != null ? String(provider.maxTokens) : '');
    setFormTopP(provider.topP != null ? String(provider.topP) : '');
    setFormTemperature(provider.temperature != null ? String(provider.temperature) : '');
    setFetchedModels([]);
    setShowApiKey(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProvider(null);
  };

  // --- CRUD handlers ---
  const hasEmbeddingCapability = formSupportsEmbedding && !!formEmbeddingModel.trim();
  // 当前模态框类型对应的模型是否已填写（各类型模态框只关心自己的模型必填）
  const activeTypeModelFilled =
    modalType === 'chat' ? !!formModel.trim()
      : modalType === 'embedding' ? !!formEmbeddingModel.trim()
        : !!formRerankModel.trim();

  const handleCreate = async () => {
    if (!formId.trim() || !formBaseUrl.trim() || !formApiKey.trim()) {
      showToast('请填写必填字段', 'error');
      return;
    }
    if (!activeTypeModelFilled) {
      showToast(`请填写${MODEL_TYPE_LABEL[modalType]}`, 'error');
      return;
    }
    const embeddingDimensions = parseInt(formEmbeddingDimensions.trim(), 10);
    if (modalType === 'embedding' && (!Number.isFinite(embeddingDimensions) || embeddingDimensions <= 0)) {
      showToast('向量维度必须为正整数，需与向量库维度一致（默认 1024）', 'error');
      return;
    }
    setSaving(true);
    try {
      const data: CreateProviderRequest = {
        id: formId.trim(),
        baseUrl: formBaseUrl.trim(),
        apiKey: formApiKey.trim(),
        supportsEmbedding: formSupportsEmbedding,
        apiFormat: formApiFormat,
        rerankApiFormat: formRerankApiFormat,
      };
      if (formModel.trim()) {
        data.model = formModel.trim();
      }
      if (hasEmbeddingCapability) {
        data.embeddingModel = formEmbeddingModel.trim();
        data.embeddingDimensions = embeddingDimensions;
      }
      if (formRerankModel.trim()) {
        data.rerankModel = formRerankModel.trim();
      }
      if (formMaxTokens.trim()) {
        const maxTokens = parseInt(formMaxTokens.trim(), 10);
        if (Number.isFinite(maxTokens) && maxTokens > 0) data.maxTokens = maxTokens;
      }
      if (formTopP.trim()) {
        const topP = parseFloat(formTopP.trim());
        if (Number.isFinite(topP) && topP > 0) data.topP = topP;
      }
      if (formTemperature.trim()) {
        const temp = parseFloat(formTemperature.trim());
        if (!isNaN(temp)) data.temperature = temp;
      }
      await llmProviderApi.create(data);
      showToast('模型创建成功');
      closeModal();
      await loadData();
    } catch (err) {
      console.error('Failed to create provider:', err);
      showToast(getErrorMessage(err, '创建失败'), 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async () => {
    if (!editingProvider) return;
    if (!formBaseUrl.trim()) {
      showToast('请填写必填字段', 'error');
      return;
    }
    if (!activeTypeModelFilled) {
      showToast(`请填写${MODEL_TYPE_LABEL[modalType]}`, 'error');
      return;
    }
    const embeddingDimensions = parseInt(formEmbeddingDimensions.trim(), 10);
    if (modalType === 'embedding' && (!Number.isFinite(embeddingDimensions) || embeddingDimensions <= 0)) {
      showToast('向量维度必须为正整数，需与向量库维度一致（默认 1024）', 'error');
      return;
    }
    setSaving(true);
    try {
      const data: UpdateProviderRequest = {
        baseUrl: formBaseUrl.trim(),
        model: formModel.trim(),
        apiFormat: formApiFormat,
        embeddingModel: formEmbeddingModel.trim(),
        supportsEmbedding: formSupportsEmbedding,
        rerankModel: formRerankModel.trim(),
        rerankApiFormat: formRerankApiFormat,
      };
      if (hasEmbeddingCapability) {
        data.embeddingDimensions = embeddingDimensions;
      }
      if (formMaxTokens.trim()) {
        const maxTokens = parseInt(formMaxTokens.trim(), 10);
        if (Number.isFinite(maxTokens) && maxTokens > 0) data.maxTokens = maxTokens;
      }
      if (formTopP.trim()) {
        const topP = parseFloat(formTopP.trim());
        if (Number.isFinite(topP) && topP > 0) data.topP = topP;
      }
      if (formApiKey.trim()) {
        data.apiKey = formApiKey.trim();
      }
      if (formTemperature.trim()) {
        const temp = parseFloat(formTemperature.trim());
        if (!isNaN(temp)) data.temperature = temp;
      }
      await llmProviderApi.update(editingProvider.id, data);
      showToast('模型更新成功');
      closeModal();
      await loadData();
    } catch (err) {
      console.error('Failed to update provider:', err);
      showToast(getErrorMessage(err, '更新失败'), 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleFetchModels = async () => {
    if (!formBaseUrl.trim() || (!formApiKey.trim() && !editingProvider)) {
      showToast('请先填写 Base URL 和 API Key', 'error');
      return;
    }
    setFetchingModels(true);
    try {
      const models = await llmProviderApi.fetchModels({
        providerId: editingProvider?.id,
        baseUrl: formBaseUrl.trim(),
        apiKey: formApiKey.trim() || undefined,
        apiFormat: formApiFormat,
      });
      setFetchedModels(models ?? []);
      showToast(models?.length ? `已获取 ${models.length} 个模型` : '该端点未返回模型列表');
    } catch (err) {
      console.error('Failed to fetch models:', err);
      showToast(getErrorMessage(err, '获取模型列表失败'), 'error');
    } finally {
      setFetchingModels(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirmId) return;
    setDeleting(true);
    try {
      await llmProviderApi.delete(deleteConfirmId);
      showToast('模型已删除');
      setDeleteConfirmId(null);
      await loadData();
    } catch (err) {
      console.error('Failed to delete provider:', err);
      showToast(getErrorMessage(err, '删除失败'), 'error');
    } finally {
      setDeleting(false);
    }
  };

  const handleTest = async (id: string) => {
    setTestingId(id);
    setTestResults(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    try {
      const result = await llmProviderApi.test(id);
      setTestResults(prev => ({ ...prev, [id]: result }));
    } catch (err) {
      console.error('Test failed:', err);
      setTestResults(prev => ({
        ...prev,
        [id]: {
          success: false,
          message: getErrorMessage(err, '连接测试失败'),
          model: '',
        },
      }));
    } finally {
      setTestingId(null);
    }
  };

  const handleSetDefault = async (providerId: string) => {
    setPendingDefaultProviderId(providerId);
  };

  const handleConfirmSetDefault = async () => {
    if (!pendingDefaultProviderId) {
      return;
    }
    setSettingDefault(true);
    try {
      await llmProviderApi.updateDefaultProvider({
        defaultProvider: pendingDefaultProviderId,
        defaultEmbeddingProvider: defaultEmbeddingProviderId,
      });
      showToast(`已将 "${pendingDefaultProviderId}" 设为默认聊天服务`);
      setPendingDefaultProviderId(null);
      await loadData();
    } catch (err) {
      console.error('Failed to set default:', err);
      showToast(getErrorMessage(err, '设置默认模型失败'), 'error');
    } finally {
      setSettingDefault(false);
    }
  };

  const handleSetEmbeddingDefault = async (provider: ProviderItem) => {
    if (!provider.supportsEmbedding || !provider.embeddingModel) {
      showToast('该模型不支持向量化，不能作为知识库向量服务', 'error');
      return;
    }
    setPendingDefaultEmbeddingProviderId(provider.id);
  };

  const handleConfirmSetEmbeddingDefault = async () => {
    if (!pendingDefaultEmbeddingProviderId) {
      return;
    }
    setSettingEmbeddingDefault(true);
    try {
      await llmProviderApi.updateDefaultEmbeddingProvider({
        defaultProvider: defaultProviderId,
        defaultEmbeddingProvider: pendingDefaultEmbeddingProviderId,
      });
      showToast(`已将 "${pendingDefaultEmbeddingProviderId}" 的 ${pendingEmbeddingProvider?.embeddingModel ?? '向量模型'} (${pendingEmbeddingProvider?.embeddingDimensions ?? 1024}维) 设为默认向量服务`);
      setPendingDefaultEmbeddingProviderId(null);
      await loadData();
    } catch (err) {
      console.error('Failed to set embedding default:', err);
      showToast(getErrorMessage(err, '设置默认向量模型失败'), 'error');
    } finally {
      setSettingEmbeddingDefault(false);
    }
  };

  const handleSetRerankDefault = (provider: ProviderItem) => {
    if (!provider.rerankModel) {
      showToast('该模型未配置重排模型，不能作为默认重排服务', 'error');
      return;
    }
    setPendingDefaultRerankProviderId(provider.id);
  };

  const handleConfirmSetRerankDefault = async () => {
    if (!pendingDefaultRerankProviderId) {
      return;
    }
    setSettingRerankDefault(true);
    try {
      await llmProviderApi.updateDefaultRerankProvider({
        defaultProvider: defaultProviderId,
        defaultEmbeddingProvider: defaultEmbeddingProviderId,
        defaultRerankProvider: pendingDefaultRerankProviderId,
      });
      showToast(`已将 "${pendingDefaultRerankProviderId}" 设为默认重排服务`);
      setPendingDefaultRerankProviderId(null);
      await loadData();
    } catch (err) {
      console.error('Failed to set rerank default:', err);
      showToast(getErrorMessage(err, '设置默认重排模型失败'), 'error');
    } finally {
      setSettingRerankDefault(false);
    }
  };

  const handleSaveModal = () => {
    if (editingProvider) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  // --- Voice config handlers ---
  const openAsrModal = () => {
    if (!asrConfig) return;
    setAsrForm({
      url: asrConfig.url,
      model: asrConfig.model,
      language: asrConfig.language,
      format: asrConfig.format,
      sampleRate: asrConfig.sampleRate,
      enableTurnDetection: asrConfig.enableTurnDetection,
      turnDetectionType: asrConfig.turnDetectionType,
      turnDetectionThreshold: asrConfig.turnDetectionThreshold,
      turnDetectionSilenceDurationMs: asrConfig.turnDetectionSilenceDurationMs,
    });
    setShowVoiceModal('asr');
  };

  const openTtsModal = () => {
    if (!ttsConfig) return;
    setTtsForm({
      model: ttsConfig.model,
      voice: ttsConfig.voice,
      format: ttsConfig.format,
      sampleRate: ttsConfig.sampleRate,
      mode: ttsConfig.mode,
      languageType: ttsConfig.languageType,
      speechRate: ttsConfig.speechRate,
      volume: ttsConfig.volume,
    });
    setShowVoiceModal('tts');
  };

  const handleSaveAsr = async () => {
    setVoiceSaving(true);
    try {
      await llmProviderApi.updateAsrConfig(asrForm);
      showToast('ASR 配置已更新');
      setShowVoiceModal(null);
      await loadData();
    } catch (err) {
      showToast(getErrorMessage(err, '更新失败'), 'error');
    } finally {
      setVoiceSaving(false);
    }
  };

  const handleSaveTts = async () => {
    setVoiceSaving(true);
    try {
      await llmProviderApi.updateTtsConfig(ttsForm);
      showToast('TTS 配置已更新');
      setShowVoiceModal(null);
      await loadData();
    } catch (err) {
      showToast(getErrorMessage(err, '更新失败'), 'error');
    } finally {
      setVoiceSaving(false);
    }
  };

  const handleTestAsr = async () => {
    setTestingAsr(true);
    setAsrTestResult(null);
    try {
      const result = await llmProviderApi.testAsr();
      setAsrTestResult(result);
    } catch (err) {
      setAsrTestResult({
        success: false,
        message: getErrorMessage(err, '连接测试失败'),
        model: '',
      });
    } finally {
      setTestingAsr(false);
    }
  };

  // --- Render ---
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">系统设置</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">管理聊天模型、向量模型和模块配置</p>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="providers"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
              {/* Provider header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                  模型服务
                </h2>
                {activeTab !== 'voice' && (
                  <motion.button
                    onClick={() => openCreateModal(activeTab)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
                      bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25
                      hover:from-primary-600 hover:to-primary-700 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    新增模型
                  </motion.button>
                )}
              </div>

              {/* Capability tabs */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {([
                  { key: 'chat', label: '聊天模型' },
                  { key: 'embedding', label: '向量模型' },
                  { key: 'rerank', label: '重排模型' },
                  { key: 'voice', label: '语音服务' },
                ] as const).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`h-9 rounded-xl px-4 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Provider grid (chat / embedding / rerank tabs) */}
              {activeTab !== 'voice' && (
                (() => {
                  const visibleProviders = providers.filter((provider) => {
                    if (activeTab === 'chat') return !!provider.model;
                    if (activeTab === 'embedding') return provider.supportsEmbedding && !!provider.embeddingModel;
                    return !!provider.rerankModel;
                  });
                  if (visibleProviders.length === 0) {
                    return (
                      <div className="rounded-xl border border-slate-200 bg-white py-16 text-center dark:border-slate-700 dark:bg-slate-800">
                        <Server className="mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600" />
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          暂无该类型的模型，点击上方按钮新增
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
                      {visibleProviders.map((provider, index) => {
                        const isGlobalDefault = isGlobalDefaultProvider(provider.id);
                        const isEmbeddingDefault = isDefaultEmbeddingProvider(provider.id);
                        const isRerankDefault = defaultRerankProviderId === provider.id;
                        const canUseEmbedding = provider.supportsEmbedding && !!provider.embeddingModel;
                        const chatLabel = provider.model
                          ? (provider.apiFormat === 'anthropic' ? '聊天 · Anthropic' : '聊天 · OpenAI')
                          : null;
                        const capabilitySummary = [
                          chatLabel,
                          canUseEmbedding ? '向量' : null,
                          provider.rerankModel ? `重排 · ${provider.rerankApiFormat === 'dashscope' ? '百炼' : 'Cohere'}` : null,
                        ].filter(Boolean).join(' / ') || '未配置能力';

                        return (
                        <motion.div
                          key={provider.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={CARD_CLASS}
                        >
                          {/* Card header */}
                          <div className="mb-4 flex items-start justify-between gap-3">
                            <div className="flex min-w-0 items-center gap-3">
                              <div className={ICON_WRAP_CLASS}>
                                <Server className="h-4 w-4" />
                              </div>
                              <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                                  {provider.id}
                                </h3>
                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{capabilitySummary}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              {activeTab === 'chat' && isGlobalDefault && (
                                <StatusBadge icon={<Plug className="h-3 w-3" />}>默认</StatusBadge>
                              )}
                              {activeTab === 'embedding' && isEmbeddingDefault && (
                                <StatusBadge icon={<Database className="h-3 w-3" />}>默认</StatusBadge>
                              )}
                              {activeTab === 'rerank' && isRerankDefault && (
                                <StatusBadge icon={<ArrowDownWideNarrow className="h-3 w-3" />}>默认</StatusBadge>
                              )}
                            </div>
                          </div>

                          {/* Card details */}
                          <dl className={DETAILS_CLASS}>
                            <ConfigRow label="Base URL" value={provider.baseUrl} title={provider.baseUrl} emphasis />
                            <ConfigRow
                              label="聊天模型"
                              value={provider.model ?? '未配置'}
                              title={provider.model ?? '未配置聊天模型'}
                              emphasis={!!provider.model}
                            />
                            <ConfigRow
                              label="向量模型"
                              value={canUseEmbedding ? '支持' : '不支持'}
                              title={canUseEmbedding ? provider.embeddingModel ?? '' : '不能用于知识库向量化'}
                            />
                            {provider.embeddingModel && (
                              <ConfigRow label="实际向量" value={provider.embeddingModel} title={provider.embeddingModel} emphasis={isEmbeddingDefault} />
                            )}
                            {canUseEmbedding && (
                              <ConfigRow label="向量维度" value={`${provider.embeddingDimensions ?? 1024} 维`} emphasis={isEmbeddingDefault} />
                            )}
                            {provider.rerankModel && (
                              <ConfigRow
                                label="重排模型"
                                value={`${provider.rerankModel}（${provider.rerankApiFormat === 'dashscope' ? '百炼' : 'Cohere'}）`}
                                title={provider.rerankModel}
                                emphasis={isRerankDefault}
                              />
                            )}
                            {provider.temperature != null && (
                              <ConfigRow label="温度" value={provider.temperature} />
                            )}
                            <ConfigRow
                              label="API Key"
                              value={provider.maskedApiKey}
                              title={provider.maskedApiKey}
                              monospace
                              emphasis
                            />
                          </dl>

                          {/* Test result */}
                          {testResults[provider.id] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className={`mb-3 px-3 py-2 rounded-lg text-xs font-medium ${
                                testResults[provider.id].success
                                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                {testResults[provider.id].success
                                  ? <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                  : <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                }
                                <span>{testResults[provider.id].message}</span>
                              </div>
                            </motion.div>
                          )}

                          {/* Card actions */}
                          <div className={ACTION_BAR_CLASS}>
                            <button
                              onClick={() => openEditModal(provider, activeTab)}
                              className={`${ACTION_BUTTON_CLASS} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`}
                              title="编辑"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                              编辑
                            </button>
                            <button
                              onClick={() => handleTest(provider.id)}
                              disabled={testingId === provider.id}
                              className={`${ACTION_BUTTON_CLASS} text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20`}
                              title="测试连接"
                            >
                              {testingId === provider.id
                                ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                : <RefreshCw className="w-3.5 h-3.5" />
                              }
                              测试
                            </button>
                            {/* 只展示当前 Tab 能力对应的"设为默认"，当前 Tab 的卡片必然具备该能力 */}
                            {activeTab === 'chat' && (
                              <button
                                onClick={() => handleSetDefault(provider.id)}
                                disabled={isGlobalDefault || settingDefault}
                                className={`${ACTION_BUTTON_CLASS} text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`}
                                title={isGlobalDefault ? '当前已是默认' : '在多个模型中设为默认'}
                              >
                                <Plug className="w-3.5 h-3.5" />
                                设为默认
                              </button>
                            )}
                            {activeTab === 'embedding' && (
                              <button
                                onClick={() => handleSetEmbeddingDefault(provider)}
                                disabled={isEmbeddingDefault || settingEmbeddingDefault}
                                className={`${ACTION_BUTTON_CLASS} text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`}
                                title={isEmbeddingDefault ? '当前已是默认' : '在多个模型中设为默认'}
                              >
                                <Database className="w-3.5 h-3.5" />
                                设为默认
                              </button>
                            )}
                            {activeTab === 'rerank' && (
                              <button
                                onClick={() => handleSetRerankDefault(provider)}
                                disabled={isRerankDefault || settingRerankDefault}
                                className={`${ACTION_BUTTON_CLASS} text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`}
                                title={isRerankDefault ? '当前已是默认' : '在多个模型中设为默认'}
                              >
                                <ArrowDownWideNarrow className="w-3.5 h-3.5" />
                                设为默认
                              </button>
                            )}
                            <button
                              onClick={() => setDeleteConfirmId(provider.id)}
                              className={`${ACTION_BUTTON_CLASS} ml-auto text-slate-400 hover:bg-red-50 hover:text-red-500 dark:text-slate-500 dark:hover:bg-red-900/20 dark:hover:text-red-300`}
                              title="删除"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                        );
                      })}
                    </div>
                  );
                })()
              )}

              {/* Voice service cards (语音服务 Tab) */}
              {activeTab === 'voice' && (
              <div className="mt-6">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  语音服务
                </h2>
                <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
                  {/* ASR Card */}
                  {asrConfig && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={CARD_CLASS}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className={ICON_WRAP_CLASS}>
                            <Mic className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                              ASR 语音识别
                            </h3>
                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">实时语音转写配置</p>
                          </div>
                        </div>
                        <StatusBadge icon={<Mic className="h-3 w-3" />}>语音服务</StatusBadge>
                      </div>

                      <dl className={DETAILS_CLASS}>
                        <ConfigRow label="WebSocket URL" value={asrConfig.url} title={asrConfig.url} emphasis />
                        <ConfigRow label="识别模型" value={asrConfig.model} title={asrConfig.model} emphasis />
                        <ConfigRow label="识别语言" value={asrConfig.language} />
                        <ConfigRow label="采样率" value={`${asrConfig.sampleRate}Hz`} />
                        <ConfigRow
                          label="API Key"
                          value={asrConfig.maskedApiKey}
                          title={asrConfig.maskedApiKey}
                          monospace
                          emphasis
                        />
                      </dl>

                      {asrTestResult && (
                        <div className={`mb-3 px-3 py-2 rounded-lg text-xs font-medium ${
                          asrTestResult.success
                            ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                            : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                        }`}>
                          <div className="flex items-center gap-1.5">
                            {asrTestResult.success
                              ? <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                              : <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            }
                            <span>{asrTestResult.message}</span>
                          </div>
                        </div>
                      )}

                      <div className={ACTION_BAR_CLASS}>
                        <button
                          onClick={openAsrModal}
                          className={`${ACTION_BUTTON_CLASS} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`}
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          编辑
                        </button>
                        <button
                          onClick={handleTestAsr}
                          disabled={testingAsr}
                          className={`${ACTION_BUTTON_CLASS} text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20`}
                        >
                          {testingAsr
                            ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            : <RefreshCw className="w-3.5 h-3.5" />
                          }
                          测试
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* TTS Card */}
                  {ttsConfig && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      className={CARD_CLASS}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className={ICON_WRAP_CLASS}>
                            <Volume2 className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                              TTS 语音合成
                            </h3>
                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">文本转语音输出配置</p>
                          </div>
                        </div>
                        <StatusBadge icon={<Volume2 className="h-3 w-3" />}>语音服务</StatusBadge>
                      </div>

                      <dl className={DETAILS_CLASS}>
                        <ConfigRow label="合成模型" value={ttsConfig.model} title={ttsConfig.model} emphasis />
                        <ConfigRow label="音色" value={ttsConfig.voice} title={ttsConfig.voice} emphasis />
                        <ConfigRow label="采样率" value={`${ttsConfig.sampleRate}Hz`} />
                        <ConfigRow label="音量" value={ttsConfig.volume} />
                        <ConfigRow
                          label="API Key"
                          value={ttsConfig.maskedApiKey}
                          title={ttsConfig.maskedApiKey}
                          monospace
                          emphasis
                        />
                      </dl>

                      <div className={ACTION_BAR_CLASS}>
                        <button
                          onClick={openTtsModal}
                          className={`${ACTION_BUTTON_CLASS} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`}
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          编辑
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Create / Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
                  {editingProvider ? '编辑' : '新增'}{MODEL_TYPE_LABEL[modalType]}
                </h3>

                <div className="space-y-4">
                  {/* 模型 ID */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      模型 ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formId}
                      onChange={(e) => setFormId(e.target.value)}
                      disabled={!!editingProvider}
                      placeholder="自定义唯一 ID，例如: bailian-chat"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                        placeholder:text-slate-400 focus:outline-none focus:ring-2
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Base URL */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Base URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formBaseUrl}
                      onChange={(e) => setFormBaseUrl(e.target.value)}
                      placeholder="例如: https://api.openai.com/v1"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                        placeholder:text-slate-400 focus:outline-none focus:ring-2
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                    />
                  </div>

                  {/* API Key */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      API Key{' '}
                      {editingProvider && (
                        <span className="text-slate-400 font-normal">(留空则不修改)</span>
                      )}
                      {!editingProvider && <span className="text-red-500">*</span>}
                    </label>
                    <div className="relative">
                      <input
                        type={showApiKey ? 'text' : 'password'}
                        value={formApiKey}
                        onChange={(e) => setFormApiKey(e.target.value)}
                        placeholder={editingProvider ? '留空则保持原值' : '输入 API Key'}
                        className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 dark:border-slate-600
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                          placeholder:text-slate-400 focus:outline-none focus:ring-2
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                      />
                      <button
                        type="button"
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400
                          hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                      >
                        {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {modalType === 'chat' && (
                  <>
                  {/* 聊天模型 */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        聊天模型
                      </label>
                      <button
                        type="button"
                        onClick={handleFetchModels}
                        disabled={fetchingModels}
                        className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 text-xs
                          font-medium text-slate-600 transition-colors hover:bg-slate-200
                          disabled:cursor-not-allowed disabled:opacity-50
                          dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                        title="从该端点拉取可用模型列表"
                      >
                        {fetchingModels
                          ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          : <ListPlus className="w-3.5 h-3.5" />
                        }
                        获取模型列表
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={formModel}
                        onChange={(e) => {
                          setFormModel(e.target.value);
                          setShowModelDropdown(false);
                        }}
                        onFocus={() => modelOptions.length > 0 && setShowModelDropdown(true)}
                        onBlur={() => setTimeout(() => setShowModelDropdown(false), 150)}
                        placeholder={modelOptions.length > 0 ? '从下拉列表选择或输入自定义聊天模型名' : '例如: qwen3.5-flash, deepseek-v4-flash, glm-5'}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                          placeholder:text-slate-400 focus:outline-none focus:ring-2
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                      />
                      {modelOptions.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setShowModelDropdown(!showModelDropdown)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400
                            hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      )}
                      {showModelDropdown && modelOptions.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-slate-700
                          border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg
                          max-h-60 overflow-auto">
                          {modelOptions.map((m) => (
                            <button
                              key={m.value}
                              type="button"
                              onClick={() => {
                                setFormModel(m.value);
                                setShowModelDropdown(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50
                                dark:hover:bg-slate-600 transition-colors flex justify-between items-center
                                ${formModel === m.value
                                  ? 'text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-slate-600'
                                  : 'text-slate-700 dark:text-slate-200'}`}
                            >
                              <span className="font-mono">{m.value}</span>
                              <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 whitespace-nowrap">{m.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Chat API format */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      聊天协议格式
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'openai', label: 'OpenAI 兼容', hint: '/chat/completions' },
                        { value: 'anthropic', label: 'Anthropic', hint: '/v1/messages' },
                      ].map((fmt) => (
                        <button
                          key={fmt.value}
                          type="button"
                          onClick={() => setFormApiFormat(fmt.value)}
                          className={`rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                            formApiFormat === fmt.value
                              ? 'border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/30 dark:text-primary-300'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'
                          }`}
                        >
                          <span className="block font-medium">{fmt.label}</span>
                          <span className="block text-xs text-slate-400 dark:text-slate-500">{fmt.hint}</span>
                        </button>
                      ))}
                    </div>
                    {formApiFormat === 'anthropic' && (
                      <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-500">
                        Anthropic 协议的 Base URL 填根地址（如 https://api.anthropic.com），系统自动补 /v1
                      </p>
                    )}
                  </div>
                  </>
                  )}

                  {modalType === 'embedding' && (
                  <>
                  {/* 向量模型 */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        向量模型 <span className="text-slate-400 font-normal">(用于知识库向量化)</span>
                      </label>
                      <button
                        type="button"
                        onClick={handleFetchModels}
                        disabled={fetchingModels}
                        className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 text-xs
                          font-medium text-slate-600 transition-colors hover:bg-slate-200
                          disabled:cursor-not-allowed disabled:opacity-50
                          dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                        title="从该端点拉取可用模型列表"
                      >
                        {fetchingModels
                          ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          : <ListPlus className="w-3.5 h-3.5" />
                        }
                        获取模型列表
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={formEmbeddingModel}
                        onChange={(e) => {
                          setFormEmbeddingModel(e.target.value);
                          setShowEmbeddingDropdown(false);
                        }}
                        onFocus={() => modelOptions.length > 0 && setShowEmbeddingDropdown(true)}
                        onBlur={() => setTimeout(() => setShowEmbeddingDropdown(false), 150)}
                        placeholder={modelOptions.length > 0 ? '从下拉列表选择或输入自定义向量模型名' : '例如: text-embedding-v3, embedding-3'}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                          placeholder:text-slate-400 focus:outline-none focus:ring-2
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                      />
                      {modelOptions.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setShowEmbeddingDropdown(!showEmbeddingDropdown)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400
                            hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      )}
                      {showEmbeddingDropdown && modelOptions.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-slate-700
                          border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg
                          max-h-60 overflow-auto">
                          {modelOptions.map((m) => (
                            <button
                              key={m.value}
                              type="button"
                              onClick={() => {
                                setFormEmbeddingModel(m.value);
                                setShowEmbeddingDropdown(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50
                                dark:hover:bg-slate-600 transition-colors flex justify-between items-center
                                ${formEmbeddingModel === m.value
                                  ? 'text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-slate-600'
                                  : 'text-slate-700 dark:text-slate-200'}`}
                            >
                              <span className="font-mono">{m.value}</span>
                              <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 whitespace-nowrap">{m.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {modalType === 'embedding' && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        向量维度 <span className="text-slate-400 font-normal">(需与向量库维度一致，默认 1024，可用 APP_VECTOR_DIMENSIONS 配置)</span>
                      </label>
                      <input
                        type="number"
                        min={1}
                        value={formEmbeddingDimensions}
                        onChange={(e) => setFormEmbeddingDimensions(e.target.value)}
                        placeholder="1024"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                          placeholder:text-slate-400 focus:outline-none focus:ring-2
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                      />
                    </div>
                  )}
                  </>
                  )}

                  {modalType === 'rerank' && (
                  <>
                  {/* 重排模型 */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      重排模型 <span className="text-slate-400 font-normal">(用于知识库检索重排)</span>
                    </label>
                    <input
                      type="text"
                      value={formRerankModel}
                      onChange={(e) => setFormRerankModel(e.target.value)}
                      placeholder="例如: gte-rerank, jina-reranker-v2-base-multilingual, bge-reranker-v2-m3"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                        placeholder:text-slate-400 focus:outline-none focus:ring-2
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                    />
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {[
                        { value: 'cohere', label: 'Cohere 兼容', hint: 'Jina / SiliconFlow / vLLM' },
                        { value: 'dashscope', label: '百炼原生', hint: 'DashScope gte-rerank' },
                      ].map((fmt) => (
                        <button
                          key={fmt.value}
                          type="button"
                          onClick={() => setFormRerankApiFormat(fmt.value)}
                          className={`rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                            formRerankApiFormat === fmt.value
                              ? 'border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/30 dark:text-primary-300'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'
                          }`}
                        >
                          <span className="block font-medium">{fmt.label}</span>
                          <span className="block text-xs text-slate-400 dark:text-slate-500">{fmt.hint}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  </>
                  )}

                  {modalType === 'chat' && (
                  <>
                  {/* Max Tokens / Top P */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Max Tokens <span className="text-slate-400 font-normal">(选填)</span>
                      </label>
                      <input
                        type="number"
                        min={1}
                        value={formMaxTokens}
                        onChange={(e) => setFormMaxTokens(e.target.value)}
                        placeholder="如 4096"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                          placeholder:text-slate-400 focus:outline-none focus:ring-2
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Top P <span className="text-slate-400 font-normal">(选填)</span>
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={1}
                        step="0.05"
                        value={formTopP}
                        onChange={(e) => setFormTopP(e.target.value)}
                        placeholder="如 0.9"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                          placeholder:text-slate-400 focus:outline-none focus:ring-2
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                      />
                    </div>
                  </div>

                  {/* Temperature */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Temperature <span className="text-slate-400 font-normal">(可选, 默认 0.2)</span>
                    </label>
                    <input
                      type="text"
                      value={formTemperature}
                      onChange={(e) => setFormTemperature(e.target.value)}
                      placeholder="例如: 0.2, 0.7, 1"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
                        placeholder:text-slate-400 focus:outline-none focus:ring-2
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
                    />
                  </div>
                  </>
                  )}
                </div>

                {/* Modal actions */}
                <div className="flex gap-3 justify-end mt-6">
                  <motion.button
                    onClick={closeModal}
                    disabled={saving}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-600
                      text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm
                      hover:bg-slate-50 dark:hover:bg-slate-700 transition-all
                      disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    取消
                  </motion.button>
                  <motion.button
                    onClick={handleSaveModal}
                    disabled={saving}
                    className="px-5 py-2.5 text-white rounded-xl font-semibold text-sm
                      bg-gradient-to-r from-primary-500 to-primary-600
                      shadow-lg shadow-primary-500/25
                      hover:from-primary-600 hover:to-primary-700
                      transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {saving ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        保存中...
                      </span>
                    ) : (
                      '保存'
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Voice Edit Modal */}
      <AnimatePresence>
        {showVoiceModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVoiceModal(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
                  {showVoiceModal === 'asr' ? '编辑 ASR 语音识别' : '编辑 TTS 语音合成'}
                </h3>

                {showVoiceModal === 'asr' ? (
                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">连接配置</p>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">WebSocket URL</label>
                      <input type="text" value={asrForm.url || ''} onChange={(e) => setAsrForm(f => ({ ...f, url: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Model</label>
                        <input type="text" value={asrForm.model || ''} onChange={(e) => setAsrForm(f => ({ ...f, model: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">API Key <span className="text-slate-400 font-normal">(留空不改)</span></label>
                        <input type="password" value={asrForm.apiKey || ''} onChange={(e) => setAsrForm(f => ({ ...f, apiKey: e.target.value }))}
                          placeholder="留空则保持原值"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Language</label>
                      <input type="text" value={asrForm.language || ''} onChange={(e) => setAsrForm(f => ({ ...f, language: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                    </div>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2">音频参数</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Format</label>
                        <input type="text" value={asrForm.format || ''} onChange={(e) => setAsrForm(f => ({ ...f, format: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Sample Rate</label>
                        <input type="number" value={asrForm.sampleRate || 0} onChange={(e) => setAsrForm(f => ({ ...f, sampleRate: Number(e.target.value) }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2">VAD 参数</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Turn Detection</label>
                        <select value={asrForm.enableTurnDetection ? 'true' : 'false'} onChange={(e) => setAsrForm(f => ({ ...f, enableTurnDetection: e.target.value === 'true' }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow">
                          <option value="true">Enabled</option>
                          <option value="false">Disabled</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Detection Type</label>
                        <input type="text" value={asrForm.turnDetectionType || ''} onChange={(e) => setAsrForm(f => ({ ...f, turnDetectionType: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Threshold</label>
                        <input type="number" step="0.1" value={asrForm.turnDetectionThreshold || 0} onChange={(e) => setAsrForm(f => ({ ...f, turnDetectionThreshold: Number(e.target.value) }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Silence Duration (ms)</label>
                        <input type="number" value={asrForm.turnDetectionSilenceDurationMs || 0} onChange={(e) => setAsrForm(f => ({ ...f, turnDetectionSilenceDurationMs: Number(e.target.value) }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">连接配置</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Model</label>
                        <input type="text" value={ttsForm.model || ''} onChange={(e) => setTtsForm(f => ({ ...f, model: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">API Key <span className="text-slate-400 font-normal">(留空不改)</span></label>
                        <input type="password" value={ttsForm.apiKey || ''} onChange={(e) => setTtsForm(f => ({ ...f, apiKey: e.target.value }))}
                          placeholder="留空则保持原值"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2">语音参数</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Voice</label>
                        <input type="text" value={ttsForm.voice || ''} onChange={(e) => setTtsForm(f => ({ ...f, voice: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Format</label>
                        <input type="text" value={ttsForm.format || ''} onChange={(e) => setTtsForm(f => ({ ...f, format: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Sample Rate</label>
                        <input type="number" value={ttsForm.sampleRate || 0} onChange={(e) => setTtsForm(f => ({ ...f, sampleRate: Number(e.target.value) }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Mode</label>
                        <input type="text" value={ttsForm.mode || ''} onChange={(e) => setTtsForm(f => ({ ...f, mode: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Language</label>
                        <input type="text" value={ttsForm.languageType || ''} onChange={(e) => setTtsForm(f => ({ ...f, languageType: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2">输出控制</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Speech Rate</label>
                        <input type="number" step="0.1" value={ttsForm.speechRate || 0} onChange={(e) => setTtsForm(f => ({ ...f, speechRate: Number(e.target.value) }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Volume</label>
                        <input type="number" value={ttsForm.volume || 0} onChange={(e) => setTtsForm(f => ({ ...f, volume: Number(e.target.value) }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal actions */}
                <div className="flex gap-3 justify-end mt-6">
                  <motion.button
                    onClick={() => setShowVoiceModal(null)}
                    disabled={voiceSaving}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    取消
                  </motion.button>
                  <motion.button
                    onClick={showVoiceModal === 'asr' ? handleSaveAsr : handleSaveTts}
                    disabled={voiceSaving}
                    className="px-5 py-2.5 text-white rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {voiceSaving ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        保存中...
                      </span>
                    ) : (
                      '保存'
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <ConfirmDialog
        open={pendingDefaultProviderId !== null}
        title="设为默认聊天服务"
        message={`确定要将 "${pendingDefaultProviderId ?? ''}" 设为默认聊天服务吗？该操作不会改变知识库使用的向量模型。`}
        confirmText="确认设置"
        cancelText="取消"
        loading={settingDefault}
        onConfirm={handleConfirmSetDefault}
        onCancel={() => {
          if (!settingDefault) {
            setPendingDefaultProviderId(null);
          }
        }}
      />

      <ConfirmDialog
        open={pendingDefaultEmbeddingProviderId !== null}
        title="设为默认向量服务"
        message={`确定要将 "${pendingDefaultEmbeddingProviderId ?? ''}" 的向量模型 "${pendingEmbeddingProvider?.embeddingModel ?? ''}"（${pendingEmbeddingProvider?.embeddingDimensions ?? 1024}维）设为知识库默认向量服务吗？后续上传和重新向量化会使用这个向量模型，不会使用聊天模型。`}
        confirmText="确认设置"
        cancelText="取消"
        loading={settingEmbeddingDefault}
        onConfirm={handleConfirmSetEmbeddingDefault}
        onCancel={() => {
          if (!settingEmbeddingDefault) {
            setPendingDefaultEmbeddingProviderId(null);
          }
        }}
      />

      <ConfirmDialog
        open={pendingDefaultRerankProviderId !== null}
        title="设为默认重排服务"
        message={`确定要将 "${pendingDefaultRerankProviderId ?? ''}" 设为知识库检索的默认重排服务吗？向量召回后将使用该模型对候选片段重排，未配置或调用失败时自动回退向量排序。`}
        confirmText="确认设置"
        cancelText="取消"
        loading={settingRerankDefault}
        onConfirm={handleConfirmSetRerankDefault}
        onCancel={() => {
          if (!settingRerankDefault) {
            setPendingDefaultRerankProviderId(null);
          }
        }}
      />

      {/* Delete confirmation dialog */}
      <AnimatePresence>
        {deleteConfirmId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteConfirmId(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  删除模型
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  确定要删除模型 &ldquo;{deleteConfirmId}&rdquo; 吗？删除后无法恢复。
                  如果有模块正在使用此模型，请先切换到其他模型。
                </p>
                <div className="flex gap-3 justify-end">
                  <motion.button
                    onClick={() => setDeleteConfirmId(null)}
                    disabled={deleting}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-600
                      text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm
                      hover:bg-slate-50 dark:hover:bg-slate-700 transition-all
                      disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    取消
                  </motion.button>
                  <motion.button
                    onClick={handleDelete}
                    disabled={deleting}
                    className="px-5 py-2.5 text-white rounded-xl font-semibold text-sm
                      bg-gradient-to-r from-red-500 to-red-600
                      hover:from-red-600 hover:to-red-700
                      transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {deleting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        删除中...
                      </span>
                    ) : (
                      '确定删除'
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className={`fixed bottom-6 left-1/2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium
              flex items-center gap-2 z-[60] ${
                toast.type === 'success'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
          >
            {toast.type === 'success'
              ? <CheckCircle className="w-4 h-4" />
              : <XCircle className="w-4 h-4" />
            }
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

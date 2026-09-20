import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {BookOpen, Calendar, ChevronLeft, ChevronRight, Database, FileStack, MessageSquare, Moon, Settings, Sparkles, Sun, Users,} from 'lucide-react';
import {useTheme} from '../hooks/useTheme';
import {useEffect, useState} from 'react';
import UnifiedInterviewModal, {UnifiedInterviewConfig} from './UnifiedInterviewModal';
import {ROUTES} from '../constants/routes';

interface NavItem {
  id: string;
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface NavGroup {
  id: string;
  title: string;
  items: NavItem[];
}

export default function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const {theme, toggleTheme} = useTheme();
  const navigate = useNavigate();
  const [interviewModalPreset, setInterviewModalPreset] = useState<{
    defaultMode: 'text' | 'voice';
    defaultResumeId?: number;
    title: string;
    subtitle: string;
    startButtonText: string;
  } | null>(null);

  // 侧边栏折叠状态：进入二级及以下路由时自动折叠；用户手动展开/折叠会临时覆盖，下次路由变化重新评估
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    // 路径段数 ≥ 2 视为二级及以下路由（如 /history/123、/interview/create/abc、/knowledgebase/chat）
    const segments = currentPath.split('/').filter(Boolean);
    setCollapsed(segments.length >= 2);
  }, [currentPath]);

  const openInterviewModalWithResume = (resumeId: number) => {
    setInterviewModalPreset({
      defaultMode: 'text',
      defaultResumeId: resumeId,
      title: '开始模拟面试',
      subtitle: '配置面试参数，开始练习',
      startButtonText: '开始面试',
    });
  };

  const handleInterviewStart = (config: UnifiedInterviewConfig) => {
    setInterviewModalPreset(null);
    if (config.mode === 'text') {
      navigate(ROUTES.interviewCreate(crypto.randomUUID()), {
        state: {
          resumeId: config.resumeId,
          interviewConfig: {
            skillId: config.skillId,
            difficulty: config.difficulty,
            questionCount: config.questionCount,
            llmProvider: config.llmProvider,
          },
        },
      });
      return;
    }

    const params = new URLSearchParams({
      skillId: config.skillId,
      difficulty: config.difficulty,
    });
    navigate(`/voice-interview?${params.toString()}`, {
      state: {
        voiceConfig: {
          skillId: config.skillId,
          difficulty: config.difficulty,
          techEnabled: true,
          projectEnabled: true,
          hrEnabled: true,
          plannedDuration: config.plannedDuration,
          resumeId: config.resumeId,
          llmProvider: config.llmProvider,
        },
      },
    });
  };

  // 按业务模块组织的导航项
  const navGroups: NavGroup[] = [
    {
      id: 'interview',
      title: '面试准备',
      items: [
        { id: 'resumes', path: '/history', label: '简历管理', icon: FileStack, description: '管理简历，AI 分析' },
        { id: 'interview-hub', path: '/interview-hub', label: '模拟面试', icon: Sparkles, description: '文字/语音面试练习' },
        { id: 'interviews', path: '/interviews', label: '面试记录', icon: Users, description: '查看面试历史' },
        { id: 'interview-schedule', path: '/interview-schedule', label: '面试日程', icon: Calendar, description: '管理面试安排' },
      ],
    },
    {
      id: 'knowledge',
      title: '知识库',
      items: [
        { id: 'kb-manage', path: '/knowledgebase', label: '知识库管理', icon: Database, description: '管理知识文档' },
        { id: 'kb-interview', path: '/knowledgebase-interview', label: '知识库面试', icon: BookOpen, description: '题库维护与面试' },
        { id: 'chat', path: '/knowledgebase/chat', label: '问答助手', icon: MessageSquare, description: '基于知识库问答' },
      ],
    },
    {
      id: 'system',
      title: '系统',
      items: [
        { id: 'settings', path: '/settings', label: '设置', icon: Settings, description: '管理模型和语音服务' },
      ],
    },
  ];

  // 判断当前页面是否匹配导航项
  const isActive = (path: string) => {
    if (path.startsWith('#')) return false;
    if (path === '/history') {
      return currentPath === '/history'
        || currentPath === '/'
        || currentPath.startsWith('/history/')
        || currentPath === '/upload';
    }
    if (path === '/interview-hub') {
      return currentPath === '/interview-hub'
        || currentPath === ROUTES.interview
        || currentPath.startsWith('/interview/')
        || currentPath.startsWith('/voice-interview');
    }
    if (path === '/knowledgebase') {
      return currentPath === '/knowledgebase' || currentPath === '/knowledgebase/upload';
    }
    return currentPath.startsWith(path);
  };

  return (
    <div className="flex min-h-[110vh] bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      {/* 左侧边栏：支持折叠（手动 toggle + 二级及以下路由自动折叠） */}
      <aside className={`bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-700 fixed h-screen left-0 top-0 z-50 flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
        {/* 折叠/展开按钮：浮在侧边栏右边缘 */}
        <button
          onClick={() => setCollapsed(c => !c)}
          className="absolute top-7 -right-3 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 shadow flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 z-10"
          title={collapsed ? '展开侧边栏' : '折叠侧边栏'}
          aria-label={collapsed ? '展开侧边栏' : '折叠侧边栏'}
        >
          {collapsed ? <ChevronRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-300" /> : <ChevronLeft className="w-3.5 h-3.5 text-slate-500 dark:text-slate-300" />}
        </button>

        {/* Logo */}
        <div className={`border-b border-slate-100 dark:border-slate-700 flex items-center ${collapsed ? 'justify-center p-4' : 'justify-between p-6'}`}>
          <Link to="/history" className="flex items-center gap-3" title={collapsed ? 'AI Interview 智能面试助手' : undefined}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            {!collapsed && (
              <div>
                <span className="text-lg font-bold text-slate-800 dark:text-white tracking-tight block">AI Interview</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">智能面试助手</span>
              </div>
            )}
          </Link>
        </div>

        {/* 主题切换按钮 */}
        <div className={`pb-2 ${collapsed ? 'px-2 pt-2' : 'px-4 pt-2'}`}>
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${collapsed ? 'justify-center px-0 py-2' : 'justify-center gap-2 px-3 py-2'}`}
            title={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 flex-shrink-0" />
            ) : (
              <Moon className="w-4 h-4 flex-shrink-0" />
            )}
            {!collapsed && <span className="text-sm font-medium">{theme === 'dark' ? '浅色模式' : '深色模式'}</span>}
          </button>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 overflow-y-auto" style={{ padding: collapsed ? '0.5rem 0.25rem' : '1rem' }}>
          <div className={collapsed ? 'space-y-4' : 'space-y-6'}>
            {navGroups.map((group) => (
              <div key={group.id}>
                {!collapsed && (
                  <div className="px-3 mb-2">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {group.title}
                    </span>
                  </div>
                )}
                {collapsed && <div className="h-px bg-slate-100 dark:bg-slate-700 mx-2 mb-3" />}
                <div className={collapsed ? 'space-y-2' : 'space-y-1'}>
                  {group.items.map((item) => {
                    const active = isActive(item.path);

                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`group relative flex items-center rounded-xl transition-all duration-200 ${collapsed ? 'justify-center p-2' : 'gap-3 px-3 py-2.5'}
                          ${active
                            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        title={collapsed ? item.label : undefined}
                      >
                        <div className={`rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${collapsed ? 'w-9 h-9' : 'w-9 h-9'}
                          ${active
                            ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 group-hover:text-slate-700 dark:group-hover:text-white'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        {!collapsed && (
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm block ${active ? 'font-semibold' : 'font-medium'}`}>
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="text-xs text-slate-400 dark:text-slate-500 truncate block">
                                {item.description}
                              </span>
                            )}
                          </div>
                        )}
                        {!collapsed && active && <ChevronRight className="w-4 h-4 text-primary-400" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* 底部信息：折叠时隐藏 */}
        {!collapsed && (
          <div className="p-4 border-t border-slate-100 dark:border-slate-700">
            <div className="px-3 py-2 bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/30 dark:to-slate-800 rounded-xl">
              <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">AI 面试助手 v1.0</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Powered by AI</p>
            </div>
          </div>
        )}
      </aside>

      {/* 主内容区：flex 列布局，页面内容自然撑开文档（window 整页滚动）；子页面可自行占满高度 */}
      <main className={`flex-1 flex flex-col p-10 min-h-screen transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        <motion.div
          key={currentPath}
          className="flex-1 min-h-0 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet context={{ openInterviewModalWithResume }} />
        </motion.div>
      </main>

      {/* 统一面试弹窗 */}
      <UnifiedInterviewModal
        isOpen={interviewModalPreset !== null}
        onClose={() => setInterviewModalPreset(null)}
        onStart={handleInterviewStart}
        defaultMode={interviewModalPreset?.defaultMode || 'text'}
        defaultResumeId={interviewModalPreset?.defaultResumeId}
        hideModeSwitch={interviewModalPreset?.defaultResumeId == null}
        title={interviewModalPreset?.title || '开始模拟面试'}
        subtitle={interviewModalPreset?.subtitle || '选择面试模式和主题，快速开始'}
        startButtonText={interviewModalPreset?.startButtonText || '开始面试'}
      />
    </div>
  );
}

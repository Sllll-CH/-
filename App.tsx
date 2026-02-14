
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Droplets, 
  Truck, 
  Dribbble, 
  Gamepad2, 
  ChevronRight, 
  Mail, 
  Github, 
  ShieldCheck, 
  Trophy,
  Target,
  Sparkles,
  Rocket,
  Layout,
  Clock,
  Zap,
  CheckCircle2,
  Calendar,
  Compass,
  ArrowLeft
} from 'lucide-react';
import { ExperienceItem, Achievement } from './types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: '城市污水处理系统运维实务',
    organization: '扶绥县污水处理厂',
    period: '2024.01 - 2024.02',
    category: 'internship',
    description: [
      '深入一线参与城镇污水二级处理工艺流程监控',
      '协助进行出水水质理化指标检测及数据分析',
      '探索资源循环视角下的污水能量回收可能性'
    ],
    tags: ['环境工程', '资源化利用', '现场实操']
  },
  {
    id: '2',
    title: '高频城市动态物流运营优化专员',
    organization: '美团 (Meituan) - 互联网大厂',
    period: '2023.07 - 2023.09',
    category: 'professional',
    description: [
      '负责城市“最后一公里”即时配送网络的实地运营与路径动态优化',
      '在极端动态环境下维持 99.9% 的准时履约率',
      '深入理解高并发背景下的物流供应链模型'
    ],
    tags: ['物流优化', '高并发处理', '实操调度']
  }
];

const achievements: Achievement[] = [
  { id: '1', label: 'CS2 竞技水准', value: 'S级全球顶级段位', icon: 'Gamepad2' },
  { id: '2', label: '校园体育荣誉', value: '桂林理工大学校队成员', icon: 'Dribbble' },
  { id: '3', label: '学术背景', value: '资源循环科学与工程 (大一)', icon: 'GraduationCap' },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'plan'>('home');

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const HomePage = () => (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">你好，我是 Slll · 桂工大一学生</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              重新定义 <span className="text-blue-600">资源</span> 与 <span className="text-emerald-500">循环</span> 的未来
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              深耕环境技术，在互联网物流前沿磨砺意志，在电子竞技领域追求巅峰战术。我不仅是规则的执行者，更是系统的优化者。
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setCurrentView('plan')} 
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-slate-200"
              >
                查看战略规划 <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
              <div className="flex items-center space-x-4">
                <a href="mailto:1403864879@qq.com" className="p-3.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Mail size={24} /></a>
                <a href="https://github.com/sllll-CH" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"><Github size={24} /></a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-3xl rotate-6 absolute top-0 left-0 -z-10 opacity-10"></div>
            <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl float-anim border-8 border-white flex items-center justify-center relative overflow-hidden">
               <span className="text-6xl font-black text-slate-400 opacity-20 absolute -right-4 -bottom-4 rotate-12">Slll</span>
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="Slll" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">实践与职业路径</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3.5 rounded-2xl ${exp.category === 'professional' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                    {exp.category === 'professional' ? <Truck size={32} /> : <Droplets size={32} />}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-400 rounded-full uppercase tracking-tighter">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{exp.title}</h3>
                <p className="text-blue-600 font-bold mb-6">{exp.organization}</p>
                <ul className="space-y-4 mb-8 text-sm text-slate-600 leading-relaxed">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-slate-200 rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traits Section */}
      <section id="traits" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">核心特质</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((ach) => (
              <div key={ach.id} className="flex items-center gap-5 p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-200">
                  {ach.icon === 'Gamepad2' ? <Gamepad2 size={28} /> : ach.icon === 'Dribbble' ? <Dribbble size={28} /> : <GraduationCap size={28} />}
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{ach.label}</div>
                  <div className="text-xl font-bold text-slate-900">{ach.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const PlanPage = () => (
    <div className="pt-24 pb-24 px-6 max-w-6xl mx-auto animate-in slide-in-from-bottom-8 duration-700">
      <button 
        onClick={() => setCurrentView('home')}
        className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-12 font-bold group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 返回主页
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Slll 战略路线图</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">基于 UASF 操作系统与“震动型先锋”性格定制的长期进化指南。</p>
        </div>
        <div className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-200 rotate-1">
          VERSION 2024.Q1
        </div>
      </div>

      {/* UASF System */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <Layout className="text-blue-600" size={32} />
          <h2 className="text-2xl font-bold">UASF 极简操作系统 (操作手册)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">极简捕捉 (GTD)</h3>
            <p className="text-slate-500 text-sm leading-relaxed">使用 Todoist 手机端。2分钟内能做完的立即执行；不能做的，直接输入 App，大脑不留存任何待办。</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">弹性时间块</h3>
            <p className="text-slate-500 text-sm leading-relaxed">拒绝排满。每天锁定 2 个“深度工作块”（90分钟/块）。能量高时猛攻《化工原理》，其余留白用于“省电模式”。</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">五分钟冷启动</h3>
            <p className="text-slate-500 text-sm leading-relaxed">不想动时欺骗大脑：“只看5分钟课本”。一旦启动，“先锋”基因会自动带你跑完剩下的路。</p>
          </div>
        </div>
      </div>

      {/* Short Term OKRs */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <Target className="text-blue-600" size={32} />
          <h2 className="text-2xl font-bold">下学期短期目标 (大一/二：生存与试探)</h2>
        </div>
        <div className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Target size={300} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-6">OKR 核心战果</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 bg-emerald-400/20 text-emerald-400 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 size={14} /></div>
                  <div>
                    <div className="font-bold mb-1">关键结果 1：硬核攻坚</div>
                    <p className="text-slate-400 text-sm">攻克《化工原理》或《物理化学》，平时作业零积压。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 bg-emerald-400/20 text-emerald-400 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 size={14} /></div>
                  <div>
                    <div className="font-bold mb-1">关键结果 2：解析标签</div>
                    <p className="text-slate-400 text-sm">每月精读 1 篇资源循环前沿综述，定位兴趣领域。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 bg-emerald-400/20 text-emerald-400 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 size={14} /></div>
                  <div>
                    <div className="font-bold mb-1">关键结果 3：碎片化积累</div>
                    <p className="text-slate-400 text-sm">利用“省电时间”每天背诵 30 个英语单词。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-6">每周节奏控制</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-2xl">
                  <span className="text-slate-300">周一至周五</span>
                  <span className="font-bold text-blue-400 uppercase text-xs">第一波冲击 (作业零积压)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-2xl">
                  <span className="text-slate-300">周末</span>
                  <span className="font-bold text-emerald-400 uppercase text-xs">深度省电 (彻底离线充电)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Year Strategic Map */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <Compass className="text-blue-600" size={32} />
          <h2 className="text-2xl font-bold">三年战略规划 (漏斗式策略)</h2>
        </div>
        <div className="relative space-y-8">
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-slate-200"></div>
          
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
              <span className="text-xs font-black text-blue-600">01</span>
            </div>
            <h3 className="text-xl font-bold mb-2">大二下：防御与起步</h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">刷高 GPA 是唯一万能门票。观察实验课表现：不讨厌即是喜欢。</p>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10">
              <span className="text-xs font-black text-slate-400">02</span>
            </div>
            <h3 className="text-xl font-bold mb-2">大三：分流与尝试</h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">决定路径：科研路（进实验室出大创） vs 就业/留学路（关注碳中和、ESG 风口）。</p>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center z-10">
              <span className="text-xs font-black text-slate-400">03</span>
            </div>
            <h3 className="text-xl font-bold mb-2">大四：精准爆破</h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">利用 12 周学年制拆解申请季/考研季。简单的社交关系将成为你高光冲刺的燃料。</p>
          </div>
        </div>
      </div>

      {/* Special Tip */}
      <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
        <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
          <Calendar size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">送给你的锦囊</h3>
          <p className="text-blue-700/80 text-sm leading-relaxed">
            “震动型先锋”的克星是“断点”。永远在 Todoist 里保留一个“极其简单的下一步”。
            例如：不要写“复习物化”，要写“打开物化课本第 45 页”。启动成本越低，成功的概率越高。
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }} 
            className="font-bold text-xl tracking-tighter text-blue-600 hover:opacity-80 transition-opacity"
          >
            Slll.PORTFOLIO
          </button>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            {currentView === 'home' ? (
              <>
                <button onClick={scrollToSection('about')} className="hover:text-blue-600 transition-colors">关于</button>
                <button onClick={scrollToSection('experience')} className="hover:text-blue-600 transition-colors">经历</button>
                <button onClick={() => setCurrentView('plan')} className="hover:text-blue-600 transition-colors font-bold text-blue-600 border-b-2 border-blue-600 pb-1">战略计划</button>
                <button onClick={scrollToSection('traits')} className="hover:text-blue-600 transition-colors">特质</button>
              </>
            ) : (
              <button onClick={() => setCurrentView('home')} className="hover:text-blue-600 transition-colors flex items-center gap-1"><ArrowLeft size={16}/> 返回主页</button>
            )}
            <a href="mailto:1403864879@qq.com" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">联系我</a>
          </div>
        </div>
      </nav>

      {currentView === 'home' ? <HomePage /> : <PlanPage />}

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-bold text-xl text-blue-600 mb-2">Slll.PORTFOLIO</div>
            <p className="text-slate-400 text-sm">© 2024 Guilin University of Technology</p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <button onClick={() => setCurrentView('home')} className="hover:text-blue-600 transition-colors uppercase">About</button>
            <button onClick={() => setCurrentView('plan')} className="hover:text-blue-600 transition-colors uppercase">Strategic Plan</button>
            <a href="mailto:1403864879@qq.com" className="hover:text-blue-600 transition-colors uppercase">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

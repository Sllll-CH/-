
import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Droplets, 
  Truck, 
  Dribbble, 
  Gamepad2, 
  MessageSquare, 
  ChevronRight, 
  Mail, 
  Github, 
  Send,
  Zap,
  ShieldCheck,
  Trophy
} from 'lucide-react';
import { getGeminiResponse } from './services/geminiService.ts';
import { ExperienceItem, Achievement, ChatMessage } from './types.ts';

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
      '在极端动态环境下维持 99.9% 的准时履约率，展现卓越的决策能力',
      '处理大规模多节点物流调度，深入理解高并发背景下的物流供应链模型'
    ],
    tags: ['物流优化', '高并发处理', '实操调度']
  }
];

const achievements: Achievement[] = [
  { id: '1', label: 'CS2 竞技水准', value: 'S级全球顶级段位', icon: 'Gamepad2' },
  { id: '2', label: '校园体育荣誉', value: '桂林理工大学校队成员', icon: 'Dribbble' },
  { id: '3', label: '学术背景', value: '资源循环科学与工程 (大二)', icon: 'GraduationCap' },
];

const App: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setChatMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const responseText = await getGeminiResponse(input);
    const aiMsg: ChatMessage = { role: 'model', text: responseText || "我未能生成回复。" };
    setChatMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={scrollToSection('about')} 
            className="font-bold text-xl tracking-tighter text-blue-600 hover:opacity-80 transition-opacity"
          >
            Slll.PORTFOLIO
          </button>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <button onClick={scrollToSection('about')} className="hover:text-blue-600 transition-colors">关于 Slll</button>
            <button onClick={scrollToSection('experience')} className="hover:text-blue-600 transition-colors">经历</button>
            <button onClick={scrollToSection('achievements')} className="hover:text-blue-600 transition-colors">荣誉</button>
            <button 
              onClick={scrollToSection('ai-assistant')} 
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              AI 助手
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              你好，我是 Slll · 桂工大二学生
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              重新定义 <span className="text-blue-600">资源</span> 与 <span className="text-emerald-500">循环</span> 的未来
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              深耕环境技术，在互联网物流前沿磨砺意志，在电子竞技领域追求巅峰战术。我不仅是规则的执行者，更是系统的优化者。
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToSection('ai-assistant')} 
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-slate-200"
              >
                对话 Slll 的 AI 助手 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-4">
                <a href="mailto:1403864879@qq.com" className="p-3.5 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all" title="发送邮件给 Slll"><Mail size={24} /></a>
                <a href="https://github.com/sllll-CH" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all" title="访问 Slll 的 GitHub"><Github size={24} /></a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-3xl rotate-6 absolute top-0 left-0 -z-10 opacity-10"></div>
            <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl float-anim border-8 border-white flex items-center justify-center relative overflow-hidden">
               <span className="text-6xl font-black text-slate-400 opacity-20 absolute -right-4 -bottom-4 rotate-12">Slll</span>
               <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
                alt="Slll Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-slate-200/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-700">正在寻找 2025 夏季实习</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">致力于将循环经济理论应用于大型工业场景与智能城市建设。</p>
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
                <p className="text-blue-600 font-bold mb-6 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {exp.organization}
                </p>
                <ul className="space-y-4 mb-8">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-4 text-slate-600 text-sm leading-relaxed group">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-slate-200 rounded-full flex-shrink-0 group-hover:bg-blue-400 transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[11px] font-bold rounded-lg border border-slate-100/50">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Hobbies */}
      <section id="achievements" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Slll 的核心特质</h2>
              {achievements.map((ach) => (
                <div key={ach.id} className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-200">
                    {ach.icon === 'Gamepad2' ? <Gamepad2 size={24} /> : ach.icon === 'Dribbble' ? <Dribbble size={24} /> : <GraduationCap size={24} />}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">{ach.label}</div>
                    <div className="text-lg font-bold text-slate-900">{ach.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* CS2 Highlight Card */}
              <div className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] sm:aspect-auto">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt="CS2" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="text-emerald-400" size={20} />
                    <span className="text-emerald-400 font-black tracking-widest text-[10px]">GLOBAL ELITE (S段位)</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">CS2 战术分析专家</h4>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-90">在极高压力的环境下保持 150ms 以内的决策响应，熟稔动态博弈与空间控制理论。</p>
                </div>
              </div>
              
              {/* Basketball Highlight Card */}
              <div className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] sm:aspect-auto">
                <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt="Basketball" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="text-yellow-400" size={20} />
                    <span className="text-yellow-400 font-black tracking-widest text-[10px]">VARSITY TEAM</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">桂工校队核心</h4>
                  <p className="text-slate-200 text-sm leading-relaxed opacity-90">作为团队拼图，不仅负责进攻侧的攻坚，更在防守端提供坚实的心理与体力支撑。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="ai-assistant" className="py-24 bg-slate-950 text-white overflow-hidden relative scroll-mt-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-[40rem] h-[40rem] bg-blue-600 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-[40rem] h-[40rem] bg-emerald-600 blur-[160px] rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[11px] font-black uppercase tracking-widest mb-6">
              <Zap size={14} /> Gemini 3 AI Assistant
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">深度探索 Slll 的简历</h2>
            <p className="text-slate-400 text-lg">询问关于我的专业背景、电竞段位或在美团实战的任何细节。</p>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl h-[600px] flex flex-col shadow-2xl relative">
            <div className="flex-1 overflow-y-auto p-8 space-y-6 hide-scrollbar">
              {chatMessages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-30 px-12">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                    <MessageSquare size={40} />
                  </div>
                  <p className="text-lg">准备好了，请开始你的提问...</p>
                  <p className="text-sm mt-2">例如：“Slll 在污水厂实践中学到了什么？”</p>
                </div>
              )}
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-sm leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-3xl flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-md">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="询问 Slll 的经历、技能或联系方式..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-600 text-white transition-all"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-500 transition-all disabled:opacity-30 flex-shrink-0 shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-xl text-blue-600 mb-2">Slll.PORTFOLIO</div>
            <p className="text-slate-400 text-sm">© 2024 Guilin University of Technology</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-500">
            <button onClick={scrollToSection('about')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">About</button>
            <button onClick={scrollToSection('experience')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">Work</button>
            <button onClick={scrollToSection('achievements')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">Stats</button>
            <button onClick={scrollToSection('ai-assistant')} className="hover:text-blue-600 transition-colors uppercase tracking-widest">AI Agent</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

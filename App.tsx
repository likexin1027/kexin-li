
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FluidBackground } from './components/FluidBackground';
import { CustomCursor } from './components/CustomCursor';
import { IdeaCard } from './components/IdeaCard';
import { TrendPanel } from './components/TrendPanel';
import { TutorialSection } from './components/TutorialSection';
import { SelectionSection } from './components/SelectionSection';
import { ActivitySection } from './components/ActivitySection';
import { Testimonials } from './components/Testimonials';
import { ScriptLab } from './components/ScriptLab';
import { generateVideoIdeas } from './services/geminiService';
import { VideoIdea } from './types';

const App: React.FC = () => {
  const [ideas, setIdeas] = useState<VideoIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (keyword: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await generateVideoIdeas(keyword);
      setIdeas(results);
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } catch (err) {
      setError('系统繁忙，请稍后重试。');
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToScriptLab = () => {
    document.getElementById('script-lab')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4fb7b3]/50">
      <FluidBackground />
      <CustomCursor />
      <Navigation />
      
      <main className="relative z-10">
        <Hero onSearch={handleSearch} isLoading={isLoading} />
        
        <div className="flex justify-center -mt-12 pb-24 relative z-20">
           <motion.button 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             onClick={scrollToScriptLab}
             className="px-8 py-3 bg-[#31326f]/30 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] text-[#a8fbd3] hover:text-[#4fb7b3] hover:border-[#4fb7b3]/30 transition-all flex items-center gap-3 backdrop-blur-xl group"
           >
             创作灵感实验室
             <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
             </motion.div>
           </motion.button>
        </div>

        <div id="results" className="max-w-7xl mx-auto px-6">
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32 space-y-8"
              >
                <div className="relative">
                  <div className="w-24 h-24 border-2 border-[#4fb7b3]/20 border-t-[#4fb7b3] rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#4fb7b3]">101</div>
                </div>
                <p className="text-[#a8fbd3] font-bold tracking-[0.3em] uppercase text-xs animate-pulse">正在处理创作协议...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div className="p-8 bg-red-500/5 border border-red-500/20 text-red-400 rounded-[2rem] text-center mb-12 backdrop-blur-xl">
              {error}
            </div>
          )}

          {!isLoading && ideas.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32 pt-10"
            >
              <div className="lg:col-span-2 space-y-16">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-black tracking-tighter">
                    <span className="text-[#4fb7b3]">●</span> 创作灵感推荐
                  </h2>
                  <div className="h-px flex-1 bg-white/5 mx-12 hidden md:block"></div>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">已为您生成 {ideas.length} 项建议</span>
                </div>
                {ideas.map((idea) => (
                  <IdeaCard key={idea.id} idea={idea} />
                ))}
              </div>
              
              <aside className="lg:col-span-1">
                <TrendPanel />
              </aside>
            </motion.div>
          )}

          <div className="space-y-32">
            <ScriptLab />
            <SelectionSection />
            <ActivitySection />
            <TutorialSection />
            <Testimonials />
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-32 px-6 mt-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4fb7b3] text-black rounded-2xl flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(79,183,179,0.3)]">101</div>
                <span className="font-black text-3xl tracking-tighter">101俱乐部</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed text-lg font-light">
                连接创作智慧，成就品牌精彩。
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10">项目信息</h4>
              <ul className="space-y-6 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#4fb7b3] transition-colors">俱乐部介绍</a></li>
                <li><a href="#" className="hover:text-[#4fb7b3] transition-colors">创作者计划</a></li>
                <li><a href="#" className="hover:text-[#4fb7b3] transition-colors">资源中心</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10">服务指南</h4>
              <ul className="space-y-6 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#4fb7b3] transition-colors">加入流程</a></li>
                <li><a href="#" className="hover:text-[#4fb7b3] transition-colors">商务合作</a></li>
                <li><a href="#" className="hover:text-[#4fb7b3] transition-colors">隐私协议</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700">
            <div>© 2024 101 CLUB ● TENCENT GAMES</div>
            <div className="flex gap-12">
              <span>沪ICP备10101010号</span>
              <span className="text-[#4fb7b3]">POWERED BY TENCENT GAMES</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

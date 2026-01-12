
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Zap } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-black/20 backdrop-blur-3xl border border-white/10 rounded-[2rem] px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="w-10 h-10 bg-[#4fb7b3] rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(79,183,179,0.3)]"
            >
              1
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">101俱乐部</span>
              <span className="text-[9px] font-bold text-[#a8fbd3]/40 tracking-[0.3em] uppercase mt-1">Audible Abyss</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            {['学院任务', '创作奖金', '作品展厅', '成员榜单'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-[#4fb7b3] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4fb7b3] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-[#4fb7b3] text-black px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#4fb7b3]/20">
              <Zap size={14} fill="currentColor" />
              创作者中心
            </button>
            <button className="md:hidden p-3 bg-white/5 rounded-xl border border-white/10 text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

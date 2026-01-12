
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoIdea } from '../types';
import { ChevronDown, Sparkles, Clock, Target, Box } from 'lucide-react';

interface IdeaCardProps {
  idea: VideoIdea;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 80px rgba(79,183,179,0.2)" 
      }}
      className={`group relative bg-[#31326f]/10 border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-[#4fb7b3]/40 backdrop-blur-3xl ${isExpanded ? 'ring-2 ring-[#4fb7b3]/20 shadow-[0_0_100px_rgba(79,183,179,0.1)]' : ''}`}
    >
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#4fb7b3] group-hover:w-full transition-all duration-700" />
      <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#a8fbd3] group-hover:w-full transition-all duration-700" />

      <div className="p-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-[#4fb7b3]/10 text-[#4fb7b3] text-[9px] font-bold uppercase tracking-[0.3em] rounded-full border border-[#4fb7b3]/20">
                {idea.difficulty} 级别
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Box size={12} className="text-[#a8fbd3]" /> {idea.style}
              </span>
            </div>
            <h3 className="text-4xl font-extrabold tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4fb7b3] group-hover:to-[#a8fbd3] transition-all duration-500">
              {idea.title}
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
              <Clock size={12} /> 建议时长
            </div>
            <span className="text-2xl font-black text-white italic">{idea.estimatedLength}</span>
          </div>
        </div>

        <p className="text-[#a8fbd3]/60 leading-relaxed mb-10 text-xl font-light">
          {idea.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {idea.trends.map((trend, i) => (
            <span key={i} className="px-5 py-2 bg-white/5 text-gray-400 rounded-2xl text-xs font-bold border border-white/5 hover:border-[#4fb7b3]/40 hover:text-[#4fb7b3] transition-all cursor-default">
              #{trend}
            </span>
          ))}
        </div>

        <motion.div 
          className="mb-12 p-8 bg-gradient-to-r from-[#31326f]/40 to-transparent rounded-[2rem] border-l-4 border-[#4fb7b3] relative overflow-hidden"
          whileHover={{ x: 10 }}
        >
          <div className="text-[10px] font-bold text-[#4fb7b3] mb-4 flex items-center gap-3 uppercase tracking-[0.4em]">
            <Sparkles size={14} />
            核心创意点
          </div>
          <div className="text-2xl text-white font-bold leading-tight tracking-tight">
            “{idea.hook}”
          </div>
        </motion.div>

        <motion.button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full py-6 rounded-3xl font-black text-[11px] font-syne uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 ${isExpanded ? 'bg-white/10 text-white' : 'bg-gradient-to-r from-[#4fb7b3] to-[#a8fbd3] text-black hover:scale-[1.02] shadow-[0_0_40px_rgba(79,183,179,0.3)]'}`}
        >
          {isExpanded ? '收起详情' : '查看创作脚本'}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 200 }}>
            <ChevronDown size={20} strokeWidth={3} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-16 space-y-12">
                <div className="h-px bg-gradient-to-r from-white/10 via-[#4fb7b3]/20 to-transparent" />
                <div className="space-y-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#4fb7b3] mb-8">创作流程参考 ● WORKFLOW</h4>
                  {idea.scenes.map((scene, i) => (
                    <motion.div 
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="group/scene flex gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#4fb7b3]/20 transition-all"
                    >
                      <div className="flex-shrink-0 w-28 text-lg font-black text-[#a8fbd3] font-mono tracking-tighter opacity-50 group-hover/scene:opacity-100 transition-opacity">
                        {scene.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-2xl text-white mb-3 group-hover/scene:translate-x-2 transition-transform duration-500">{scene.action}</div>
                        <div className="text-gray-500 text-lg leading-relaxed italic">{scene.visual}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-10 rounded-[2.5rem] bg-[#31326f]/20 border border-white/5 group/box">
                    <span className="text-[10px] text-gray-600 font-bold block mb-3 uppercase tracking-widest">氛围建议</span>
                    <span className="text-2xl font-bold text-[#a8fbd3] group-hover/box:text-[#4fb7b3] transition-colors">{idea.musicType}</span>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-[#4fb7b3]/5 border border-white/5 group/box">
                    <span className="text-[10px] text-gray-600 font-bold block mb-3 uppercase tracking-widest">视觉风格</span>
                    <span className="text-2xl font-bold text-[#4fb7b3] group-hover/box:text-[#a8fbd3] transition-colors">{idea.style}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

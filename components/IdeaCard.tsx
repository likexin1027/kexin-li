
import React from 'react';
import { motion } from 'framer-motion';
import { VideoIdea } from '../types';
import { Sparkles, Clock, Box } from 'lucide-react';

interface IdeaCardProps {
  idea: VideoIdea;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
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
      className="group relative bg-[#31326f]/10 border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-[#4fb7b3]/40 backdrop-blur-3xl"
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
          className="p-8 bg-gradient-to-r from-[#31326f]/40 to-transparent rounded-[2rem] border-l-4 border-[#4fb7b3] relative overflow-hidden"
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
      </div>
    </motion.div>
  );
};

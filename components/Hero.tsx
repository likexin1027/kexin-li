
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LogoAnimation } from './LogoAnimation';

interface HeroProps {
  onSearch: (keyword: string) => void;
  isLoading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, isLoading }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleApply = () => {
    window.open('https://docs.qq.com/form/page/DVU1MRWtEWURtcVhx?nlc=1#/fill', '_blank');
  };

  const handleBenefits = () => {
    window.open('https://docs.qq.com/doc/DVVRnV0JUUXRxaGx5', '_blank');
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* 呼吸球体背景 */}
      <motion.div 
        className="absolute z-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#31326f] via-[#4fb7b3] to-[#a8fbd3] rounded-full blur-[80px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <LogoAnimation />
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#4fb7b3]/10 border border-[#4fb7b3]/20 text-[#4fb7b3] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
          TENCENT GAMES ● 官方创作社区
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
          <span className="glitch-text" data-text="101俱乐部">101俱乐部</span> <br />
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fb7b3] to-[#a8fbd3] italic block mt-2"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            看见你的影响力
          </motion.span>
        </h1>
        
        <p className="text-[#a8fbd3]/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          在这里，“随时玩转创作，顺便成就精彩”
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <button 
            onClick={handleApply}
            className="group relative px-12 py-5 bg-[#4fb7b3] text-black rounded-full font-bold transition-all hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(79,183,179,0.4)]"
          >
            申请加入
          </button>
          
          <button 
             onClick={handleBenefits}
             className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-md"
          >
            权益说明
          </button>
        </div>
      </motion.div>

      {/* 无限滚动招牌 */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-black/40 border-y border-white/5 py-4 backdrop-blur-md">
        <motion.div 
          className="flex whitespace-nowrap gap-12 text-[10px] font-bold uppercase tracking-[0.5em] text-[#4fb7b3]/50"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              101CLUB ● 官方扶持 ● 创作赋能 ● TENCENT GAMES ● CREATOR HUB
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

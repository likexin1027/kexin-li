
import React from 'react';
import { motion } from 'framer-motion';

export const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden">
      {/* 核心深渊 blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#31326f] rounded-full blur-[150px] opacity-40"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 150, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#4fb7b3]/10 rounded-full blur-[180px]"
        animate={{
          x: [0, -200, 150, 0],
          y: [0, 150, -100, 0],
          scale: [1, 0.7, 1.2, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[20%] left-[40%] w-[40%] h-[40%] bg-[#a8fbd3]/5 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 闪烁星空与尘埃 */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 动态网格线 (赛博朋克感) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* 渐变遮罩增强对比度 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,5,0.6)_100%)]" />
    </div>
  );
};

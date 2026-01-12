
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 使用 MotionValue 直接绑定坐标，减少 React 渲染层级的延迟
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 为外圈保留平滑的弹簧效果
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 250 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 核心更新：直接设置 motion value，配合 animate 控制的 transform 会非常顺滑
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 主点：取消延迟，紧跟鼠标 */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#4fb7b3] rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 4 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      
      {/* 外圈：保留轻微跟随感，增加视觉层次 */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#a8fbd3]/40 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0 : 0.6,
        }}
      />
      
      {/* 霓虹发光背影 */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-[#4fb7b3]/10 rounded-full blur-2xl pointer-events-none z-[9998]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ACADEMY_ITEMS = [
  { id: 1, title: '创作扶持奖金', category: '收益激励', duration: '现金奖励', views: '播放分阶', color: 'from-[#31326f]', border: 'border-[#4fb7b3]/20' },
  { id: 2, title: '鹅厂实习推荐', category: '职业规划', duration: '实习机会', views: '名企内推', color: 'from-[#4fb7b3]', border: 'border-[#a8fbd3]/20' },
  { id: 3, title: '项目实战参与', category: '能力进阶', duration: '真实需求', views: '官方背书', color: 'from-[#1e1b4b]', border: 'border-blue-500/20' },
  { id: 4, title: '全网流量曝光', category: '资源对接', duration: '全平台分发', views: '官方推荐', color: 'from-[#312e81]', border: 'border-purple-500/20' },
];

export const TutorialSection: React.FC = () => {
  return (
    <div className="py-32">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-2xl"
        >
          <div className="text-[11px] font-bold text-[#4fb7b3] uppercase tracking-[0.5em] mb-4">Empowerment ● 赋能体系</div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-none">
            助力创作者 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              职业化成长
            </span>
          </h2>
          <p className="text-gray-500 text-xl font-light leading-relaxed">获得腾讯游戏深度支持，在这里，优质创意将获得全方位的价值释放。</p>
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border border-[#4fb7b3]/40 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-[#4fb7b3] hover:bg-[#4fb7b3] hover:text-black transition-all shadow-[0_0_30px_rgba(79,183,179,0.2)]"
        >
          申请加入
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {ACADEMY_ITEMS.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -15, rotateX: 5, rotateY: 5 }}
            style={{ perspective: 1000 }}
            className="group cursor-pointer"
          >
            <div className={`relative aspect-[3/4] rounded-[3rem] p-10 flex flex-col justify-end overflow-hidden bg-gradient-to-tr ${item.color} to-black/90 border ${item.border} transition-all duration-700 shadow-2xl`}>
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 group-hover:bg-black/10 transition-colors" />
              
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-[#4fb7b3]/10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-4 block">{item.category}</span>
                <h4 className="text-3xl font-black text-white mb-6 leading-none group-hover:text-[#4fb7b3] transition-colors">{item.title}</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4fb7b3]" /> {item.duration}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a8fbd3]" /> {item.views}
                  </div>
                </div>
              </div>

              <div className="absolute top-10 right-10 w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/5">
                <ArrowUpRight size={24} className="text-[#4fb7b3]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

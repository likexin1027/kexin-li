
import React from 'react';

const TAGS = ['科普', '鬼畜', '手绘', '动画', '音乐', '整活', '随拍', '攻略'];

export const ActivitySection: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tighter mb-6">多元化创作方向</h2>
        <p className="text-gray-400 text-lg font-light mb-16 max-w-2xl mx-auto">
          我们定期发布内容挑战，涵盖多元主题。您的创作兴趣将直接转化为品牌影响力。
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {TAGS.map((tag, i) => (
            <div 
              key={tag} 
              className="group py-6 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all cursor-default animate-in fade-in zoom-in duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-xl font-bold text-gray-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all">{tag}</div>
              <div className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest">推荐赛道</div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 inline-flex flex-col md:flex-row items-center gap-10 text-left">
          <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M12 2v20M2 12h20" strokeLinecap="round"/></svg>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">专业资源保障</h4>
            <p className="text-gray-400 font-light">
              除了奖金激励，我们还提供专属指导文档、官方游戏素材及全平台流量分发支持。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

export const SelectionSection: React.FC = () => {
  return (
    <div className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <h2 className="text-4xl font-bold tracking-tighter leading-tight">
              准入说明：<br />
              <span className="text-cyan-400 italic">寻找优质创作者</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                目前“101俱乐部”录取率常年低于 <span className="text-cyan-400 font-bold">1%</span>。我们致力于构建一个高标准的精英创作社群。
              </p>
              <div className="p-6 bg-cyan-500/5 border-l-2 border-cyan-500 rounded-r-2xl italic">
                “我们优先关注对游戏创作充满无限热情的优质人才。”
              </div>
              <p>
                无论您的粉丝量级如何，只要您的作品具备独特的创意价值，即有机会获得俱乐部扶持。
              </p>
            </div>
          </div>
          
          <div className="relative group animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 rounded-[3rem] blur-2xl group-hover:opacity-50 transition-opacity opacity-20"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">选拔标准</h4>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">Q</div>
                  <div>
                    <div className="text-white font-bold">高品质产出</div>
                    <div className="text-sm text-gray-500">严控内容质量，维护社群氛围</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">P</div>
                  <div>
                    <div className="text-white font-bold">热爱与专注</div>
                    <div className="text-sm text-gray-500">兴趣是持续创作的动力来源</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">L</div>
                  <div>
                    <div className="text-white font-bold">长线合作</div>
                    <div className="text-sm text-gray-500">建立持久的创作伙伴关系</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

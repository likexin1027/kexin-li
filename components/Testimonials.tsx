
import React from 'react';

const TESTIMONIALS = [
  {
    role: "资深创作者 / 设计师",
    content: "俱乐部能站在创作者角度考虑，积极解决问题。这种合作模式在行业内非常难得。",
    initials: "JP"
  },
  {
    role: "高校创作者 / 鹅厂实习生",
    content: "在这里，创作者之间的思维火花能得到充分激发，灵感总能得到回应。",
    initials: "HS"
  },
  {
    role: "短视频作者 / 媒体从业者",
    content: "官方提供的指导文档非常详尽，素材库也极其丰富，为创作提供了极大便利。",
    initials: "EX"
  },
  {
    role: "高校作者",
    content: "加入101俱乐部让我的创作变得更有意义，生活质量也得到了极大的提升。",
    initials: "ST"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">社区反馈</h2>
          <p className="text-gray-400 text-lg font-light">真实的反馈是社群进步的基石。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-cyan-900/20">
                  {t.initials}
                </div>
                <div className="text-sm font-bold text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {t.role}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-light italic">
                “{t.content}”
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm italic mb-8">期待您的加入，共同创造更多精彩。</p>
          <button className="px-10 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
            立即申请
          </button>
        </div>
      </div>
    </div>
  );
};

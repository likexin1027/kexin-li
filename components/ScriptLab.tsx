
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateCreativeInspirations } from '../services/geminiService';
import { InspirationLabResult, CreativeIdeaSuggestion } from '../types';
import { Sparkles, Zap, Terminal, Share2, Layers, Copy, CheckCircle2, TrendingUp, Lightbulb, MousePointer2 } from 'lucide-react';

export const ScriptLab: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('娱乐/整活');
  const [result, setResult] = useState<InspirationLabResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    const data = await generateCreativeInspirations(keyword, type);
    setResult(data);
    setIsGenerating(false);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const types = ['娱乐/整活', '技术科普', '剧情/动画', '游戏攻略', '生活Vlog'];

  return (
    <div id="script-lab" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-xl">
            <div className="text-[11px] font-bold text-[#a8fbd3] uppercase tracking-[0.5em] mb-4">Inspiration ● 创作中心</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-none">
              游戏创作灵感生成 <span className="text-[#4fb7b3] italic">2.0</span>
            </h2>
            <p className="text-gray-500 text-xl font-light">
              基于热门视频数据分析，为创作者提供精准的内容主题建议与爆款公式
            </p>
          </div>
          <div className="flex flex-wrap gap-3 p-2 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  type === t ? 'bg-[#4fb7b3] text-black shadow-lg shadow-[#4fb7b3]/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-10 bg-white/[0.03] border border-white/10 rounded-[3rem] backdrop-blur-3xl relative"
            >
              <div className="absolute -top-4 -left-4 p-3 bg-[#4fb7b3] rounded-2xl text-black shadow-xl">
                <Terminal size={18} strokeWidth={3} />
              </div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-6 mt-4">输入创作概况</label>
              <textarea
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="例如：关于《王者荣耀》新英雄的背景故事，想用幽默的方式呈现..."
                className="w-full h-48 bg-transparent border-none focus:ring-0 text-white placeholder:text-gray-800 resize-none text-xl font-medium leading-relaxed"
              />
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(79,183,179,0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={isGenerating || !keyword.trim()}
                className="w-full mt-8 py-5 bg-gradient-to-r from-[#4fb7b3] to-[#a8fbd3] text-black rounded-3xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 disabled:opacity-30 disabled:grayscale transition-all"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-3 border-black/20 border-t-black rounded-full animate-spin"></div>
                    正在生成建议...
                  </>
                ) : (
                  <>
                    <Zap size={16} fill="currentColor" />
                    开启创作灵感
                  </>
                )}
              </motion.button>
            </motion.div>

            <div className="p-10 bg-gradient-to-br from-[#31326f]/30 to-transparent border border-white/5 rounded-[3rem]">
              <h4 className="text-[10px] font-bold text-[#a8fbd3] mb-8 uppercase tracking-[0.4em] flex items-center gap-3">
                <Layers size={14} /> 核心逻辑说明
              </h4>
              <ul className="space-y-6">
                {[
                  '冲突法则：在开篇制造认知冲突，提升用户留存。',
                  '稀缺逻辑：提供独特视角，引发深度互动。',
                  '情绪共振：关联用户真实痛点，增强内容感染力。'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-gray-500 font-light group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4fb7b3] mt-2 group-hover:scale-150 transition-all"></span>
                    <span className="group-hover:text-white transition-colors">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 min-h-[600px] relative">
            <AnimatePresence mode="wait">
              {!result && !isGenerating ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-[4rem] text-center p-16"
                >
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/5">
                    <Lightbulb size={32} className="text-gray-800" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-700 mb-4 tracking-tighter">等待输入</h4>
                  <p className="text-gray-800 max-w-sm leading-relaxed text-lg">输入您的创作想法，我们将为您提供精准的主题建议与逻辑分析。</p>
                </motion.div>
              ) : result ? (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="space-y-8"
                >
                  <div className="p-10 bg-[#31326f]/10 border border-[#4fb7b3]/30 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group">
                    <div className="flex items-center gap-3 mb-10">
                       <Sparkles size={18} className="text-[#4fb7b3]" />
                       <span className="text-[11px] font-bold text-[#4fb7b3] uppercase tracking-[0.4em]">智能分析建议</span>
                    </div>
                    
                    <div className="space-y-12">
                      {result.suggestions.map((s, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group/item relative p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-[#4fb7b3]/30 transition-all"
                        >
                          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                            <div className="flex flex-wrap gap-3">
                              <span className="px-4 py-1.5 bg-[#4fb7b3]/10 text-[#4fb7b3] text-[10px] font-bold uppercase tracking-widest rounded-xl border border-[#4fb7b3]/20">
                                {s.formula}
                              </span>
                              <span className="px-4 py-1.5 bg-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-xl border border-white/5">
                                {s.style}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex flex-col items-end">
                                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">预测指数</span>
                                <span className="text-xl font-black text-[#a8fbd3] italic">{s.viralScore}%</span>
                              </div>
                            </div>
                          </div>

                          <div className="mb-8">
                            <h4 className="text-[10px] font-bold text-[#4fb7b3] mb-4 uppercase tracking-[0.5em] flex items-center gap-3">
                              <Lightbulb size={14} /> 核心主题
                            </h4>
                            <p className="text-2xl font-bold text-white leading-tight">
                              {s.theme}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                             <div className="p-6 bg-black/20 rounded-2xl border border-white/5">
                                <div className="text-[9px] font-bold text-gray-600 mb-3 uppercase tracking-widest">推荐标题</div>
                                <div className="text-lg font-bold text-[#a8fbd3] leading-snug flex justify-between items-start gap-4">
                                  {s.titleSuggestion}
                                  <button 
                                    onClick={() => handleCopy(s.titleSuggestion, i)}
                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-600 hover:text-[#4fb7b3] transition-all"
                                  >
                                    {copiedIndex === i ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
                                  </button>
                                </div>
                             </div>
                             <div className="p-6 bg-[#4fb7b3]/5 rounded-2xl border border-[#4fb7b3]/10">
                                <div className="text-[9px] font-bold text-gray-600 mb-3 uppercase tracking-widest">内容逻辑</div>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                  {s.viralLogic}
                                </p>
                             </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4fb7b3] hover:text-[#a8fbd3] transition-colors flex items-center gap-2">
                              采用该建议 <MousePointer2 size={12} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-16 p-8 bg-gradient-to-r from-[#4fb7b3]/5 to-transparent rounded-[2.5rem] border-l-4 border-[#4fb7b3]">
                        <div className="text-[10px] font-bold text-[#4fb7b3] mb-4 uppercase tracking-[0.5em]">Review ● 评审建议</div>
                        <p className="text-xl text-white font-medium italic leading-relaxed">“{result.expertAdvice}”</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                 <motion.div 
                   key="loading"
                   className="h-full flex flex-col items-center justify-center space-y-10"
                 >
                    <div className="relative">
                      <div className="w-32 h-32 border-4 border-[#4fb7b3]/10 border-t-[#4fb7b3] rounded-full animate-spin"></div>
                      <Sparkles className="absolute inset-0 m-auto text-[#4fb7b3] animate-pulse" size={32} />
                    </div>
                    <p className="text-[#4fb7b3] font-black uppercase tracking-[0.5em] text-sm animate-pulse">正在处理创作逻辑...</p>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

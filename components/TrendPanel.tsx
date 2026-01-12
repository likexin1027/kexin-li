
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '短视频', value: 18, label: '1800万' },
  { name: 'B站', value: 6.5, label: '650万' },
  { name: '周涨粉', value: 0.2, label: '20万' },
  { name: '总播放', value: 60, label: '6亿' },
];

export const TrendPanel: React.FC = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-24 backdrop-blur-md">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        影响力数据概览
      </h3>
      
      <div className="h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#666" fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              formatter={(value: any, name: any, props: any) => [props.payload.label, name]}
            />
            <Bar dataKey="value" radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#22d3ee' : '#333'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">短视频单项最高</div>
          <div className="text-cyan-400 font-bold text-xl">18,000,000+ <span className="text-xs text-gray-500">播放</span></div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">B站视频单项最高</div>
          <div className="text-blue-400 font-bold text-xl">6,500,000+ <span className="text-xs text-gray-500">播放</span></div>
        </div>
      </div>
    </div>
  );
};

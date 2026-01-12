
import React, { useEffect, useState } from 'react';

export const LogoAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 select-none">
      <svg
        viewBox="0 0 240 140"
        className="w-full max-w-sm drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            .pixel-logo { shape-rendering: crispEdges; }
            .draw-path {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 2.5s ease-out forwards;
            }
            @keyframes draw { to { stroke-dashoffset: 0; } }
            .fade-in-pixel {
              opacity: 0;
              animation: fadeIn 0.5s steps(2, start) forwards;
            }
            @keyframes fadeIn { to { opacity: 1; } }
            .float { animation: float 3s ease-in-out infinite; }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `}
        </style>
        
        {/* Simplified Joystick Base */}
        <rect x="30" y="70" width="80" height="40" fill="#f59e0b" className="fade-in-pixel" style={{ animationDelay: '0.2s' }} />
        <rect x="30" y="90" width="80" height="5" fill="#92400e" className="fade-in-pixel" style={{ animationDelay: '0.3s' }} />
        
        {/* Joystick Stick */}
        <rect x="65" y="50" width="10" height="20" fill="#334155" className="fade-in-pixel" style={{ animationDelay: '0.4s' }} />
        <circle cx="70" cy="45" r="12" fill="#ef4444" className="fade-in-pixel" style={{ animationDelay: '0.5s' }} />
        
        {/* 101 (Cyan Pixel Style) */}
        <g fill="#22d3ee" className="fade-in-pixel" style={{ animationDelay: '0.7s' }}>
          {/* 1 */}
          <rect x="110" y="30" width="10" height="40" />
          <rect x="105" y="35" width="5" height="5" />
          {/* 0 */}
          <path d="M125,30 h20 v40 h-20 v-40 m10,10 v20 h0" /> {/* Stylized O */}
          <rect x="125" y="30" width="20" height="40" fill="none" stroke="#22d3ee" strokeWidth="8" />
          {/* 1 */}
          <rect x="155" y="30" width="10" height="40" />
          <rect x="150" y="35" width="5" height="5" />
        </g>

        {/* Star */}
        <path d="M190,20 l5,15 h15 l-12,10 l5,15 l-13,-10 l-13,10 l5,-15 l-12,-10 h15 z" fill="#fbbf24" className="fade-in-pixel float" style={{ animationDelay: '1s' }} />

        {/* CLUB Letters */}
        <g className="font-bold text-4xl" style={{ fontFamily: '"Courier New", Courier, monospace', letterSpacing: '-2px' }}>
          <text x="80" y="115" fill="#a855f7" className="fade-in-pixel" style={{ animationDelay: '1.2s' }}>C</text>
          <text x="110" y="115" fill="#ef4444" className="fade-in-pixel" style={{ animationDelay: '1.3s' }}>L</text>
          <text x="135" y="115" fill="#f59e0b" className="fade-in-pixel" style={{ animationDelay: '1.4s' }}>U</text>
          <text x="165" y="115" fill="#22d3ee" className="fade-in-pixel" style={{ animationDelay: '1.5s' }}>B</text>
        </g>

        {/* Outer Stroke Outline effect */}
        <path d="M20,130 L220,130" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" className="draw-path" />
      </svg>
    </div>
  );
};

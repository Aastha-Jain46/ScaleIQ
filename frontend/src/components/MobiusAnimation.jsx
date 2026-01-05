import React from 'react';

export const MobiusAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] opacity-20"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100 300 Q 150 200, 250 200 T 400 300 Q 450 400, 350 400 T 200 300 Q 150 200, 250 200"
          stroke="#C8A951"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-mobius-flow"
        />
        <path
          d="M 150 300 Q 200 220, 280 220 T 420 320 Q 460 410, 370 410 T 220 320"
          stroke="#C8A951"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-mobius-flow"
          style={{ animationDelay: '2s' }}
        />
        <path
          d="M 120 280 Q 180 180, 270 190 T 430 300 Q 470 390, 360 400 T 210 300"
          stroke="#C8A951"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-mobius-flow"
          style={{ animationDelay: '4s' }}
        />
      </svg>
    </div>
  );
};
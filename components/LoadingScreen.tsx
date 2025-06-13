import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-zinc-900 to-black backdrop-blur-sm">
      
      <div className="absolute inset-0 radial-gradient-bg animate-pulse-light"></div>

   
      <div className="flex flex-col items-center p-12 bg-zinc-800 bg-opacity-70 rounded-3xl shadow-2xl border border-zinc-700 animate-fade-in-up transform-gpu">
      
        <div className="relative w-28 h-28">
       
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin-slow-cw"></div>
        
          <div className="absolute inset-4 rounded-full border-3 border-transparent border-t-emerald-400 border-l-cyan-400 animate-spin-medium-ccw" style={{ animationDelay: '0.1s' }}></div>
         
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-blue-300 animate-orb-glow shadow-lg"></div>
        </div>

        <p className="mt-10 text-3xl font-extrabold tracking-wide text-white animate-shimmer">
          MEMUAT...
        </p>

        <div className="flex mt-6 space-x-3">
          <span className="w-4 h-4 bg-blue-400 rounded-full animate-dot-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-4 h-4 bg-purple-400 rounded-full animate-dot-bounce" style={{ animationDelay: '0.15s' }}></span>
          <span className="w-4 h-4 bg-emerald-400 rounded-full animate-dot-bounce" style={{ animationDelay: '0.3s' }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

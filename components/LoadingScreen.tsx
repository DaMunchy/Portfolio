"use client";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-zinc-900 to-black backdrop-blur-sm">
      
      {/* Radial background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-700/30 via-transparent to-black animate-pulse-light"></div>

      {/* Loader container */}
      <div className="flex flex-col items-center p-12 bg-zinc-800/70 rounded-3xl shadow-2xl border border-zinc-700 animate-fade-in-up">
        
        {/* Glowing spinning rings */}
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin-slow-cw"></div>
          <div className="absolute inset-4 rounded-full border-3 border-transparent border-t-emerald-400 border-l-cyan-400 animate-spin-medium-ccw" style={{ animationDelay: "0.1s" }}></div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-blue-300 animate-orb-glow shadow-lg"></div>
        </div>

        {/* Loading text */}
        <p className="mt-10 text-3xl font-extrabold tracking-wide text-white animate-shimmer">
          MEMUAT...
        </p>

        {/* Bouncing dots */}
        <div className="flex mt-6 space-x-3">
          <span className="w-4 h-4 bg-blue-400 rounded-full animate-dot-bounce" style={{ animationDelay: "0s" }}></span>
          <span className="w-4 h-4 bg-purple-400 rounded-full animate-dot-bounce" style={{ animationDelay: "0.15s" }}></span>
          <span className="w-4 h-4 bg-emerald-400 rounded-full animate-dot-bounce" style={{ animationDelay: "0.3s" }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

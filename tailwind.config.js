/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'spin-slow-cw': 'spin-slow-cw 3.5s linear infinite',
        'spin-medium-ccw': 'spin-medium-ccw 2.5s linear infinite',
        'orb-glow': 'orb-glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear',
        'dot-bounce': 'dot-bounce 0.9s infinite alternate',
        'pulse-light': 'pulse-light 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow-cw': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-medium-ccw': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        'orb-glow': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 15px rgba(255,255,255,0.7), 0 0 25px rgba(0,191,255,0.4)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 25px rgba(255,255,255,0.9), 0 0 40px rgba(0,191,255,0.7)' },
        },
        'shimmer': {
          '0%, 100%': { textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 15px rgba(100,100,255,0.3)' },
          '50%': { textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 25px rgba(100,100,255,0.6)' },
        },
        'dot-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-light': {
            '0%, 100%': { opacity: '0.4' },
            '50%': { opacity: '0.7' },
        },
      },
    },
  },
  // Pastikan plugins tetap kosong atau tambahkan plugin yang kamu gunakan
  plugins: [],
}

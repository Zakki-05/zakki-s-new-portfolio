/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        heroBg: '#F1E8DC',
        heroText: '#111111',
        primaryBlack: '#050505',
        primaryText: '#F2F0EA',
        mutedText: '#77736D',
        goldAccent: '#B9A36A',
        gridBorder: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        headline: ['"Bebas Neue"', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        condensed: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

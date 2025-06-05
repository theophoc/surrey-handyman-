/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'electric-blue': '#00f2ff',
        'neon-violet': '#8b5cf6',
        'dark-navy': '#0a0a0a',
        success: {
          DEFAULT: '#10b981',
          light: '#a7f3d0',
          dark: '#047857',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fde68a',
          dark: '#b45309',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fecaca',
          dark: '#b91c1c',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            filter: 'drop-shadow(0 0 5px rgba(99, 102, 241, 0.7))',
            opacity: 0.8,
          },
          '100%': { 
            filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 1))', 
            opacity: 1,
          },
        },
      },
      letterSpacing: {
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
};
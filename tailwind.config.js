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
        dark: {
          950: '#070A11',
          900: '#0B1120',
          850: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        aubergine: {
          950: '#150614',
          900: '#230A21',
          850: '#2D0C2A',
          800: '#3A0F34',
          700: '#52164A',
          600: '#6D1E62',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        marigold: {
          400: '#FBBF24',
          500: '#EAAA00',
          600: '#D97706',
        },
        brand: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        silver: {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -3px rgba(245, 158, 11, 0.4)',
        'glow-brand': '0 0 30px -4px rgba(99, 102, 241, 0.4)',
        'card-elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
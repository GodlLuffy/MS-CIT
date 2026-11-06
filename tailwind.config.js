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
        canvas: '#0B0F19',
        dark: {
          DEFAULT: '#0B0F19',
          950: '#060911',
          900: '#0B0F19',
          850: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        gold: {
          300: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        'accent-gold': {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FDE68A',
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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -2px rgba(245, 158, 11, 0.45)',
        'glow-gold-lg': '0 0 45px -5px rgba(245, 158, 11, 0.6)',
        'card-glass': '0 10px 30px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

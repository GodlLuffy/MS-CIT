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
        gold: {
          50: '#fffdf5',
          100: '#fef9e7',
          200: '#fcf0c3',
          300: '#fae395',
          400: '#f5cd5a',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a5f7',
          500: '#0c87eb',
          600: '#006bc9',
          700: '#0155a3',
          800: '#064886',
          900: '#0b3d6f',
          950: '#07274a',
        },
        luxury: {
          dark: '#050811',
          card: 'rgba(11, 18, 34, 0.82)',
          cardLight: 'rgba(18, 28, 52, 0.9)',
          border: 'rgba(234, 179, 8, 0.22)',
          borderLight: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 30px -5px rgba(234, 179, 8, 0.35)',
        'glow-gold-lg': '0 0 45px -5px rgba(234, 179, 8, 0.45)',
        'glow-blue': '0 0 30px -5px rgba(12, 135, 235, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.35)',
        'luxury': '0 12px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px -2px rgba(234, 179, 8, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

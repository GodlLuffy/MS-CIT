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
        // The 3 Exact Signature Colors from User's Palette
        silver: {
          50: '#F9FAFB',
          100: '#F1F4F7',
          200: '#DDE3E8', // EXACT ICE SILVER #DDE3E8
          300: '#C7D1D9',
          400: '#AAB8C4',
          500: '#8E9FAe',
        },
        aubergine: {
          950: '#140512',
          900: '#1D081A',
          800: '#2A0C26',
          700: '#3A0F34', // EXACT DEEP AUBERGINE #3A0F34
          600: '#4D1645',
          500: '#641D5B',
          400: '#7E2673',
          300: '#9E3891',
        },
        marigold: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF0A8',
          300: '#FCE470',
          400: '#F7CE33',
          500: '#EAAA00', // EXACT MARIGOLD #EAAA00
          600: '#C78F00',
          700: '#9E7000',
          800: '#7A5500',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF0A8',
          300: '#FCE470',
          400: '#F7CE33',
          500: '#EAAA00', // EXACT MARIGOLD #EAAA00
          600: '#C78F00',
          700: '#9E7000',
          800: '#7A5500',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-marigold': '0 0 30px -4px rgba(234, 170, 0, 0.45)',
        'glow-marigold-lg': '0 0 50px -5px rgba(234, 170, 0, 0.55)',
        'glow-gold': '0 0 30px -4px rgba(234, 170, 0, 0.45)',
        'glow-gold-lg': '0 0 50px -5px rgba(234, 170, 0, 0.55)',
        'glow-aubergine': '0 0 35px -5px rgba(58, 15, 52, 0.65)',
        'luxury': '0 16px 40px -12px rgba(18, 5, 16, 0.8), 0 0 20px -2px rgba(234, 170, 0, 0.18)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

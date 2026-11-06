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
        // The 3 Exact Signature Colors from User's Swatch Image
        silver: {
          50: '#F9FAFB',
          100: '#F0F4F7',
          200: '#DDE3E8', // EXACT ICE SILVER #DDE3E8
          300: '#CAD4DD',
          400: '#AAB8C4',
          500: '#8E9FAe',
        },
        aubergine: {
          950: '#190517', // DEEP AUBERGINE LUXURY CANVAS
          900: '#240A20', // LUXURY AUBERGINE CARD
          850: '#2D0D28',
          800: '#340F2E',
          700: '#3A0F34', // EXACT DEEP AUBERGINE #3A0F34
          600: '#4F1647',
          500: '#671D5D',
          400: '#842677',
          300: '#A33794',
        },
        marigold: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF0A8',
          300: '#FCE470',
          400: '#F5B81A',
          500: '#EAAA00', // EXACT MARIGOLD #EAAA00
          600: '#C78F00',
          700: '#9E7000',
          800: '#7A5500',
        },
        // Alias for Gold
        gold: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF0A8',
          300: '#FCE470',
          400: '#F5B81A',
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
        'glow-marigold': '0 0 25px -2px rgba(234, 170, 0, 0.45)',
        'glow-marigold-lg': '0 0 50px -5px rgba(234, 170, 0, 0.55)',
        'glow-aubergine': '0 0 35px -5px rgba(58, 15, 52, 0.65)',
        'luxury-card': '0 12px 36px -8px rgba(15, 3, 14, 0.7), 0 0 20px -2px rgba(234, 170, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
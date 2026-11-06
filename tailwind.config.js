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
          50: '#FBFDFE',
          100: '#F4F7F9',
          150: '#EEF2F5', // LUXURY CALM CANVAS
          200: '#DDE3E8', // EXACT ICE SILVER #DDE3E8
          300: '#CBD5DE',
          400: '#B2C0CC',
          500: '#8E9FAe',
        },
        aubergine: {
          950: '#1A0717',
          900: '#240A20',
          800: '#2E0C29',
          700: '#3A0F34', // EXACT DEEP AUBERGINE #3A0F34
          600: '#4D1546',
          500: '#631B5A',
          400: '#822676',
          300: '#9E3891',
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
        // Direct Alias for Gold to prevent broken styles
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
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-marigold': '0 0 25px -3px rgba(234, 170, 0, 0.4)',
        'glow-marigold-lg': '0 0 45px -5px rgba(234, 170, 0, 0.5)',
        'glow-gold': '0 0 25px -3px rgba(234, 170, 0, 0.4)',
        'glow-gold-lg': '0 0 45px -5px rgba(234, 170, 0, 0.5)',
        'editorial': '0 10px 30px -4px rgba(58, 15, 52, 0.08)',
        'luxury': '0 16px 40px -10px rgba(58, 15, 52, 0.12)',
      },
    },
  },
  plugins: [],
}
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
        // 3 Signature Colors from Photo:
        aubergine: {
          DEFAULT: '#3A0F34',
          950: '#1A0617',
          900: '#2A0B25',
          800: '#3A0F34',
          700: '#4D1545',
          600: '#641B5A',
          500: '#7E2271',
          200: '#EBD4E6',
          100: '#F5E8F3',
          50: '#FAF3F8',
        },
        marigold: {
          DEFAULT: '#EAAA00',
          hover: '#D49800',
          600: '#BF8500',
          500: '#EAAA00',
          400: '#F3BF2E',
          300: '#F7D066',
          100: '#FEF6D9',
          50: '#FFFBEF',
        },
        ice: {
          DEFAULT: '#DDE3E8',
          50: '#F8FAFB',
          100: '#F1F4F7',
          200: '#DDE3E8',
          300: '#C7D2DB',
          400: '#A4B5C3',
          500: '#7E97AA',
        },
        // Fresh Backdrops:
        cream: {
          DEFAULT: '#FAF9F6',
          50: '#FDFCFB',
          100: '#FAF9F6',
          200: '#F2EFEB',
        },
        canvas: '#FAF9F6',
        // Compatibility Aliases:
        gold: {
          DEFAULT: '#EAAA00',
          500: '#EAAA00',
          400: '#F3BF2E',
          300: '#F7D066',
        },
        'accent-gold': {
          DEFAULT: '#EAAA00',
          hover: '#D49800',
          light: '#FEF6D9',
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
        'luxury': '0 10px 30px -5px rgba(58, 15, 52, 0.08), 0 4px 12px -2px rgba(58, 15, 52, 0.04)',
        'luxury-hover': '0 20px 40px -10px rgba(58, 15, 52, 0.14), 0 8px 16px -4px rgba(234, 170, 0, 0.15)',
        'marigold-glow': '0 4px 20px -2px rgba(234, 170, 0, 0.45)',
        'marigold-glow-lg': '0 8px 30px -4px rgba(234, 170, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

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
        cream: '#fdfbf7',
        'gold-light': '#f9f5ec',
        dark: {
          DEFAULT: '#0f172a',
          950: '#020617',
          900: '#0f172a',
          850: '#151f38',
          800: '#1e293b',
          700: '#334155',
        },
        'accent-gold': {
          DEFAULT: '#d4af37',
          hover: '#b8962e',
          light: '#f3e5ab',
        },
        gold: {
          50: '#fdfbf7',
          100: '#f9f5ec',
          200: '#f3e5ab',
          300: '#e5c158',
          400: '#d4af37',
          500: '#d4af37',
          600: '#b8962e',
          700: '#917220',
        },
        marigold: {
          400: '#d4af37',
          500: '#d4af37',
          600: '#b8962e',
        },
        aubergine: {
          950: '#0f172a',
          900: '#0f172a',
          850: '#1e293b',
          800: '#1e293b',
        },
        'gray-light': '#e2e8f0',
        'gray-medium': '#64748b',
        silver: {
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'klp-sm': '0 2px 4px rgba(0, 0, 0, 0.04)',
        'klp-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
        'klp-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'klp-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'gold-glow': '0 8px 25px rgba(212, 175, 55, 0.35)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}

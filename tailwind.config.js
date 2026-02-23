/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dune: {
          body: '#1a1008',
          surface: '#2a1f12',
          card: '#342818',
          amber: '#e8c07a',
          spice: '#e07850',
          turquoise: '#6ee7d0',
          sand: '#ddd0b0',
          rust: '#c07848',
          bone: '#f0e8d8',
          lavender: '#c4b5e0',
          rose: '#e8a0a0',
        },
        accent: {
          cyan: '#6ee7d0',
          coral: '#e07850',
          teal: '#2dd4bf',
          purple: '#c4b5e0',
        },
        dark: {
          50: '#f0e8d8',
          100: '#ddd0b0',
          200: '#c2b280',
          300: '#a89060',
          400: '#8a7048',
          500: '#6a5438',
          600: '#4a3a28',
          700: '#342818',
          800: '#2a1f12',
          900: '#1a1008',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(232, 192, 122, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(232, 192, 122, 0.5)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dune-gradient': 'linear-gradient(135deg, rgba(232, 192, 122, 0.1) 0%, rgba(110, 231, 208, 0.1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(52, 40, 24, 0.3) 0%, rgba(42, 31, 18, 0.15) 100%)',
      },
    },
  },
  plugins: [],
}

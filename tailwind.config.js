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
        vault: {
          body: '#0a0a08',
          surface: '#121210',
          card: '#1a1a16',
          rust: '#B87333',
          rustDark: '#8B4513',
          rustLight: '#CD853F',
          turquoise: '#6ee7d0',
          turquoiseDark: '#3db8a0',
          amber: '#ffb641',
          bone: '#d4cfc0',
          sand: '#a09880',
          oxide: '#A0522D',
          patina: '#2ecfff',
        },
        /* Compatibility aliases for PMPipeline & PipelineInfographic */
        wasteland: {
          900: '#0a0a08',
          800: '#121210',
          700: '#1a1a16',
          600: '#302820',
          200: '#a09880',
          50: '#d4cfc0',
        },
        pipboy: { 400: '#6ee7d0' },
        amber: { 400: '#ffb641' },
        rust: { 400: '#B87333', 500: '#A0522D' },
        lavender: { 400: '#c4b5e0' },
        accent: {
          cyan: '#6ee7d0',
          coral: '#B87333',
          teal: '#3db8a0',
          purple: '#2ecfff',
        },
        dark: {
          50: '#d4cfc0',
          100: '#a09880',
          200: '#807060',
          300: '#605040',
          400: '#403830',
          500: '#302820',
          600: '#1a1a16',
          700: '#121210',
          800: '#0e0e0c',
          900: '#0a0a08',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        terminal: ['var(--font-vt323)', '"Courier New"', 'monospace'],
        heading: ['var(--font-vt323)', '"Courier New"', 'monospace'],
        mono: ['Fira Code', 'var(--font-fira-code)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'screen-flicker': 'screenFlicker 4s ease-in-out infinite',
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
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(184, 115, 51, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(184, 115, 51, 0.5)' },
        },
        screenFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
          '75%': { opacity: '0.99' },
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
        'vault-gradient': 'linear-gradient(135deg, rgba(184, 115, 51, 0.1) 0%, rgba(110, 231, 208, 0.1) 100%)',
        'terminal-gradient': 'linear-gradient(135deg, rgba(26, 26, 22, 0.8) 0%, rgba(18, 18, 16, 0.6) 100%)',
      },
    },
  },
  plugins: [],
}

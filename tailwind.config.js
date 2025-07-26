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
               border: "hsl(var(--border))",
               input: "hsl(var(--input))",
               ring: "hsl(var(--ring))",
               background: "hsl(var(--background))",
               foreground: "hsl(var(--foreground))",
               primary: {
                 DEFAULT: "hsl(var(--primary))",
                 foreground: "hsl(var(--primary-foreground))",
                 50: '#f0f9ff',
                 100: '#e0f2fe',
                 200: '#bae6fd',
                 300: '#7dd3fc',
                 400: '#38bdf8',
                 500: '#0ea5e9',
                 600: '#0284c7',
                 700: '#0369a1',
                 800: '#075985',
                 900: '#0c4a6e',
               },
               secondary: {
                 DEFAULT: "hsl(var(--secondary))",
                 foreground: "hsl(var(--secondary-foreground))",
               },
               destructive: {
                 DEFAULT: "hsl(var(--destructive))",
                 foreground: "hsl(var(--destructive-foreground))",
               },
               muted: {
                 DEFAULT: "hsl(var(--muted))",
                 foreground: "hsl(var(--muted-foreground))",
               },
               accent: {
                 DEFAULT: "hsl(var(--accent))",
                 foreground: "hsl(var(--accent-foreground))",
                 cyan: '#00d4ff',
                 coral: '#ff6b6b',
                 teal: '#4ecdc4',
                 purple: '#a855f7',
               },
               popover: {
                 DEFAULT: "hsl(var(--popover))",
                 foreground: "hsl(var(--popover-foreground))",
               },
               card: {
                 DEFAULT: "hsl(var(--card))",
                 foreground: "hsl(var(--card-foreground))",
               },
               dark: {
                 50: '#f8fafc',
                 100: '#f1f5f9',
                 200: '#e2e8f0',
                 300: '#cbd5e1',
                 400: '#94a3b8',
                 500: '#64748b',
                 600: '#475569',
                 700: '#334155',
                 800: '#1e293b',
                 900: '#0f172a',
               }
             },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
} 
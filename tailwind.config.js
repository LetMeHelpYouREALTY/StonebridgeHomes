/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F1419',
          soft: '#1A2229',
          muted: '#3D4A54',
        },
        stone: {
          DEFAULT: '#C9C2B4',
          light: '#E6E1D6',
          wash: '#F3F0EA',
        },
        sage: {
          DEFAULT: '#5F7263',
          deep: '#3E4F44',
        },
        champagne: {
          DEFAULT: '#C4A574',
          soft: '#D4BC94',
        },
        heritage: {
          primary: '#0F1419',
          secondary: '#5F7263',
          dark: '#0A0E12',
          light: '#F3F0EA',
          neutral: '#E6E1D6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both',
        'slow-pan': 'slowPan 28s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.12) translate3d(-2%, 1%, 0)' },
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

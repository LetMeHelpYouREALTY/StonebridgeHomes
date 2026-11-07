/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        stone: {
          night: '#16202A',
          slate: '#1F2A33',
          ink: '#1C1C1C',
          sand: '#F4EFE6',
          cream: '#FBF8F2',
          dune: '#E6DCCB',
          rock: '#B5542D',
          copper: '#C9733E',
          ember: '#8E3F22',
          gold: '#F4C27A',
          mist: '#6B7A86',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { '8xl': '88rem' },
      boxShadow: { card: '0 10px 30px -12px rgba(22, 32, 42, 0.25)' },
    },
  },
  plugins: [],
  future: { hoverOnlyWhenSupported: true },
};

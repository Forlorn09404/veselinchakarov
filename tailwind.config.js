
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        fantasy: ['Cinzel', 'serif'],
        body: ['Crimson Text', 'serif'],
      },
      colors: {
        fantasy: {
          bg: '#0f0a1e', // Deep midnight blue
          bgGradientStart: '#0f0a1e',
          bgGradientEnd: '#1a0b2e',
          accent: '#d4af37', // Rich gold
          accentLight: '#f4e4c1',
          parchment: '#f5e6d3', // Aged paper
          parchmentDark: '#e8d5b7',
          text: '#2c1810', // Deep brown for parchment
          glow: 'rgba(138, 43, 226, 0.4)', // Purple glow
        }
      },
      backgroundImage: {
        'parchment-texture': "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
        'fantasy-gradient': 'linear-gradient(to bottom, #0f0a1e, #1a0b2e)',
      }
    },
  },
  plugins: [],
}

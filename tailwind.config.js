/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#001E41',
        blue: '#4396F6',
        cobalt: '#23588C',
        paper: '#F4F6F8',
        mist: '#E9EEF3',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      letterSpacing: { editorial: '-0.075em' },
      boxShadow: {
        plate: '0 22px 80px rgba(0,30,65,.10)',
      },
    },
  },
  plugins: [],
}

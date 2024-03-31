/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#277CA5',
          light: '',
          hover: '',
        },
        secondary: {
          DEFAULT: '#393939',
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {},
      boxShadow: {},
      width: {},
      height: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};

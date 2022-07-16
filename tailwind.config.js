/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  mode: 'watch',
  theme: {
    extend: {
      colors: {
        bgGray: '#181818',
      },
      backgroundImage: {
        mainBack: "url('./assets/background2.png')",
      },
    },
  },
  plugins: [],
};

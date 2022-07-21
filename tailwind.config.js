/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  mode: 'watch',
  theme: {
    extend: {
      colors: {
        main: {
          gray: '#181818',
          orange: '#DA6701',
        },
      },
      backgroundImage: {
        orangeToYellow: 'linear-gradient(0deg, #F3E777 -80%, #DA6701 100%)',
        mainBack: "url('./assets/background2.png')",
      },
    },
  },
  plugins: [],
};

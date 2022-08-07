/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  mode: 'watch',
  theme: {
    extend: {
      colors: {
        main: {
          gray: '#181818',
          gray100: '#2e2e2e',
          orange: '#DA6701',
        },
      },
      backgroundImage: {
        orangeToYellow: 'linear-gradient(0deg, #F3E777 -80%, #DA6701 100%)',
        mainBack: "url('./assets/background2.png')",
        mainGradient:
          'linear-gradient(rgba(20, 22, 23, 0.5) , rgba(255, 255, 255, 0.1))',
        imageBg:
          "url('https://firebasestorage.googleapis.com/v0/b/monstrovedproject.appspot.com/o/articles%2FHF3tTwpl388biyJLOjrJ%2F01058afa76ce4d4586a30d72990ed07d.jpg?alt=media&token=315819d9-805e-46c8-a63b-63cf6c78b6d0')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#141414'
        },
        primary:{
          DEFAULT: '#F3F334'
        },
        accent: {
          DEFAULT: '#F38B34'
        }
      },
      fontFamily: {
        primary: ['Superstar', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

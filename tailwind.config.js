/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc727",
        dark: "#11111",
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT:"1 rem",
        }
      }
    },
  },
  plugins: [],
}


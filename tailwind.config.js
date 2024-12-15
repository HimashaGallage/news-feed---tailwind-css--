/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#0E0D13',
        secondary: '#FFFFFF',
        hover: '#2A283E'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
}


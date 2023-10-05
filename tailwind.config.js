/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["PLAYFAIR", "medium"],
        cormorant: ["CORMORANT", "regular"],
        cormorantBold : ["CORMORANTBOLD", "heavy"],
      },
      backgroundColor: {
        'tan': '#ECDEC9',
      }
    },
  },
  plugins: [],
}


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#0a0a0a",
        lightBlack: "#333333",
      },
      fontFamily: {
        inter: ['"Inter"'],
      },
      scale: {
        '102': '1.02',
        '104': '1.04',
        // Add more custom scale values if needed
      },
    },
  },
  plugins: [],
}

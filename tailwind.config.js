module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#0a0a0a",
        lightBlack: "#333333",
        lightGray: "#b8bfc1",
        lightGreen: "#67e687",
      },
      fontFamily: {
        inter: ['"Inter"'],
      },
      scale: {
        '102': '1.02',
        '104': '1.04',
        // Add more custom scale values if needed
      },
      // screens: {
      //   'sm': '240px',
      //   'md': '778px',
      //   // ... other breakpoints
      // },
    },
  },
  plugins: [],
}

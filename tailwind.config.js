tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        tsf: "375px",
        ftf: "425px",
      },
    },
  },
  plugins: [],
};

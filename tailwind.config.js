const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        italianno: ["Italianno", "sans-serif"],
      },
      spacing: {
        px: "1px",
        "2px": "2px",
      },
      zIndex: {
        "-1": "-1",
        excessive: "9999",
      },
      colors: {
        // Discor Colors
        offblack: "#111111",
        primary: "#1CFFD6",
      },
    },
  },
  plugins: [],
};

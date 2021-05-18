module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        350: "350px",
        349: "349px",
        302: "302px",
        208: "208px",
        160: "160px",
        37: "37px",
      },
      height: {
        420: "420px",
        236: "236px",
        200: "200px",
        35.71: "35.71px",
        50: "50px",
      },
      textColor: {
        "primary-blue": "#25265E",
        link: "#0556F3",
        caption: "#25265e",
      },
      fontSize: {
        22: "22px",
      },
      lineHeight: {
        30: "30px",
      },
      colors: {
        main: "#0556F3",
        secondary: "#6501E5",
        tertiary: "#00A3FF",
        warning: "#F79522",
        seperator: "#D3DCE6",
        "compiler-base": "#F5F5F5",
      },
      fontFamily: {
        sans: ["Euclid Circular A", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["first"],
      fontWeight: ["first"],
      width: ["first"],
      height: ["first"],
      margin: ["first", "last"],
    },
  },
  plugins: [],
};

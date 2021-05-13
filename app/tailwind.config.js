module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        350: "350px",
        160: "160px",
      },
      height: {
        236: "236px",
        200: "200px",
      },
      textColor: {
        "primary-blue": "#25265E",
        link: "#0556F3",
        caption: "#25265E",
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

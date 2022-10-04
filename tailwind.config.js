module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        jj: "150px",
        jj1: "320px",
        xs: "250px",
        xs0: "300px",
        xs1: "350px",
        xs2: "400px",
        xs3: "520px",
      },
      colors: {
        bgSecon: "#1C1C24",
        darkText: "#808191",
        darkBorder: "#3A3A43",
        darkPlaceholder: "#4B5264",

        darkPrimary: "#1C1C1E",
        darkPrimary2: "#2C2C2E",
        darkInput: "#39383E",
        darkText2: "#706F75",
        darkIconCate: "#F1F1F1",
      },
    },
  },
  plugins: [],
};

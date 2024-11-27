// content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        fadeInOut: "BouncefadeInOut 3s ease-in-out infinite",
      },
      keyframes: {
        BouncefadeInOut: {
          "0%, 100%": { opacity: 0.8, transform: "translateY(0)" },
          "50%": { opacity: 1, transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};

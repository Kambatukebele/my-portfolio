/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      backgroundImage: {
        "custom-bg": "url(./assets/images/bg.png)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
    colors: {
      black900: "#000000",
      blue: "#0000ee",
      green: "#82b440",
      white: "#ffffff",
      black500: "#262626",
      black50: "#545454",
      gray50: "#3D4C5E",
      purple900: "#4E2FDA",
      purple50: "#DED4F4",
    },
  },
  plugins: [],
};

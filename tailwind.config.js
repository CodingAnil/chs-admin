/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   splash_screen: "url('/images/splash-screen_lineargradient.jpg')",
      //   subscription_white: "url('/images/bgwhite.png')",
      //   subscription_orange: "url('/images/bg-orange.png')",
      //   testimonials_banner: "url('/images/review-bg.png')",
      //   notfound_bg: "url('/images/not-found-bg.png')",
      // },

      boxShadow: {
        custom: "0px 5px 14px 0px rgba(8, 15, 52, 0.1)",
        soft_lg: "0px 5px 14px 0px rgba(8, 15, 52, 0.04)",
        shadow1: "0px 2px 2px 0px #E8A7051A",
        shadow2: "0px -2px 2px 0px #E8A70533",
        shadow3: "0px 0px 24px 0px #00000040",
        danger: "0px 4px 4px 0px #ee0808ab",
      },

      colors: {
        secondaryShade4: "rgba(72, 74, 78, 0.5)",
        secondprimary: "#3781f9",
        primary: "rgb(43 241 43)",
        primary700: "#e8a705b3",
        greenColor: "#0D9F00",
        secondaryShade1: "#1A1D22",
        secondaryShade2: "#1D2026",
        secondaryShade3: "#353535",
        fieldBG: "#FFFFFF33",
        fadeWhite: "#626262",
        darkWhite: "#FBFBFB",
        darkGrey: "#818181",
        darkGrey100: "#343434",
        darkGrey200: "#787878",
        darkGrey300: "#D4D4D4",
        darkGrey400: "#999999",
        darkGrey500: "#707078",
        lightGrey100: "#D9D9D9",
        black100: "#232323",
        darkGray100: "#323232",
        fadeGrey: "#fbfbfbb3",
        danger: "#EE0808",
        darkTheme: "#1e2026",
        darkGrayishBlue: "#3D4044",
      },
      spacing: {
        4.5: "18px",
      },
      height: {
        13: "52px",
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      opacity: {
        24: "0.24",
      },
    },
  },
  safelist: [
    "bg-splash-screen",
    "bg-subscription_white",
    "bg-subscription_orange",
    "bg-testimonials-banner",
  ],
  darkMode: "class",
  plugins: [nextui()],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      affair: "#71467f",
      clairvoyant: "#460959",
      eminence: "#5B266C",
      trendypink: "#8C6E95",
      amethystsmoke: "#AB9DB0",
      contessa: "#BF6668",
      darkburgundy: "#86090C",
      stiletto: "#A23538",
      petiteorchid: "#DFA2A4",
      cinderella: "#FDE2E2",
      eastbay: "#505485",
      luckypoint: "#12185E",
      jacarta: "#2F3471",
      waterloo: "#777A9C",
      spunpearl: "#A6A7B7",
      wildwillow: "#B7BD65",
      yukongold: "#7C8509",
      sushi: "#99A134",
      deco: "#D9DEA1",
      hintofyellow: "#FAFCE0",
    },
    fontFamily: {
      sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")],
};

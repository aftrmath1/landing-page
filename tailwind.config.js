/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3e1344",
        background: "#F4F0FF",
        accent: "#35465f",
      },
    },
  },
  daisyui: {
    themes: [
      {
        main: {
          primary: "#5E17EB",
          // background: "#F4F0FF",
          accent: "#35465f",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};

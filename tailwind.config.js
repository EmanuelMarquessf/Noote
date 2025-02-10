/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7d468c",
        secondary: "#897abf",
        background: "#120f26",
        background2: "#302A59",
        accent: "#57f2aa",
        text: "#fcfeff",
        customBlue: {
          50: "#F6F4FF",
          100: "#EFEDFF",
          150: "#D6D2F0",
          200: "#A7A1D0",
          250: "#7A73AA",
          300: "#524B81",
          350: "#302A59",
          400: "#1E193E",
          450: "#120F26",
          500: "#080617",
          550: "#04020F",
        },
      },
    },
  },
  plugins: [],
};

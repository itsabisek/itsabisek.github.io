/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'primaryBg': '#2b2d32',
      'secondaryBg': '#e45d36',
      'greyBg': '#414452',
      'neonBg': '#498b54',
      'whiteBg': '#ffffee'

    },
    fontFamily: {
      hack: ["Hack"],
    },
  },
  plugins: [require("tailwindcss-animate"),],
};
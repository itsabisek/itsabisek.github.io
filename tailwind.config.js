/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      'primaryBg': '#c5d8d1',
      'secondaryBg': '#f45b69',
      'accentBg': '#ffcb77'
    },
    fontFamily: {
      hack: ["Hack"]
    },
    transitionProperty: {
      height: 'height'
  }
  },
  plugins: [],
};

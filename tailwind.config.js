/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
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
        'primaryBg': '#c5d8d1',
        'secondaryBg': '#f45b69',
        'accentBg': '#ffcb77'
      },
      fontFamily: {
        hack: ["Hack"]
      },
    },
    plugins: [],
};
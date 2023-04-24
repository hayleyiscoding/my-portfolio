/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font-figtree": ["FigTree", "sans-serif"],
      },
      colors: {
        "custom-red": "hsl(0, 100%, 50%)",
        "custom-black": "#191A21",
      },
    },
  },
  plugins: [],
};

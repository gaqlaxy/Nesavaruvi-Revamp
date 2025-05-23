/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    grain: "grain 8s steps(10) infinite",
  },
  keyframes: {
    grain: {
      "0%": { "background-position": "0 0" },
      "100%": { "background-position": "100% 100%" },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: { DEFAULT: "250ms" },
    extend: {},
  },
  plugins: [],
};

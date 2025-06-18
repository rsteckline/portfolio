/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        main: '#1D5A6C',
        cream: '#F6F4F1',
      }
    },
  },
  plugins: [],
}

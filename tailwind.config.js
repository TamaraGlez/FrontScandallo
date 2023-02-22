/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '2/3': '2 / 3',
        '3/2': '3 / 3',
      }
    },
  },
  plugins: [],
}

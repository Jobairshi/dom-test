/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Adjust the path according to your project structure
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss -i ./input.css -o ./output.css --watch
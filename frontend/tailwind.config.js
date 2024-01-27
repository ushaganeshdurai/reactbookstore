/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './node_modules/flowbite-react/lib/esm/**/*.js',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}


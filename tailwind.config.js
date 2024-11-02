/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title": "#131313",
        "desc": "#131313CC",
        "prime": "#23BE0A",
        "second": "#59C6D2",
        "sec_bg": "#1313130D"

      }
    },
  },
  plugins: [daisyui],
}
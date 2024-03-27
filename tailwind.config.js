/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anDiKa: ["Andika"],
        workSans: ["Work Sans"],
        playFairDisplay: ["Playfair Display"]
      }
    },
  },
  plugins: [require("daisyui")],
}


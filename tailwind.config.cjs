/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        fundo: "url('/fundo.png')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 50.94%, #E1D55D 40.57%)",

        "game-gradient":
          "linear-gradient(180deg, rgb(0,0,0,0) 0%, rgb(0,0,0,0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};

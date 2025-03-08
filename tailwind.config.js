/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        secondary: "#138086",
        thertiary: "#0D6767",
        primary: "#42999E",
        white: "#FFFFFF",
        background: "#FFFFFF",
      },

      screens: {
        phone: "480px",

        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwind-scrollbar-hide"),
  ],
};

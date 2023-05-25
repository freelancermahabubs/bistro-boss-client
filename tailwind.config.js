/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#283ac1",

          secondary: "#f75686",

          accent: "#ea8f90",

          neutral: "#2B202D",

          "base-100": "#EEEBF4",

          info: "#4E67D4",

          success: "#2BC575",

          warning: "#9E6310",

          error: "#ED2139",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

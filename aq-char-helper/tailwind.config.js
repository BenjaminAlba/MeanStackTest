/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Aether: ["BASKERVILL", "sans-serif"]
      },
      colors: {
        'AQ-title': '#552809',
        'AQ-base': '#884416',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#884416",
          "primary-focus": "#884416",
        },
      },
    ],
  },
}


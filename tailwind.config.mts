/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "slices/**/*.vue",
    "content/**/*.{vue,md,mdx}",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    // "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {

        red: {
          DEFAULT: "#FD6C47",

          50: "#FFEFEB",
          100: "#FFE3DC",
          200: "#FEC2B3",
          300: "#FEA690",
          400: "#FD8A6D",
          500: "#FD6C47",
          600: "#FC3908",
          700: "#C02802",
          800: "#7E1A01",
          900: "#420E01",
          950: "#1E0600",
        },

        // primary: {
        //   DEFAULT: "#4e82e4",
        //   50: "#f2fbfd",
        //   100: "#dff3fb",
        //   200: "#c4e7f8",
        //   300: "#a0d3f3",
        //   400: "#6fafeb",
        //   500: "#4e82e4",
        //   600: "#3757d7",
        //   700: "#2f39c6",
        //   800: "#302ca0",
        //   900: "#32297f",
        //   950: "#281d4e",
        // },
        primary: {
          DEFAULT: "#D3AF5F",
          50: "#FFFCEB",
      100: "#FDF6D8",
      200: "#F8E9B4",
      300: "#F0D994",
      400: "#E5C576",
      500: "#D3AF5F",
      600: "#CE9E27",
      700: "#A17E17",
      800: "#705A0A",
      900: "#3B3002",
      950: "#1F1A00"
        },
        black: "#1b1b1b",
      },
      fontFamily: {
        body: "Roboto",
        heading: ["Orlega\\ One", "Playfair\\ Display", "cursive"],

      },
      aspectRatio: {
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
      dropShadow: {
        text: "0 4px 4px  hsla(0, 0%, 0%, 0.5)",
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("@tailwindcss/typography"),
    // ...
  ],
}

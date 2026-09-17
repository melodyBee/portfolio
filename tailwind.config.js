/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        label: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6B2737",
          secondary: "#A8C3D4",
          accent: "#EFC1C6",
          neutral: "#F8F3EC",
          "base-100": "#F8F3EC",
          info: "#3abff8",
          success: "#A8C3D4",
          warning: "#6B2737",
          error: "#6B2737",
        },
      },
      {
        dark: {
          primary: "#B84F68",
          secondary: "#7AB5D6",
          accent: "#E89BAD",
          neutral: "#18151B",
          "base-100": "#1c1917",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};

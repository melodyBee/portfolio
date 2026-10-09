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
          primary: "#541f2b",
          secondary: "#A8C3D4",
          accent: "#EFC1C6",
          neutral: "#F8F3EC",
          "base-100": "#F8F3EC",
          info: "#dfd3d4f4",
          success: "#2d6e96",
          warning: "#541f2b",
          error: "#2e0d15",
        },
      },
      {
        dark: {
          primary: "#b84f68",
          secondary: "#7AB5D6",
          accent: "#E89BAD",
          neutral: "#18151B",
          "base-100": "#1c1917",
          info: "#3abff8",
          success: "#7AB5D6",
          warning: "#B84F68",
          error: "#B84F68",
        },
      },
    ],
  },
};

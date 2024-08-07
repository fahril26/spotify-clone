/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        primary: "#1ed760",
        secondary: "#2a2a2a",
      },

      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

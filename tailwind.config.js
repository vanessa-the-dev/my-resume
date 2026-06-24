/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'arial', 'sans-serif'],
      },
      colors: {
        // Google-style palette
        gblue: "#1a73e8",
        glink: "#1a0dab",
        gtext: "#202124",
        ggrey: "#5f6368",
        gresult: "#4d5156",
        gborder: "#dfe1e5",
        ghover: "#f8f9fa",
      },
    },
  },
  plugins: [],
};

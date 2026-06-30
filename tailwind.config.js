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
        gbrand: "#F59E0B",
        gblue: "#1a73e8",
        glink: "#1a0dab",
        gtext: "#202124",
        ggrey: "#5f6368",
        gresult: "#4d5156",
        gborder: "#dfe1e5",
        ghover: "#f8f9fa",
      },
      keyframes: {
        panelIn: {
          "0%": { opacity: "0", transform: "translateY(10px) scale(.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        panelIn: "panelIn .4s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
  plugins: [],
};

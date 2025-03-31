/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1E3A8A", // Blu scuro
        "dark-orange": "#C2410C", // Arancione scuro
        "light-orange": "#F59E0B", // Arancione chiaro
        "light-beige": "#F2EBDB", // Beige chiaro (sfondo)
      },
    },
  },
  plugins: [],
};

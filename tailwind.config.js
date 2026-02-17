/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.25)",
        glassHover: "rgba(255, 255, 255, 0.4)",
      },
      backgroundImage: {
        'gradient-sky': 'linear-gradient(to top, #330867 100%)'
      },
    },
  },
  plugins: [],
}


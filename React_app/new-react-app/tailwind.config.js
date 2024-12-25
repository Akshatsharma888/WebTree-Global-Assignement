/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "rgba(58, 100, 59, 1)",
        customWhite: "rgba(255, 251, 242, 1)",
        customGray: "rgba(255, 247, 226, 1)",
        customLight: "rgba(244, 247, 236, 1)",
        customBlue: "rgba(46, 55, 164, 0.04)",
        customeB: "rgba(250, 250, 250, 1)",
        customG:"rgba(151, 151, 151, 1)",
        customA: "rgba(207, 235, 207, 0.5)",
        customE: "rgba(243, 243, 243, 1)",
        customF:"rgba(220, 238, 220, 1)",
        customH: "rgba(234, 242, 234, 1)",
        customI: "rgba(255, 247, 226, 1)",
      },
      container: {
        center: true,
        padding: "0.5rem",
        screens: {
          xs: "100%",
          sm: "475px",
          md: "640px",
          lg: "768px",
          xl: "1024px",
          "2xl": "1280px",
          "3xl": "1536px",
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
      boxShadow: {
        'custom': '0 60px 40px rgb(0 0 0 / 8%)',
      },
    },
  },
  plugins: [],
};
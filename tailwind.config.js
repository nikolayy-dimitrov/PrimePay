/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#231656",
        "secondary": "#625FFB",
        "content": "#4E4E4E",
        "bgc": "#F5F5F5",
        "bgc-gray": "#F8F8F8",
        },
      },
      fontFamily: {
        Jost: [ "Jost", "sans-serif" ],
        OpenSans: [ "Open Sans", "sans-serif" ],
        Inter: [ "Inter", "sans-serif" ],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "footer-bg": "url(./assets/Background_Footer.svg)"
      }),
      colors: {
        "primary": "#231656",
        "secondary": "#625FFB",
        "content": "#4E4E4E",
        "bgc": "#F5F5F5",
        "bgc-gray": "#F8F8F8",
        "gray-txt": "#B5B5B5",
        "gray-line": "#D8D8D8",
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        bannerImg: "url('/heroBg.jpg')",
      },
      colors: {
        primary: "#2095AE",
        secondary: "#f4f5f8",
        third: "#0f2454",
        fourth: "rgba(255,255,255,0.2)",
        text: "#676977",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

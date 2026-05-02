/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        navColor: "#64B937",
        secondary: "#338E03",
        primary: "#555555",
        tertiary: "#2F2F2F",
        fourth: "#4461F2",
        iptColor: "#EAF0F7",
        warning: "#F1C40F",
        success: "#7AC751",
        danger: "#EA4335F7",
        info: "#00A3C6",
        textColor: "#3B3B3B",
        selected: "#D7F9C5",
        specialColor: "#14162E",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        DEFAULT: "0px 4px 4px #00000040",
        md: "5px 5px 5px #00000040",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.7)",
        glow: "0 0 8px rgba(255, 255, 255, 0.8)",
      },
      spacing: {
        navHeight: "50px",
      },
      height: {
        "1/3-svh": "70svh",
      },
    },
    screens: {
      xs: "320px",
      sm: "620px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
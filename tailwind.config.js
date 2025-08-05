/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        linear:
          "linear-gradient(98.86deg, rgba(163, 7, 37, 0.5) 0%, rgba(100, 185, 55, 0.7) 100%)",
        warning: "#F1C40F",
        success: "#7AC751",
        danger: "#EA4335F7",
        info: "#00A3C6",
        textColor: "#ACADAC",
        selected: "#D7F9C5",
        specialColor: "#14162E",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Small, light shadow

        DEFAULT: "0px 4px 4px #00000040", // Default shadow
        md: "5px 5px 5px #00000040", // Medium shadow
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Large shadow
        xl: "5px 5px 10px rgba(0, 0, 0, 0.7)", // Extra-large shadow
        glow: "0 0 8px rgba(255, 255, 255, 0.8)", // Glowing white shadow
      },
      text: {
        xl: "26px",
        lg: "22px",
        md: "18px",
        sm: "14px",
        xs: "12px",
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
      sm: "620px", // Small devices (phones)
      md: "768px", // Medium devices (tablets)
      lg: "1024px", // Large devices (laptops)
      xl: "1280px", // Extra-large devices (desktops)
      "2xl": "1536px", // Very large screens
    },
  },

  plugins: [require("tailwindcss-textshadow")],
};

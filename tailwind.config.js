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
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Small, light shadow
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Default shadow
        md: "2px 3px 2px rgba(0, 0, 0, 0.3)", // Medium shadow
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Large shadow
        xl: "5px 5px 10px rgba(0, 0, 0, 0.7)", // Extra-large shadow
        glow: "0 0 8px rgba(255, 255, 255, 0.8)", // Glowing white shadow
      },
      spacing: {
        navHeight: "50px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

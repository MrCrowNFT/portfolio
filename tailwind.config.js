/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Main color palette
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7ac5fb",
          400: "#47a5f5",
          500: "#2186eb", // Primary brand color
          600: "#1669cc",
          700: "#1253a6",
          800: "#144788",
          900: "#163c72",
        },
        secondary: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d2d9e3",
          300: "#acb9ca",
          400: "#8094ab",
          500: "#5e748f", // Secondary color
          600: "#475973",
          700: "#36465d",
          800: "#2d3b50",
          900: "#283346",
        },
        accent: {
          50: "#f3f9ed",
          100: "#e7f3db",
          200: "#d0e8b6",
          300: "#abd687",
          400: "#86c055",
          500: "#67a834", // Accent color
          600: "#4d8a1f",
          700: "#3c6c1b",
          800: "#33561c",
          900: "#2c4a1c",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1)",
        button:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  // Enable dark mode
  darkMode: "class",
};

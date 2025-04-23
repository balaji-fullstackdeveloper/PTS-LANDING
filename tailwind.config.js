/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./_site/**/*.{html,js}",
    "./src/_includes/**/*.{html,njk,js}",
    "./src/_includes/partials/**/*.{html,njk,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        zoomIn: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        slideFromRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideIn: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-up": "slideUp 1s ease-out forwards",
        "zoom-in": "zoomIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "zoom-in-scroll": "zoomIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-right":
          "slideFromRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-left": "slideFromLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      colors: {
        primary: {
          50: "#F0F7FF",
          100: "#E0F0FF",
          150: "#F5F5F5",
          200: "#B9DCFF",
          300: "#8AC5FF",
          400: "#5AADFF",
          500: "#3394FF",
          600: "#0061FF",
          700: "#0052D6",
        },
        blue: {
          600: "#0061FF",
          700: "#0052D6",
          900: "#1D2B4C",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      width: {
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

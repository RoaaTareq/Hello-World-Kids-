/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // كل ملفات React
  ],
  theme: {
    extend: {
      colors: {
        // ألوان رئيسية
        primary: "#ff051eff",
        "primary-dark": "#005f93",
        "primary-transparent": "#0550ffbf",

        // ألوان الحالة
        success: "#1fcc79",
        "success-dark": "#009963",
        "success-transparent": "#7dff7d1a",
        danger: "#f44336",
        "danger-dark": "#b0424a",
        "danger-transparent": "#530000d7",
        warning: "orange",

        // ألوان خلفية
        bg: {
          light: "#e0e0e0",
          DEFAULT: "#e0e0e0",
          dark: "#d0d0d0",
          transparent: "#e0e0e0cc",
        },

        // ألوان نص
        "text-primary": "#db1212ff",
        "text-secondary": "#979797",
        "text-secondary-dark": "#4d4d4d",
        "text-disabled": "#909090",
      },
    },
  },
  plugins: [],
};

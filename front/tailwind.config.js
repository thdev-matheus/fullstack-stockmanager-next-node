/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "input-color-primary": "#fff",
        "input-color-secondary": "#fe28",
      },
      placeholderColor: {
        "input-placeholder-color-primary": "#458",
        "input-placeholder-color-secondary": "#00ff00",
      },
      borderColor: {
        "input-border-color-primary": "#fff",
        "input-border-color-secondary": "#fe28",
      },
      backgroundColor: {
        "input-background-color-primary": "transparent",
        "input-background-color-secondary": "#000",
      },
    },
  },
  plugins: [],
};

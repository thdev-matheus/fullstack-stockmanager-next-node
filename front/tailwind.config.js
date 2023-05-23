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
        "input-color-secondary": "#fff",
        "button-color-primary": "#fff",
        "button-color-secondary": "#fff",
        "button-hover-color-primary": "#fff",
        "button-hover-color-secondary": "#fff",
      },
      placeholderColor: {
        "input-placeholder-color-primary": "#505050",
        "input-placeholder-color-secondary": "#505050",
      },
      borderColor: {
        "input-border-color-primary": "#fff",
        "input-border-color-secondary": "#fff",
      },
      backgroundColor: {
        "input-background-color-primary": "transparent",
        "input-background-color-secondary": "transparent",
        "button-background-color-primary": "#6880FF",
        "button-background-color-secondary": "#6880FF",
        "button-hover-background-color-primary": "#7C91FF",
        "button-hover-background-color-secondary": "#7C91FF",
      },
    },
  },
  plugins: [],
};

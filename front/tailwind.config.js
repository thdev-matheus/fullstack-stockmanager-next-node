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
      },
    },
  },
  plugins: [],
};

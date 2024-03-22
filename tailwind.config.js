/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "primary-theme": "303131",
        "secondary-theme": "#9fe6a6",
      },
    },
  },
  plugins: [],
};


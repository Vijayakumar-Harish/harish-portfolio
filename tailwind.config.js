/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto'],
        body: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto']
      }
    }
  },
  plugins: []
};

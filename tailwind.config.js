/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'github-primary': '#0d1117',
        'github-secondary': '#010409',
        'github-text': '#e6edf3',
        'github-text-light': '#727a85',
        'github-border': '#30363d',
      },
    },
  },
  plugins: [],
}


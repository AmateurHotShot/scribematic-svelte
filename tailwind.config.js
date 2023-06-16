/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#0C0C0C',
        'blue-700': '#2563EB',
        'blue-400': '#258DEB',
        'card-light': '#303030',
        'card-dark': '#121212',
      },
      fontFamily: {
        'sans': ['"Red Hat Display"', 'sans-serif'],
      },
    }
  },
  plugins: []
};
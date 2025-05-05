/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_site/**/*.{html,js}',
    './_layouts/**/*.{html,js}',
    './_posts/**/*.{html,md}',
    './_includes/**/*.html',
    './index.markdown',
    './assets/js/**/*.js',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
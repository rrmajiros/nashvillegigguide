/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nashville-red': '#C41E3A',
        'nashville-blue': '#0D2B5C',
        'music-gold': '#D4AF37',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Georgia', 'serif'],
        'body': ['var(--font-body)', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
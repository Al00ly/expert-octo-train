/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... يمكنك إضافة المزيد من درجات اللون
        }
      },
      fontFamily: {
        sans: ['var(--font-cairo)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
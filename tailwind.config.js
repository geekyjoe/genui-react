/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3B82F6',
      },
      animation: {
        'sidebar-open': 'sidebar-open 0s ease-in-out',
      },
      keyframes: {
        'sidebar-open': {
          '0%': { width: '80px' },
          '100%': { width: '256px' },
        }
      },
      fontFamily: {
        host: ['Host Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        libreFranklin: ['Libre Franklin', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        mU: ['Montserrat Underline', 'sans-serif'],
        playhl: ["Playwrite HR Lijeva", 'cursive']
      },
    },
  },
  plugins: [],
}
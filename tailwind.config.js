/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          dark: '#32030f',
          deep: '#4B0718',
          royal: '#6D1028',
          light: '#851c37',
        },
        gold: {
          antique: '#D4AF62',
          light: '#F3E5AB',
          dark: '#A67C35',
          shimmer: '#FFF3CD',
        },
        ivory: {
          warm: '#FFF6E8',
          cream: '#FDF9F3',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'serif'],
        telugu: ['var(--font-telugu)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

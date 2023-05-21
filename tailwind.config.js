/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'customInfo': '750px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-45': 'linear-gradient(24deg, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        'custom-blue': {
          600: '#142831',
          700: '#0E212F',
          800: '#021C29',
        }
      }
    },
  },
  plugins: [],
}

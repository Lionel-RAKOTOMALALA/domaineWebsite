/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#028DD0',
          hover: '#0273aa',
          dark: '#035173',
          darker: '#023246',
          darkest: '#012131',
        },
        text: {
          paragraph: '#647882',
          placeholder: '#CCCCCC',
        },
        success: '#22C55E',
        background: {
          main: '#F5F9FA',
          secondary: '#ECF5FA',
        },
        border: {
          input: '#D1D5DB',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'title1': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'title2': ['26px', { lineHeight: '1.3', fontWeight: '700' }],
        'title3': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'title4': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'paragraph': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'menu': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nv: {
          DEFAULT: '#413C69',
        },
        tint: {
          DEFAULT: '#E7ECED',
        },
      },
      fontSize: {
        15: '15px',
        10: '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    variants: {
      extend: {
        display: ['group-hover'],
      },
    },
  },
  plugins: [],
};

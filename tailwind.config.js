module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      light: '#333842',
      main: '#282c34',
      dark: '#070709',
      text: '#E8F3F8',
      backgroundColor: '#1d2026'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

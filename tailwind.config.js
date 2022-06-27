module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary-dark': '#2E2456',
      primary: '#41337A',
      'primary-light': '#CBC5EA',
      'secondary-dark': '#244231',
      secondary: '#2A6041',
      'secondary-light': '#28965A',
      light: '#EAEAEA',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: [
        'Graphik',
        'sans-serif',
      ],
      serif: [
        'Merriweather',
        'serif',
      ],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

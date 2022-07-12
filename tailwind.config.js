module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // https://coolors.co/232323-393939-636363-8e8e8e-d5d5d5-f6f6f6
      'primary-dark': '#2E2456',
      primary: '#41337A',
      'primary-light': '#CBC5EA',
      'secondary-dark': '#244231',
      secondary: '#2A6041',
      'secondary-light': '#28965A',
      light: '#EAEAEA',
      'gray-700': '#232323',
      'gray-500': '#393939',
      gray: '#636363',
      'gray-300': '#8E8E8E',
      'gray-100': '#D5D5D5',
      'gray-50': '#F6F6F6',
      white: '#FFF',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    /*
  --dark-slate-blue: #41337aff;
  --platinum: #eaeaeaff;
  --lavender-blue: #cbc5eaff;
  --spanish-green: #28965aff;
  --hunter-green: #2a6041ff;
*/
    colors: {
      primary: '#41337aff',
      'primary-light': '#cbc5eaff',
      secondary: '#2a6041ff',
      'secondary-light': '#2a6041ff',
      light: '#eaeaeaff',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
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

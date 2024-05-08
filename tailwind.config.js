import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {

      'white': '#FFF6F5',
      'brown-dark': '#520311',
      'red': '#F40F39',
      'trueWite': '#FFFFFF',
      'pink': '#FEC0CC',
      'pinkplace': '#E66161',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      fontFamily: {
        'Lustria': ['Lustria', 'serif'],
        'Bitter': ['Bitter', 'serif']
      }
    },
  },
  plugins: [],
});
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add more paths if needed based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

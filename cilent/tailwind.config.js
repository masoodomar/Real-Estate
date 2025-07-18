/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// This configuration file sets up Tailwind CSS for a project, specifying the paths to the content files where Tailwind's utility classes will be applied.
// It includes all HTML and JavaScript files in the `src` directory and the public HTML

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'; // Correctly import Flowbite
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.js', // Make sure Flowbite content path is correct
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailgrids/plugin"), // Ensure Tailgrids is installed and available
    flowbite, // Use Flowbite correctly as a plugin
  ],
}

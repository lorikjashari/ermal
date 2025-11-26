/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /** Primary navy (logo outer ring) */
          DEFAULT: "#0B2E5B",
          /** Deeper navy for backgrounds */
          dark: "#071D3B",
          /** Light blue (logo wave) */
          light: "#1F6FE5",
          /** Accent red (logo inner shape) */
          red: "#D6332E",
        }
      }
    }
  },
  plugins: []
};

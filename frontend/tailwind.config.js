/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
      extend: {
        fontFamily: {
            serif: ['Playfair Display', 'serif'],
            sans: ['Poppins', 'sans-serif'],
          },
      },
    },
    plugins: [
        require("daisyui"), 
    ],
    daisyui: {
        themes: [
          {
            elegantBrown: {
              primary: "#7B3F00", // dark brown
              secondary: "#D5B894", // light brown
              accent: "#8A5A44", // Shades for accents
              neutral: "#5B4636", // Neutral tones
              "base-100": "#F5F5F3", // Main light background
              "base-200": "#EDE6DB", // Secondary light background
              "base-300": "#D6CEC3", // Tertiary background
              info: "#A38C79", 
              success: "#928D72", 
              warning: "#C1A56B", 
              error: "#A45B41",
              delete: "#B02A0B",
            },
          },
        ],
      },
  };
  
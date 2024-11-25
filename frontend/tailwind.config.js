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
              primary: "#7B3F00", // Marrón elegante para elementos principales
              secondary: "#D5B894", // Marrón claro para elementos secundarios
              accent: "#8A5A44", // Tonos para detalles
              neutral: "#5B4636", // Tonos neutros
              "base-100": "#F5F5F3", // Fondo principal claro
              "base-200": "#EDE6DB", // Fondo secundario claro
              "base-300": "#D6CEC3", // Fondo terciario
              info: "#A38C79", // Informativo
              success: "#928D72", // Éxito
              warning: "#C1A56B", // Advertencia
              error: "#A45B41", // Error
            },
          },
        ],
      },
  };
  
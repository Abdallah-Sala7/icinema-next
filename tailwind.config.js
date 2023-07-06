/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEBE08",
        light: "#FFFFFF",
        lightGray: "#F3F3F3",
        dark: "#161616",
        darkGray: "#2B2A2D",
        // gray: "#707070",
      },

      spacing: {
        100: "25rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        200: "50rem",
      },

      // filter
      filter: {
        "primary-filter":
          "invert(59%) sepia(96%) saturate(408%) hue-rotate(3deg) brightness(105%) contrast(106%)",
        "gray-filter":
          "invert(50%) sepia(21%) saturate(0%) hue-rotate(209deg) brightness(83%) contrast(87%)",
        "lightGray-filter":
          "invert(87%) sepia(0%) saturate(0%) hue-rotate(329deg) brightness(92%) contrast(83%)",
      },

      // shadow

      boxShadow: {
        btnShado: "35px 35px 0 10px #febe08",
        darkShadow: "0px 0px 2px rgba(255, 255, 255, 0.25)",
      },
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};


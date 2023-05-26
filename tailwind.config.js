/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branding: {
          white: {
            DEFAULT: "#EFEFEF",
            darken: {
              DEFAULT: "#E8E8E5",
            },
          },
          green: {
            DEFAULT: "#CACCAF",
            darken: {
              DEFAULT: "#7E9159",
            },
          },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

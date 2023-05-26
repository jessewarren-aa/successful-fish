/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branding: {
          black: {
            DEFAULT: "#292929",
          },
          white: {
            DEFAULT: "#f6f6f6",
            darken: {
              DEFAULT: "#EFEFEF",
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

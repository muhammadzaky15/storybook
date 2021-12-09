module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
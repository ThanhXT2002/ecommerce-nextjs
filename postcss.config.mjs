const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      colors: {
        primary: "#FFB400",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "var(--font-geist-sans)", "sans-serif"], 
        mono: ["var(--font-geist-mono)", "monospace"], 
      },
    },
  },
};

export default config;
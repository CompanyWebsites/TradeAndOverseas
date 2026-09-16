import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1F1E",
        paper: "#EBEDE9",
        white: "#F8F7F3",
        pine: {
          DEFAULT: "#234E3E",
          light: "#5B8C7E",
          dark: "#143328",
        },
        amber: {
          DEFAULT: "#B7792E",
          light: "#D9A05A",
        },
        smog: "#8E9892",
        line: "#D5DAD5",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        body: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

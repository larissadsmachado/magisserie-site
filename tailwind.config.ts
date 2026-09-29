import type { Config } from "tailwindcss";

// Paleta oficial da marca
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { creme: "#fef7ef", petroleo: "#21687a", menta: "#6ac5be", pessego: "#fea579" },
    },
  },
  plugins: [],
};
export default config;

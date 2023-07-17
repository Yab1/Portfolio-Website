/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#27272a",
          900: "#18181b",
        },
        green: "#22c55e",
        black: "#020617",
        white: "#f8fafc",
      },
      fontFamily: {
        body: ["Nunito", "Roboto"],
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      // NOTE custom class props
      // spacing: {
      //   13: '3rem'
      // },

      colors: {
        'prime': '#EB493C',
        'br': '#02070D',
      },
      container: {
        center: true,

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "globe": "url('../public/globe.jpg')",
        // "loginbg": "url('../public/home/log.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

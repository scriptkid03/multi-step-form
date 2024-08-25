import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar": "url('/svgs/bg-sidebar-desktop.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
    },
  },
  plugins: [],
};
export default config;

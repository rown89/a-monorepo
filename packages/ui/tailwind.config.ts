import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../storefront/website/components/**/*.{js,jsx,ts,tsx}",
    "../../backoffice/website/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};

export default config;

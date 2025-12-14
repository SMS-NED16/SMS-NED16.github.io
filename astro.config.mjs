// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://SMS-NED16.github.io', // Replace YOUR_USERNAME with your GitHub username
  base: '/dev_portfolio_v1', // Replace with your repository name, or use '/' if repo name is YOUR_USERNAME.github.io
  vite: {
    plugins: [tailwindcss()],
  },
});

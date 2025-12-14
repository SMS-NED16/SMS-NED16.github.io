// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://SMS-NED16.github.io',
  base: '/', // Using root path for username.github.io repository
  vite: {
    plugins: [tailwindcss()],
  },
});

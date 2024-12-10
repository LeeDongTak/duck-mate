import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";
import { newUtilities } from "./utils/tailwind-plugin";

const pluginClassCreator: PluginCreator = ({ addUtilities }) => {
  addUtilities(newUtilities);
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: "var(--main-color)",
      },
    },
  },
  plugins: [pluginClassCreator],
} satisfies Config;

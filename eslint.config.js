import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, prettier: prettierPlugin },
    extends: ["js/recommended", "plugin:prettier/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prettier/prettier": "error" // mostra erro se o código não estiver formatado
    }
  },
  pluginReact.configs.flat.recommended
]);

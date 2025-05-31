import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import unicorn from "eslint-plugin-unicorn";
const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript",  "plugin:prettier/recommended" ),
  {
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
      "unicorn":unicorn
    },
    rules: {
      "prettier/prettier": "error",
      "no-template-curly-in-string": "error",
      "unused-imports/no-unused-imports": "error",
      "no-duplicate-imports": "error",
      "quotes": ["error", "double", { avoidEscape: true }],
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-pascal-case": "error", 
      "no-console": "warn",
      "no-debugger": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
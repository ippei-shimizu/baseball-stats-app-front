module.exports = [
  {
    ignores: ["node_modules/", "dist/", "build/"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
      "react-native": require("eslint-plugin-react-native"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      import: require("eslint-plugin-import"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-raw-text": "warn",
      "react-native/no-unused-styles": "warn",
      "import/no-unresolved": "error",
    },
  },
];

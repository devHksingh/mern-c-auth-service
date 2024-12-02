/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["*.spec.ts", "jest.config.js"],
  root: true,
  rules: {
    "no-console": "error",
    "dot-notation": "error",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/require-await": "off",
  },
  overrides: [
    {
      files: [".eslintrc.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

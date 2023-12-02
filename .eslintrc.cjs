module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "node_modules",
    "vite.config.ts",
    "vite-env.d.ts",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      typescript: {}, // this uses the default settings
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    quotes: [2, "double", { avoidEscape: true }],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [0],
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "import/resolver": "off", // Set severity to "off" to disable the rule
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/no-array-index-key": "off",
  },
};

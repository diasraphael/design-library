module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/sort-comp": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
  },
  plugins: ["@typescript-eslint", "prettier"],
};

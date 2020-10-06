module.exports = {
  root: true,
  // https://github.com/facebook/react-native/issues/26903#issuecomment-581074476
  extends: ["@react-native-community/eslint-config", "eslint-config-prettier"],
  plugins: ["unused-imports", "simple-import-sort"],
  rules: {
    // related to the "unused-imports" plugin
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],

    // related to the "simple-import-sort" plugin
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off",

    // misc
    // https://github.com/facebook/react-native/issues/26903#issuecomment-581074476
    "prettier/prettier": "off",
    "react/prop-types": "off",
    "require-atomic-updates": "off",
    "react/prefer-stateless-function": [
      0,
      {
        ignorePureComponents: false,
      },
    ],
    "use-isnan": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
        message: "setTimeout must always be invoked with two arguments.",
      },
      {
        selector:
          "CallExpression[callee.name='setInterval'][arguments.length!=2]",
        message: "setInterval must always be invoked with two arguments.",
      },
    ],
  },
}

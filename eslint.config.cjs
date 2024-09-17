export default [
  {
    files: [
      "src/**/*.js",
      "**/*.mjs",
      "**/*.js",
      "**/*.cjs",
      "**/*.ts",
      "**/*.tsx",
    ],
    ignores: ["**/*.config.js", "**/!(*.*)"],
    rules: {
      semi: "off",
      "prefer-const": "error",
    },
  },
];

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-html",
  ],
  ignoreFiles: [
    "node_modules/**",
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
  ],
  plugins: [
    "stylelint-color-format",
    "stylelint-use-nesting",
    "stylelint-plugin-defensive-css",
    "stylelint-plugin-logical-css",
  ],
  rules: {
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "block-no-empty": null,
    "color-format/format": {
      format: "hsla",
    },
    "csstools/use-nesting": "always",
    "plugin/use-defensive-css": [
      true,
      {
        "accidental-hover": true,
      },
      {
        "background-repeat": true,
      },
      {
        "flex-wrapping": true,
      },
      {
        "scroll-chaining": true,
      },
      {
        "vendor-prefix-grouping": true,
      },
    ],
    "plugin/use-logical-properties-and-values": [
      true,
      {
        severity: "warning",
      },
    ],
    "plugin/use-logical-units": [
      true,
      {
        severity: "warning",
      },
    ],
  },
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
};

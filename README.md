# Sika's Stylelint Config

[![CI](https://github.com/sikaeducation/stylelint-config/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/stylelint-config/actions/workflows/main.yml)

Install with `npm install -D stylelint @sikaeducation/stylelint-config`.

## Usage

```bash
npm i -D stylelint @sikaeducation/stylelint-config
```

```js
// .stylelintrc.js
module.exports = {
  extends: ["@sikaeducation/stylelint-config"],
};
```

Integrate this with your editor's stylelint plugin for fix-on-save. If the app is `{"type": "module"}`, use `.stylelintrc.cjs`.

## Deployment

Set `NPM_TOKEN` on GitHub Actions to publish. Generate it on [Sika's npm page](https://www.npmjs.com/settings/sikaeducation/tokens) then add it to the [secrets page](https://github.com/sikaeducation/eslint-config/settings/secrets/actions).

Publish updates by incrementing the version with `npm version patch|minor|major` and pushing.

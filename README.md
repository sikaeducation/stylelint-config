# Sika's Style Config

[![CI](https://github.com/sikaeducation/stylelint-config/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/stylelint-config/actions/workflows/main.yml)

Install with `npm install -D stylelint @sikaeducation/stylelint-config`.

## Usage

```js
// .stylelintrc.cjs
module.exports = {
	extends: [
		"@sikaeducation/stylelint-config",
	],
};
```

Integrate this with your editor's stylelint plugin for fix-on-save.

## Development

Publish updates by incrementing version (eg. `npm version patch`) and pushing.

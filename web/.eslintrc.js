"use strict";

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	extends: "airbnb",
	plugins: ["react", "jsx-a11y", "import"],

	rules: {
		quotes: [
			ERROR,
			"double",
			{ avoidEscape: true, allowTemplateLiterals: true }
		],
		indent: OFF,
		"no-tabs": OFF,
		"comma-dangle": OFF,
		"arrow-parens": [ERROR, "as-needed"],
		"import/no-extraneous-dependencies": OFF,
		"import/first": OFF,
		"no-console": [WARN, { allow: ["warn", "error"] }],
		"no-confusing-arrow": OFF,

		// React & JSX
		// Our transforms set this automatically
		"react/jsx-indent": OFF,
		"react/jsx-indent-props": OFF,
		"react/jsx-closing-bracket-location": OFF,

		// TODO
		"no-warning-comments": [
			WARN,
			{ terms: ["todo", "fixme"], location: "anywhere" }
		]
	},
	settings: {
		"import/resolver": {
			webpack: {
				config: "webpack.config.js"
			}
		}
	},
	env: {
		jest: true
	}
};

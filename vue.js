const base = require('@brlt/prettier');

/** @type {PrettierConfig} */
module.exports = {
	...(base || {}),
	overrides: [
		...(base.overrides || []),
		{
			files: ['*.vue'],
			options: {
				parser: 'vue',
				trailingComma: 'all',
				semi: false,
				proseWrap: 'always',
				singleQuote: true,
				jsxSingleQuote: false,
				bracketSameLine: true,
				bracketSpacing: true,
				singleAttributePerLine: true,
				vueIndentScriptAndStyle: true,
			},
		},
	],
};

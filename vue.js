/**
 * @version {1.7.5}
 * @type {PrettierOptions}
 */
const config = require('@brlt/prettier');

/** @type {PrettierConfig} */
module.exports = {
	...(config || {}),
	overrides: [
		...(config.overrides || []),
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

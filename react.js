/**
 * @version {1.8.0}
 * @type {PrettierOptions}
 */
const config = require('@brlt/prettier');

/** @type {PrettierConfig} */
module.exports = {
	...(config || {}),
	overrides: [
		...(config.overrides || []),
		{
			files: ['*.jsx', '*.tsx', '*.mdx'],
			options: {
				semi: false,
				jsxSingleQuote: false,
				singleAttributePerLine: true,
				bracketSameLine: true,
				vueIndentScriptAndStyle: true,
			},
		},
	]
};

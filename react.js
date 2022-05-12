const base = require('@brlt/prettier');

/** @type {PrettierConfig} */
module.exports = {
	...(base || {}),
	overrides: [
		...(base.overrides || []),
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

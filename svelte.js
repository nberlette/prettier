/**
 * @version {1.8.2}
 * @type {PrettierOptions}
 */
const config = require('@brlt/prettier');

/** @type {PrettierConfig} */
module.exports = {
	...(config || {}),
	overrides: [
		{
			files: ['*.svelte'],
			options: {
				parser: 'svelte',
				plugins: ['prettier-plugin-svelte'],
				semi: false,
				tabWidth: 2,
				useTabs: false,
				singleQuote: false,
				proseWrap: 'preserve',
				trailingComma: 'es5',
				bracketSameLine: true,
				bracketSpacing: false,
				jsxSingleQuote: false,
				singleAttributePerLine: true,
				quoteProps: 'consistent',
				printWidth: 100,
				htmlWhitespaceSensitivity: 'strict',
				vueIndentScriptAndStyle: true,
				arrowParens: 'avoid',
				endOfLine: 'lf',
				/** @see prettier-plugin-svelte */
				svelteStrictMode: true,
				svelteAllowShorthand: true,
				svelteBracketNewLine: false,
				svelteIndentScriptAndStyle: true,
				svelteSortOrder: 'scripts-options-markup-styles',
			},
		},
	],
};

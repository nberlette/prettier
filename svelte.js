const base = require('./');

module.exports = {
	...base,
	overrides: [
		...base.overrides,
		{
			files: ['*.svelte'],
			options: {
				parser: 'svelte',
				plugins: ['prettier-plugin-svelte'],
				semi: true,
				tabWidth: 2,
				useTabs: false,
				singleQuote: true,
				proseWrap: 'always',
				arrowParens: 'avoid',
				trailingComma: 'es5',
				svelteStrictMode: false,
				svelteAllowShorthand: true,
				svelteBracketNewLine: true,
				svelteIndentScriptAndStyle: true,
				svelteSortOrder: 'scripts-styles-options-markup',
			},
		},
	],
};

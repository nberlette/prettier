const base = require('./');

module.exports = {
	...base,
	overrides: [
		...base.overrides,
		{
			files: ['*.vue'],
			options: {
				parser: 'vue',
				arrowParens: 'avoid',
				bracketSpacing: true,
				embeddedLanguageFormatting: 'auto',
				printWidth: 120,
				quoteProps: 'consistent',
				tabWidth: 2,
				trailingComma: 'none',
				useTabs: false,
				semi: false,
				singleQuote: true,
				proseWrap: 'always',
				vueIndentScriptAndStyle: true,
			},
		},
	],
};

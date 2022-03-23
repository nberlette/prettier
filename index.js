const base = require('./base');

module.exports = {
	...base,
	overrides: [
		{
			files: ['*.ts', '*.d.ts', '*.tsx'],
			options: {
				parser: 'babel-ts',
				printWidth: 120,
				trailingComma: 'none',
				semi: false,
				singleQuote: true,
				jsxSingleQuote: false,
			},
		},
		{
			files: ['*.cjs', '*.mjs', '*.js', '*.jsx'],
			options: {
				parser: 'babel',
				printWidth: 120,
				semi: false,
				singleQuote: true,
				jsxSingleQuote: false,
			},
		},
		{
			files: ['*.md', '*.markdown'],
			options: {
				parser: 'markdown',
				tabWidth: 2,
				embeddedLanguageFormatting: 'auto',
				htmlWhitespaceSensitivity: 'css',
				trailingComma: 'none',
				singleQuote: false,
			},
		},
		{
			files: ['*.yml', '*.yaml', '.*.yml', '.*.yaml'],
			options: {
				parser: 'yaml',
				useTabs: false,
				tabWidth: 2,
				singleQuote: false,
			},
		},
	],
};

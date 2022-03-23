const base = require("./");

module.exports = {
	...base,
  overrides: [
		...base.overrides,
    {
      files: ['*.svelte'],
      options: {
				parser: 'svelte',
				plugins: ['svelte3/svelte3'],
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
        svelteSortOrder: 'scripts-styles-options-markup'
      }
    },
		{
      files: ['*.svx', '*.svelte.md'],
      options: {
        parser: 'mdx', // mdsvex...?
				plugins: ['svelte3/svelte3', 'mdsvex/mdsvex'],
        tabWidth: 2,
				useTabs: false,
				singleQuote: true,
				proseWrap: 'always',
				arrowParens: 'avoid',
				trailingComma: 'es5',
        embeddedLanguageFormatting: 'auto',
        htmlWhitespaceSensitivity: 'css',
				svelteStrictMode: false,
				svelteAllowShorthand: true,
				svelteBracketNewLine: true,
				svelteIndentScriptAndStyle: false,
				svelteSortOrder: 'scripts-styles-options-markup'
      }
    },
  ]
}

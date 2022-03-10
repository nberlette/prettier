module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  printWidth: 120,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: true,
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.svelte'],
      options: {
        proseWrap: 'always',
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        svelteStrictMode: false, 
        svelteAllowShorthand: true,
        svelteBracketNewLine: true,
        svelteIndentScriptAndStyle: true,
        svelteSortOrder: 'scripts-options-markup-styles',
      }
    },
    {
      files: ['*.ts', '*.d.ts'],
      options: {
        parser: 'typescript',
        singleQuote: true,
        trailingComma: 'es5'
      }
    },
    {
      files: ['*.cjs', '*.mjs', '*.js'],
      options: {
        parser: 'babel',
        semi: false,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2
      }
    },
    {
      files: ['*.md', '*.markdown'],
      options: {
        parser: 'markdown',
        useTabs: false,
        tabWidth: 1
      }
    },
    {
      files: ['*.yml', '*.yaml', '.*.yml', '.*.yaml'],
      options: {
        parser: 'yaml',
        useTabs: false,
        tabWidth: 1
      }
    },
    {
      files: ['*.mdx'],
      options: {
        parser: 'mdx',
        tabWidth: 1,
        embeddedLanguageFormatting: 'auto',
        bracketSameLine: false,
        htmlWhitespaceSensitivity: 'css'
      }
    },
    {
      files: ['*.svx', '*.svelte.md'],
      options: {
        parser: 'mdx', // mdsvex...?
        tabWidth: 1,
        embeddedLanguageFormatting: 'auto',
        bracketSameLine: false,
        htmlWhitespaceSensitivity: 'css'
      }
    },
    {
      files: ['.bash*', '*.sh', '*.bash'],
      options: {
        plugin: ['prettier-plugin-sh'],
        useTabs: true,
        tabWidth: 4,
        printWidth: 100
      }
    }
  ]
}

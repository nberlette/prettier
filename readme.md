# <img src="./.github/assets/prettier.svg" width="40" align="left" alt="">  `pnpm add @brlt/prettier@1.7.2`

An opinionated Prettier configuration to scaffold my projects. Rulesets included for Bash, JSX/TSX,
React, Svelte, and Vue.

### Install

**This package is a shared configuration for [Prettier](https://prettier.io)** - not a replacement
for it. Make sure you install `prettier` too!

```sh
pnpm add -D @brlt/prettier@1.7.2 # overrides may change w/o notice. pin the version!
```

```sh
yarn add --dev @brlt/prettier@1.7.2
```

```sh
npm i -D @brlt/prettier@1.7.2
```

<br>

### Add to `package.json`

```diff
diff --git a/package.json b/package.json

  "main": "index.js",
  "types": "index.d.ts",
+ "prettier": "@brlt/prettier",
```

### `.prettierrc.json`

If you don’t want to use `package.json`, you can use any of the supported extensions to export a
**`string`**. So `.prettierrc.json` would just contain `"@brlt/prettier"`, or
`"@brlt/prettier/svelte"`, etc.

<br>

### `.prettierrc.js`

The above method does not offer a way to extend the configuration to override certain
properties from the shared config. To customize the properties, `.prettierrc.js` and merge
`@brlt/prettier` with your options.

#### Example `.prettierrc.js` for a Vue project

```js .prettierrc.js
module.exports = {
	...(require('@brlt/prettier/vue') || {}),
	semi: false,
	trailingComma: 'none',
};
```

### [See the Prettier Docs for more info on shared config ›](https://prettier.io/docs/en/configuration.html#sharing-configurations)

<br><hr><br>

## Using Rulesets and Overrides

Included in the package are several different rulesets that I use interchangeably depending on the
project's needs.

1. `@brlt/prettier` - the [base ruleset](#base-ruleset) with no overrides.
2. `@brlt/prettier/all` - [base](#base-ruleset) + **all** overrides below. For islands-style
   projects.
3. `@brlt/prettier/vue` - [base](#base-ruleset) + [Vue overrides](#vue-overrides)
4. `@brlt/prettier/bash` - [base](#base-ruleset) + [Bash overrides](#bash-overrides)
5. `@brlt/prettier/react` - [base](#base-ruleset) + [React overrides](#react-overrides)
6. `@brlt/prettier/svelte` - [base](#base-ruleset) + [Svelte overrides](#svelte-overrides)

<br>

## Base Ruleset

```js index.js
/** @type {PrettierConfig} */
module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: false,
	bracketSameLine: true,
	embeddedLanguageFormatting: 'auto',
	htmlWhitespaceSensitivity: 'css',
	printWidth: 120,
	quoteProps: 'preserve',
	semi: true,
	singleQuote: true,
	proseWrap: 'always',
	useTabs: false,
	tabWidth: 2,
	endOfLine: 'lf',
	trailingComma: 'all',
}
```

### TypeScript Definitions

```ts
/**
 * Opinionated shareable Prettier configuration rules.
 * @package {@brlt/prettier}
 * @version {1.7.2}
 * @license {MIT}
 * @author Nicholas Berlette <https://github.com/nberlette>
 */
declare module '@brlt/prettier' {
	declare const options: PrettierOptions;
	export = options as PrettierOptions;
}
```

## Bash Overrides

```js
{
   files: [
      // dotfiles - see https://github.com/nberlette/dotfiles
      '.*aliases',
      '*.bash*',
      '.{dircolors,inputrc}',
      '.{exports,extras,functions,path,prompt,profile,aliases}',
      '*.*sh',
      '.*.*sh',
      '.*shrc',
      '.*rc',
      '.env',
      '.env.*',
      // miscellaneous
      'Dockerfile',
      // files like .gitpod.Dockerfile
      '.*.Dockerfile',
      // .gitignore, .prettierignore, .vercelignore, ...
      '.*ignore'
   ],
   options: {
      plugins: ['prettier-plugin-sh'],
      tabWidth: 4,
      printWidth: 80,
      parser: 'sh',
   },
   excludeFiles: [
      '.bash_history'
   ]
}
```

### Using `@brlt/prettier/bash` in `package.json`

```diff
diff --git base/package.json bash/package.json

-  "prettier": "@brlt/prettier",
+  "prettier": "@brlt/prettier/bash",
```

## React Overrides

```js
{
   files: ['*.jsx', '*.tsx', '*.mdx'],
   options: {
      // no parser override, allows JSX/TSX/MDX
      semi: false,
      jsxSingleQuote: false,
      singleAttributePerLine: true,
      bracketSameLine: true,
      vueIndentScriptAndStyle: true,
   },
}
```

### Using `@brlt/prettier/react` in `package.json`

```diff
diff --git base/package.json react/package.json

-  "prettier": "@brlt/prettier",
+  "prettier": "@brlt/prettier/react",
```

## Svelte Overrides

```js
{
   files: ['*.svelte'],
   options: {
      semi: false,
      tabWidth: 2,
      printWidth: 100,
      singleQuote: false,
      trailingComma: 'es5',
      bracketSameLine: true,
      bracketSpacing: false,
      jsxSingleQuote: false,
      singleAttributePerLine: true,
      htmlWhitespaceSensitivity: 'strict',
      arrowParens: 'avoid',
      parser: 'svelte',
      plugins: ['prettier-plugin-svelte'],
      /** @see prettier-plugin-svelte */
      svelteStrictMode: true,
      svelteAllowShorthand: true,
      svelteBracketNewLine: false,
      svelteIndentScriptAndStyle: true,
      svelteSortOrder: 'scripts-options-markup-styles',
   }
}
```

### Using `@brlt/prettier/svelte` in `package.json`

```diff
diff --git base/package.json svelte/package.json

-  "prettier": "@brlt/prettier",
+  "prettier": "@brlt/prettier/svelte",
```

## Vue Overrides

```js
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
   }
}
```

### Using `@brlt/prettier/vue` in `package.json`

```diff
diff --git base/package.json vue/package.json

-  "prettier": "@brlt/prettier",
+  "prettier": "@brlt/prettier/vue",
```

---

[MIT](https://raw.github.com/nberlette/prettier/main/license.md) ©
[Nicholas Berlette](https://github.com/nberlette)

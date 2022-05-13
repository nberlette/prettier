
declare type PrettierConfig = import('prettier').Config
declare type PrettierOptions = import('prettier').Options

type LiteralUnion<T extends U, U = string> = T | (Pick<U, never> & { _?: never | undefined; });

/**
 * Opinionated shareable Prettier configuration rules.
 * @package {@brlt/prettier}
 * @version {1.8.1}
 * @license {MIT}
 * @author Nicholas Berlette <https://github.com/nberlette>
 */
declare module '@brlt/prettier' {
	declare const options: PrettierOptions;
	export = options as PrettierOptions;
}

/**
 * The base ruleset from `@brlt/prettier` with **all** overrides for Bash, React, Svelte, and Vue, combined.
 * @see {@link @brlt/prettier}
 */
declare module '@brlt/prettier/all' {
	declare const config: PrettierConfig;
	export = config as PrettierConfig;
}

/**
 * Prettier configuration overrides for Bash scripts and various other dotfiles.
 * @see {@link @brlt/prettier}
 * @see {@link prettier-plugin-sh}
 */
declare module '@brlt/prettier/bash' {
	declare const config: PrettierConfig;
	export = config;
}

/**
 * Prettier configuration overrides for React (`.jsx`, `.tsx`, `.mdx`) files.
 * @see {@link @brlt/prettier}
 */
declare module '@brlt/prettier/react' {
	declare const config: PrettierConfig;
	export = config;
}

/**
 * Prettier configuration overrides for Svelte files.
 * @see {@link @brlt/prettier}
 * @see {@link prettier-plugin-svelte}
 */
declare module '@brlt/prettier/svelte' {
	declare const config: PrettierConfig;
	export = config;
}

/**
 * Prettier configuration overrides for Vue files.
 * @see {@link @brlt/prettier}
 */
declare module '@brlt/prettier/vue' {
	declare const config: PrettierConfig;
	export = config;
}

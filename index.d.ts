
declare type PrettierConfig = import('prettier').Config;
type Overrides = PrettierConfig['overrides'];

type LiteralUnion<T extends U, U = string> = T | (Pick<U, never> & { _?: never | undefined; });

declare module '@brlt/prettier' {
	declare const config: PrettierConfig;
	export = config as PrettierConfig;
}

declare module '@brlt/prettier/bash' {
	declare const base: PrettierConfig;
	export = base;
}

declare module '@brlt/prettier/react' {
	declare const base: PrettierConfig;
	export = base;
}

declare module '@brlt/prettier/svelte' {
	declare const base: PrettierConfig;
	export = base;
}

declare module '@brlt/prettier/vue' {
	declare const base: PrettierConfig;
	export = base;
}

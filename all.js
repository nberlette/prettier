/** @version {1.8.0} */
/** @type {PrettierConfig} */
module.exports = {
	...(require('@brlt/prettier')),
	overrides: [
		...(require('@brlt/prettier/svelte').overrides || []),
		...(require('@brlt/prettier/react').overrides || []),
		...(require('@brlt/prettier/bash').overrides || []),
		...(require('@brlt/prettier/vue').overrides || []),
	],
};

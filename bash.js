const base = require('@brlt/prettier')

/** @type {PrettierConfig} */
module.exports = {
	...(base || {}),
	overrides: [
		...(base.overrides || []),
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
				'.bash_history',
				'.'
			]
		},
	],
};

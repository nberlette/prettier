/** @type {Prettier.Config} */
const base = require('./');

module.exports = {
	...base,
	overrides: [
		...base.overrides,
		{
			files: [
				'.aliases',
				'.bash_aliases',
				'.bash_profile',
				'.bash_prompt',
				'.bashrc',
				'.exports',
				'.extras',
				'.functions',
				'.path',
				'.profile',
			],
			options: {
				parser: 'sh',
				plugins: ['prettier-plugin-sh'],
				useTabs: true,
				tabWidth: 4,
				printWidth: 80,
			},
		},
		{
			files: ['*.sh', '*.bash', '.*.sh', '.*.bash'],
			options: {
				parser: 'sh',
				plugins: ['prettier-plugin-sh'],
				useTabs: true,
				tabWidth: 4,
				printWidth: 80,
			},
		},
	],
};

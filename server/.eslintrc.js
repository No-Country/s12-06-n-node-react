module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['standard', 'eslint:recommended', 'eslint-config-prettier'],
	ignorePatterns: ['.eslintrc.cjs', 'package-lock.json', 'README.md'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
	},
};

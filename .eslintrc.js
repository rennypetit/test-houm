module.exports = {
	env: {
		browser: true,
		amd: true,
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'next',
		'next/core-web-vitals',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
	ignorePatterns: ['/node_modules/**', '/build/**'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'jsx-a11y/no-onchange': 'off',
		semi: ['error', 'always'],
	},
};

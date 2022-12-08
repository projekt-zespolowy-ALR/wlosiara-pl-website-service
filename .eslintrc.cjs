module.exports = {
	root: true,
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["svelte3", "@typescript-eslint"],
		},
		{
			files: ["*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["@typescript-eslint"],
		},
		{
			files: ["*.test.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
			},
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:jest-dom/recommended",
				"prettier",
			],
			plugins: ["@typescript-eslint", "jest-dom"],
		},
		{
			files: ["*.js"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "prettier"],
		},
		{
			files: ["*.test.js"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "plugin:jest-dom/recommended", "prettier"],
			plugins: ["jest-dom"],
		},
	],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
};
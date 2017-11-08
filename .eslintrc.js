module.exports = {
	"parser": "babel-eslint", // requres "npm install babel-eslint --save-dev"
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules":{
		"no-console": 0,
		"react/prop-types": 0,
		"react/display-name": 0,
		"no-unused-vars": 1
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	}
};
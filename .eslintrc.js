module.exports = {
	"parser": "babel-eslint", // requres "npm install babel-eslint --save-dev"
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules":{
		"strict": 0,
		"no-console": [
			"warn",
			{ allow: ["nada"] }
		]
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	}
};
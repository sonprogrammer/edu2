module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        parser: '@babel/eslint-parser', 
        requireConfigFile: false 
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};

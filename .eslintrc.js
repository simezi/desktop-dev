module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        // parser: 'babel-eslint',
        // ecmaFeatures: {
        //     legacyDecorators: true
        // }
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "sourceType": "module",
            "project": "./tsconfig.json"
        },
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/vue'
    ],
    plugins: [
        'prettier'
    ],
    // add your custom rules here
    rules: {}
};


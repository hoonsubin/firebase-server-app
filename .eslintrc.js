module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        sourceType: 'module',
    },
    ignorePatterns: [
        'lib/**/*', // Ignore built files.
        'node_modules', // Ignore packages
    ],
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    rules: {
        quotes: ['error', 'single'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};

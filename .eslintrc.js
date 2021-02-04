module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [require.resolve('@dotlim/fabric/lib/eslint')],
  rules: {
    // eslint
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};

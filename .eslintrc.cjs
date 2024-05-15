module.exports = {
  plugins: ['spellcheck'],
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/import/extensions': 'off',
  },
};

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'react', 'jsx-a11y'],
  rules: {
    'no-unused-vars': [2, { varsIgnorePattern: 'React|jsx|h' }],
    'react/jsx-uses-vars': 2,
    'no-undef': 0,
    'import/no-absolute-path': 0
  }
}

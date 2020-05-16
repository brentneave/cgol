module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'react', 'jsx-a11y'],
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'function-call-argument-newline': ['error', 'consistent'],
    'import/no-absolute-path': 0,
    'indent': ['error', 2, { 'ImportDeclaration': 1 }],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 0,
    'no-unexpected-multiline': 'error',
    'no-unused-vars': [2, { varsIgnorePattern: 'React|tsx|h' }],
    'object-curly-newline': ['error', { 'multiline': true }],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'padded-blocks': ['error', 'never'],
    'react/jsx-uses-vars': 2,
    'semi': ['error', 'never'],
    'sort-imports': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error'
  }
}



module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 80,
      },
    ],
  },
};

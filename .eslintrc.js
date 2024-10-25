module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
        proseWrap: 'preserve',
        endOfLine: 'auto',
      },
    ],
  },
};

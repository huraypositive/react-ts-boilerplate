module.exports = {
  extends: ['huray', 'huray/typescript', 'huray/react', 'huray/prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

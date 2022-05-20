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
    'import/prefer-default-export': 'off', // 파일에서 하나만 export 할때 default 해야 할지
  },
};

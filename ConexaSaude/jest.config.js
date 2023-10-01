module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'interfaces', './src/App.tsx'],
  testPathIgnorePatterns: ['__tests__/Wrapper.tsx', './__tests__/setupTests.js'],
  verbose: true,
  transform: { '^.+\\.svg$': 'jest-transformer-svg' },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  setupFiles: ['./__tests__/setupTests.js'],
};

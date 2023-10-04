module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'interfaces', './src/App.tsx', './src/routes'],
  testPathIgnorePatterns: ['__tests__/Wrapper.tsx', './__tests__/setupTests.js'],
  verbose: true,
  transform: { '^.+\\.svg$': 'jest-transformer-svg' },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|@react-native-.*|react-native|react-native-.*|react-navigation|react-navigation-.*|@react-navigation|@react-native-community/)/)',
  ],
  setupFiles: ['./__tests__/setupTests.js'],
};

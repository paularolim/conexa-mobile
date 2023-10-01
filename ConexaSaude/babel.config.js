module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg', '.png'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};

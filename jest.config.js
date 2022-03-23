const { defaults } = require('jest-config')

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  clearMocks: true,
  transformIgnorePatterns: [],
  setupFiles: [],
  testPathIgnorePatterns: [],
  coverageDirectory: '__tests__/coverage',
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  testEnvironment: "jsdom"
}

module.exports = {
  collectCoverageFrom: ['*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
};
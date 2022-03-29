'use strict';

module.exports = {
    'testRegex': 'src/__tests__/.*-test\\.js$',
    'testPathIgnorePatterns': [
      '/node_modules/',
    ],
    'testEnvironment': 'node',
    'collectCoverage': true,
    'coverageReporters': ['lcov'],
    'coverageDirectory': 'test-coverage',
    'coverageThreshold': {
        'global': {
            'branches': 0,
            'functions': 0,
            'lines': 0,
            'statements': 0
        }
    }
};

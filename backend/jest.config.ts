export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
      },
  };
  
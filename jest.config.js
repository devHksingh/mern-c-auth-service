/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  // preset: "ts-jest",
  // testEnvironment: "node",
  verbose: true,
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  }
};

// export const preset = 'ts-jest'
// export const testEnvironment = 'node'

module.exports = {
  // NOTE: check the docs https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  moduleNameMapper: {
    // NOTE: This lines helps when you are trying to test components, which import `.css` files
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  }
};

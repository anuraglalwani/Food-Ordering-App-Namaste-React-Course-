/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  // 👇 make sure Jest uses Babel for js, jsx, ts, tsx
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },

  // 👇 allow transforming node_modules if needed
  transformIgnorePatterns: [
    "/node_modules/(?!react-icons)", // add more packages here if needed
  ],

  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};

module.exports = config;

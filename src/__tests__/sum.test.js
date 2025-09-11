const sum = require("../components/sum");

test("", () => {
  const result = sum(7, 3);
  expect(result).toBe(10);
});

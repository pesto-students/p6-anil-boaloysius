const mathOperations = require("./q4");

test("add two numbers", () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test("diff two numbers", () => {
  expect(mathOperations.diff(7, 3)).toBe(4);
});

test("product two numbers", () => {
  expect(mathOperations.product(9, 5)).toBe(45);
});

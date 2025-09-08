// Test File

const { add, subtract, multiply, divide, sqrt, max } = require("./index");

// Add
test("Adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// Subtract
test("Subtracts 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

// Multiply
test("Multiplies 3 * 4 to equal 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

// Divide
test("Divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

// Square root
test("Square root of 16 to equal 4", () => {
  expect(sqrt(16)).toBe(4);
});

// Max
test("Max of 7 and 10 to equal 10", () => {
  expect(max(7, 10)).toBe(10);
});

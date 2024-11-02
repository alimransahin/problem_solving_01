// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (number) => {
  return number * number;
};
const double = (number) => {
  return number * 2;
};
const add5 = (number) => {
  return number + 5;
};
const sqDoAdd = (number) => {
  const sqResult = square(number);
  const douResult = double(sqResult);
  const finalResult = add5(douResult);
  return finalResult;
};
console.log(sqDoAdd(5));

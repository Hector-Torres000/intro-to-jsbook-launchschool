function findIntegers(arr) {
  return arr.filter((element) => {
    if (Number.isInteger(element)) { //Here I could not write an if statement
      return element;                 //but just a return statement that returns
    }                                 //an expression that evaluates to true or false.
  });
}

//code copy/pasted from the exercise
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

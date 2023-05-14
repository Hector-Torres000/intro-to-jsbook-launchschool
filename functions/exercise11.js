function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
/*
no, because lines 1 and 2 'left' and 'right' are local variables
they are declared within the parantheses of a function and are inner scope.
'left' and 'right' on lines 10 and 11 are global variables becauses they 
are declared in the global scope.
*/

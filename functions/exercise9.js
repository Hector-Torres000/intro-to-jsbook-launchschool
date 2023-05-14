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
line 1: multiply, left, right
line 2: product, left, right
line 3: product
line 6: getNumber, prompt
line 7: parseFloat, question, prompt
line 10: left, getNumber
line 11: right, getNumber
line 12: console, left, right, multiply
*/

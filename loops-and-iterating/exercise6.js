// function factorial(num) {
//   let sum = 1;
//   for (let n = 1; n <= num; n += 1) {
//     sum *= n;
//   }
//   console.log(sum);
// }

// let rlSync = require('readline-sync');

// let userInput = Number(rlSync.question('Please enter a number: '));

// factorial(userInput);

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
//factorial(1) = 1
//factorial(2) = factorial(1) * factorial(2) = 1 * 2 = 2
//factorial(3) = factorial(1) * factorial(2) * factorial(3) = 1 * 2 * 3 = 6
//RECURSIVE, I NEED TO PRACTICE SOME MORE ON THIS STUFF

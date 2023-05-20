function factorial(num) {
  let sum = 1;
  for (let n = 1; n <= num; n += 1) {
    sum *= n;
  }
  console.log(sum);
}

let rlSync = require('readline-sync');

let userInput = Number(rlSync.question('Please enter a number: '));

factorial(userInput);

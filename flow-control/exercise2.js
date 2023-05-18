let rlSync = require('readline-sync');

let userNum = rlSync.question('Enter number: ');

function evenOrOdd(num) {
  console.log(num % 2 === 0 ? 'Your number is even' : 'Your number is odd');
}

evenOrOdd(userNum);

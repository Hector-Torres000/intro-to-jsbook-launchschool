let rlSync = require('readline-sync');

let userNum = rlSync.question('Enter number: ');

function evenOrOdd(num) {
  if (num % 1 === 0) {
    console.log(num % 2 === 0 ? 'Your number is even' : 'Your number is odd');
  } else {
    console.log('error, please enter an integer');
  }
}

evenOrOdd(userNum);

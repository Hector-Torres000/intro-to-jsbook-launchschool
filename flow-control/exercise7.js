let rlSync = require('readline-sync');

let word = rlSync.question('Enter a word: ');

function allCaps(str) {
  return str.length > 10 ? str.toUpperCase() : str;
}

console.log(allCaps(word));

let rlSync = require('readline-sync');

function firstName() {
  return rlSync.question(`What is your first name? `);
}
function lastName() {
  return rlSync.question(`What is your last name? `);
}
function sayGreetings() {
  console.log(`Hello, ${firstName()} ${lastName()}!`);
}

sayGreetings();

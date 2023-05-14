function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
/*
returns undefined because the return
statement is placed before the 
console.log() function and thus 
the console.log() doesn't execute.
the return statement terminates the
function.
*/

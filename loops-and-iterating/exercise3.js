let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
/*
the code causes an infinite loop because
the conditional for the while loop is a 
reasigment and not a comparison that evaluates
to a boolean.
No matter how many times you increment counter 
within the loop's body, that reasigment would 
always be considered truthy.
The if statement that breaks the loop never
executes.
*/

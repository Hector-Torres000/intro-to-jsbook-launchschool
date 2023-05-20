for (let i = 0; i < 5; ) {
  console.log((i += 1));
}
/*
there is not increment/decrement of the i variable
and therefore, i believe, it still runs but
it would cause an infinite loop.
*/
/*
I was wrong, it does console log the intended result
because the variable i gets incremented within the
the argument of the 'console.log' function.
Plus I didn't know that the components of a for loop 
are optional lol
 */

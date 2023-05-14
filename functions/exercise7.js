function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
/* 
when invoking the foo function
it will console log "Hello"
and then it will console log undefined
because no second argument was given
and it will default to undefined.
*/

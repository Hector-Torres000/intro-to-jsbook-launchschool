let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
/*
this consoles logs 1 because
the foo function only creates
a variable in the function's copy
but that's just it and only returns
undefined.
*/

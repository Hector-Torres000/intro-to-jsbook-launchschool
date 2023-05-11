const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
/*no it doesn't because the
variable FOO on line 3 is 
block scoped. */

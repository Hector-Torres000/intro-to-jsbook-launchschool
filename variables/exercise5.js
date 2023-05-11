let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
/* console logs 'bar' because
the other foo variable is block
scoped */

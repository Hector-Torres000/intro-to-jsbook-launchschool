function oddLengths(arr) {
  return arr
    .map((str) => {
      return str.length;
    })
    .filter((length) => {
      return length % 2 !== 0;
    });
}

//code copy/pasted from exercise
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce((acc, str) => {
    if (str.length % 2 !== 0) {
      return acc.concat([str.length]);
    }
    return acc;
  }, []);
}

//code copy/pasted from exercise
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

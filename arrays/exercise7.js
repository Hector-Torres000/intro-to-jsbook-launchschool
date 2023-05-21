function sumOfSquares(arr) {
  return arr.reduce((sum, num) => {
    return sum + num * num;
  }, 0);
}

//code copy/pasted from exercise
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

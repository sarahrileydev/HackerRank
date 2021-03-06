//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  let total = arr.reduce((x, y) => x + y, 0);

  var minSum = total - max;
  var maxSum = total - min;

  console.log(minSum + " " + maxSum);
}

miniMaxSum();

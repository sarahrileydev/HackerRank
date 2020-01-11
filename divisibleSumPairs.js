function divisibleSumPairs(n, k, ar) {
  let intCount = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        console.log(i, j);
        intCount++;
      }
    }
  }
  console.log(intCount);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

// function divisibleSumPairs(n, k, arr) {
//   var result = 0;
//   for(var i = 0; i < arr.length -1; i++) {
//     for(var j = i + 1; j < arr.length; j++){
//       if((arr[i] + arr[j]) % k === 0) {
//           result++;
//       }
//     }
//   }
//   return result
// }

function birthday(s, d, m) {
  // number of contiguous pieces of chocolate should equal m
  // sum of sub array of nums assigned to chocolate pieces should equal d
  //  if so we have a match!

  let matched = 0;

  //  if the month number is greater than the length of the array
  // then there are always no matches
  if (m > s.length) {
    return matched;
  }
  // if there is only one num in the array and the month is also 1
  // check to see if the num matches the day
  //  if so, this is also a match
  if (s.length === 1 && m === 1) {
    if (s[0] === d) {
      return 1;
    }
  }
  //  iterate through the array 
  for (let i = 0; i < s.length - 1; i++) {
    // make sure the subArray length is at least m long
    let sub = s.slice(i, i + m);
    if (sub.length === m) {
      // get the total of the sliced array
      let sum = sub.reduce((a, b) => a + b, 0);
      //  if the sum of the subArray equals the day, we have a match
      if (sum == d) {
        matched += 1;
      }
    }
  }

  console.log(matched);
}

birthday([1, 2, 1, 3, 2], 3, 2);

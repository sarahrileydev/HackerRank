function migratoryBirds(arr) {
  let typesCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (!typesCount.hasOwnProperty(arr[i])) {
      typesCount[arr[i]] = 1;
    } else {
      typesCount[arr[i]]++;
    }
  }
  let max = Object.keys(typesCount).filter(x => {
    return typesCount[x] == Math.max.apply(null, Object.values(typesCount));
  });

  return max[0];
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

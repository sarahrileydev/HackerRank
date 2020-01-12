function migratoryBirds(arr) {
  let typesCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (!typesCount.hasOwnProperty(arr[i])) {
      typesCount[arr[i]] = 1;
    } else {
      typesCount[arr[i]]++;
    }
  }

  console.log(Object.values(typesCount));
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

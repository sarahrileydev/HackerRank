// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// Complete the kangaroo function below.
// function kangaroo(x1, v1, x2, v2) {
//   let roo1 = x1 + v1;
//   let roo2 = x2 + v2;

//   while (roo1 !== roo2 && roo1 < 10000) {
//     roo1 += v1;
//     roo2 += v2;

//   }
//   console.log(roo1);
//   if (roo1 === roo2) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// answer with time complexity of O(1)
function kangaroo(x1, v1, x2, v2) {
  let sameLocation = "";
  if (x1 < x2 && v1 < v2) {
    sameLocation = "NO";
  } else if (x2 < x1 && v2 < v1) {
    sameLocation = "NO";
  } else if (x2 < x1) {
    let numOfJumps = (x2 - x1) / (v1 - v2);
    if (numOfJumps % 1 == 0) sameLocation = "YES";
    else sameLocation = "NO";
  } else {
    //v1 > v2
    var numOfJumps = (x2 - x1) / (v1 - v2);

    if (numOfJumps % 1 == 0) sameLocation = "YES";
    else sameLocation = "NO";
  }
  return sameLocation;
}

kangaroo(0, 2, 5, 3);

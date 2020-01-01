// Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleDrops = 0;
  let orangeDrops = 0;
  let applesOnHouse = 0;
  let orangesOnHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    appleDrops = apples[i] + a;
    if (appleDrops >= s && appleDrops <= t) {
      applesOnHouse++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    orangeDrops = oranges[j] + b;
    if (orangeDrops >= s && orangeDrops <= t) {
      orangesOnHouse++;
    }
  }
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

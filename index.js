function hasTargetSum(array, target) {
  // Write your algorithm here
  let complements = new Set();

  // Iterate through the array
  for (let num of array) {
    // Check if the current number is a complement of a previous number in the array
    if (complements.has(num)) {
      return true;
    }

    // Add the complement of the current number to the set
    complements.add(target - num);
  }

  // If no complements are found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of this function is O(n), where n is the length of the input array. This is because we iterate through the array once, and the operations inside the loop (adding and checking complements in a set) are constant time operations.


*/


/* 
  Add your pseudocode here
  1. Create a new set called `complements`
 2. Iterate through the input array:
   a. If the current number is in the `complements` set, return true
   b. Otherwise, add the complement of the current number (i.e., `target - num`) to the `complements` set
 3. If no complements are found, return false

*/

/*
  Add written explanation of your solution here
  We create a new set called complements to store the complements of each number in the array. A complement of a number is another number that, when added to it, equals the target value.
We iterate through the input array using a for...of loop, checking each number to see if it has a complement in the complements set. If it does, we return true because we have found two numbers that add up to the target. If it doesn't, we add the complement of the current number (i.e., target - num) to the complements set.
If we have iterated through the entire array without finding two numbers that add up to the target, we return false because no complements were found.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


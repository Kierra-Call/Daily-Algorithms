//TwoSum

/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values */

    // Given arr = [2, 11, 7, 15], target = 9,
    // Because arr[0] + arr[2] = 2 + 7 = 9
    // return [0, 2].

    // example 1
    const given = [2, 11, 7, 15]
    const target = 9
    // output: [0,2]
    

    // example 2
    const given1 = [3,2,4]
    const target1 = 6
    // output: [1,2]

    // example 3
    const given2 = [3,3]
    const target2 = 6
    // output: [0,1]



// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:

/*
create function that takes in an array and a target
create return arr = []
create outter for loop incrementing with i
    create innter for loop incrementing with j
    if statement for if arr[i] + arr[j] === target
        push to return arr the index of both numbers
        return return arr
*/

function twoSum(arr, target) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j< arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(twoSum(given, target));
console.log(twoSum(given1, target1));
console.log(twoSum(given2, target2));



// create the function and decide what params it needs and what it will return here:
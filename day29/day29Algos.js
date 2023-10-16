/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
// function nonRecursiveSumArr(nums) {
//     let total = 0
//     for (let i=0; i<nums.length; i++) {
//         let value = nums[i]
//         total += value
//     }
//     return total
// }

// console.log(nonRecursiveSumArr(nums1))

function SumArr(nums, i=0, sum=0) {
    // Edge Case -> lowest pri
    // Base Case -> Break us from our recursive call
    if (i == nums.length) {
        return sum
    }
    
    sum += nums[i]
    // Recursive Call
    return SumArr(nums, i+=1, sum)
}

console.log(SumArr(nums1))

/*****************************************************************************/

/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num, i = 1, sum = 0) {
    num = Math.floor(num)
    if (num <= 0) {
    return 0
    }

    sum += i

    if (i == num) {
    return sum
    }

    i++
    return recursiveSigma(num, i++, sum)
}
recursiveSigma(two_num1);
recursiveSigma(two_num2);
recursiveSigma(two_num3);
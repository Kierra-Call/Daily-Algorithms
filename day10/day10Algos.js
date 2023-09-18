/*
Given an array of integers
return the index where the smallest integer is located

return -1 if there is no smallest integer (array is empty) 
since -1 is not a valid index, this indicates it couldn't be found

If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  var min = nums[0];
  var minIndex = -1;
  for ( var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
        minIndex = i;
    }
}
return minIndex;
}
console.log(indexOfMinVal(nums1));
console.log(indexOfMinVal(nums2));
console.log(indexOfMinVal(nums3));

/*******************************************************************************/

/* 
Given an array, reverse it's items in place
return the array after reversing it

Do it in place without using any built in methods
*/

var arr1 = [1, 2, 3];
var expected1 = [3, 2, 1];

var arr2 = ['a', 'b'];
var expected2 = ['b', 'a'];

var arr3 = ['a'];
var expected3 = ['a'];

var arr4 = [];
var expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * BONUS: Do this in place without built ins
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  reverseItems = [];
  for (var i = items.length - 1; i >= 0; i--) {
    reverseItems.push(items[i]);
  }
  return reverseItems;
}
console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
console.log(reverseArr(arr3));
console.log(reverseArr(arr4));
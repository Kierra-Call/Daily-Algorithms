/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

var arr1 = ["a", "b", "c", "d", "e"];
var removeIdx1 = 1;
var expected1 = "b";
// after function call, arr1 should be:
var arr1Expected = ["a", "c", "d", "e"];

var arr2 = ["a", "b", "c"];
var removeIdx2 = 3;
var expected2 = null;
var arr2Expected = ["a", "b", "c"];

var arr3 = ["a", "b", "c"];
var removeIdx3 = -3;
var expected3 = null;
var arr3Expected = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
  if (idx < 0 || idx < items.length-1) {
    return null;
  }
    var returnVal = items[idx];
  for(var i = idx; i<items.length-1;i++) {
    items[i]= items[i+1];
}
items.length=items.length - 1;
return returnVal;
}

console.log(removeAt(arr1, removeIdx1));
console.log(removeAt(arr2, removeIdx2));
console.log(removeAt(arr3, removeIdx3));

/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.

  No built in methods.
*/

var nums1 = [6, 4, 5, 1, 3, 2];
var expected1 = [1, 6, 4, 5, 3, 2];

var nums2 = [1, 5, 2, 9];
var expected2 = [1, 5, 2, 9];

// The min occurs twice.
var nums3 = [5, 1, 0, 2, 3, 0];
var expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  var minVal = 0;
  for(var i = 0; i < nums.length;i++) {
    if (nums[minVal] > nums[i]) {
        minVal = i;
    }
  }
  var temp = nums[0];
  nums[0] = nums[minVal];

  for(var i = minVal; i > 0;i--) {
    nums[i] = nums[i-1];
}
nums[i] = nums[minVal];
return nums
}

function minToFront(nums) {
    var minVal = 0;
    for(var i = 0; i < nums.length;i++) {
      if (nums[minVal] > nums[i]) {
          minVal = i;
      }
    }
}
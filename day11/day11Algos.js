/* 
  Given array and an additional value, insert this value at the beginning of
  the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

var arr1 = [1, 2, 3];
var newItem1 = 0;
var expected1 = 4;
// after function is called, arr1 should be:
var arr1Expected = [0, 1, 2, 3];

var arr2 = [];
var newItem2 = "a";
var expected2 = 1;
// after function is called, arr2 should be:
var arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
  for( var i = items.length -1; i >= 0; i--) {
    items[i+1] = items[i];
  }
  items[0] = newItem;
  return items.length;
}

console.log(unshift(arr1, newItem1));
console.log(unshift(arr2, newItem2));

/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

  Do this without using any built-in array methods
*/

var arr1 = [1, 2, 3];
var expected1 = 1;
// after running function arr1 should now be:
var expectedArr1 = [2, 3];

var arr2 = ["a", "b", "c", "d"];
var expected2 = "a";
// after running function arr2 should now be:
var expectedArr2 = ["b", "c", "d"];

var arr3 = [];
var expected3 = undefined;
var expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  var removed = items[0];
  for(var i = 1; i < items.length;i++) {
    items[i-1] = items[i];
  }
  if( items.length != 0) {
      items.length -= i;
  }
  return removed;
}
console.log(shift(arr1));
console.log(shift(arr2));
console.log(shift(arr3));
/* 
  Recreate the built in .slice method

  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)

  What should you do if the provided end index is out of bounds?
*/

var arr1 = ['a', 'b', 'c', 'd', 'e'];
var startIdx1 = 0;
var endIdx1 = 5;
var expected1 = ['a', 'b', 'c', 'd', 'e'];

var arr2 = ['a', 'b', 'c', 'd', 'e'];
var startIdx2 = 0;
var endIdx2 = 1;
var expected2 = ['a'];

var arr3 = ['a', 'b', 'c', 'd', 'e'];
var startIdx3 = 1;
var endIdx3 = 2;
var expected3 = ['b'];

var arr4 = ['a', 'b', 'c', 'd', 'e'];
var startIdx4 = -100;
var endIdx4 = 100;
var expected4 = ['a', 'b', 'c', 'd', 'e'];

var arr5 = ['a', 'b', 'c', 'd', 'e'];
var startIdx5 = 0;
var endIdx5 = 0;
var expected5 = [];

var arr6 = ['a', 'b', 'c', 'd', 'e'];
var startIdx6 = 1;
var endIdx6 = 1;
var expected6 = [];

/**
 * Returns a slice of given arr.
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The slice of the given arr from startIdx inclusive
 *    to endIdx.
 */
function slice(items, startIdx, endIdx) {
    var newarr = []
    if(startIdx < 0){
        startIdx = 0;
    }
    if(endIdx > items.length) {
        endIdx = items.length;
    }
    if(startIdx === endIdx){
        return newarr
    }
    for(var i = startIdx; i < endIdx; i++){
        newarr.push(items[i])
    }
    return newarr
  // code here
}

// Tests
var result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, 'should be', expected1);

var result2 = slice(arr2, startIdx2, endIdx2);
console.log(result2, 'should be', expected2);

var result3 = slice(arr3, startIdx3, endIdx3);
console.log(result3, 'should be', expected3);

var result4 = slice(arr4, startIdx4, endIdx4);
console.log(result4, 'should be', expected4);

var result5 = slice(arr5, startIdx5, endIdx5);
console.log(result5, 'should be', expected5);

var result6 = slice(arr6, startIdx6, endIdx6);
console.log(result6, 'should be', expected6);

/* 
  Array: Concat

  .push allowed: arrName.push(newItem)

  Replicate JavaScript’s concat() which combines two arrays into one NEW array

  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

var arrA1 = ['a', 'b'];
var arrB1 = [1, 2, 3];
var expected1 = ['a', 'b', 1, 2, 3];

var arrA2 = [1, 2, 3];
var arrB2 = ['a', 'b'];
var expected2 = [1, 2, 3, 'a', 'b'];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2) {
    let newarr = items1;
    for (var i = 0; i < items2.length;i++){
        newarr.push(items2[i]);
    }
    return newarr;
}

// Tests
var result1 = concat(arrA1, arrB1);
console.log(result1, 'should be', expected1);

var result2 = concat(arrA2, arrB2);
console.log(result2, 'should be', expected2);
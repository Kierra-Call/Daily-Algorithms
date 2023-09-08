/* 
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
  */

  var arr1 = ["a", "b", "c"];
  var searchItem1 = "c";
  var expected1 = 2;
  
  var arr2 = ["a", "b", "c"];
  var searchItem2 = 5;
  var expected2 = -1;
  
  var arr3 = ["c", "a", "b", "c"];
  var searchItem3 = "c";
  var expected3 = 0;
  
  var arr4 = [];
  var searchItem4 = 5;
  var expected4 = -1;
  
  /**
   * Finds the index from the given array where the given item is found.
   * @param {Array<any>} items An array of any kind of items.
   * @param {any} searchItem The item to find.
   * @returns {number} The index of found item, or -1 if not found.
   */
  function indexOf(items, searchItem) {
    for(var i = 0; i < items.length;i++){
        if (items[i] === searchItem){
            return i;
        }
        else {
            return -1;
        }
    }
  }
  
  // Tests
  var result1 = indexOf(arr1, searchItem1);
  console.log(result1, "should be", expected1);
  
  var result2 = indexOf(arr2, searchItem2);
  console.log(result2, "should be", expected2);
  
  var result3 = indexOf(arr3, searchItem3);
  console.log(result3, "should be", expected3);
  
  var result4 = indexOf(arr4, searchItem4);
  console.log(result4, "should be", expected4);
  
  
  /*****************************************************************/
  
  /* 
  Given an array and an int which represents the position starting from the back,
  return the nth-to-last element.
  
  JS has introduced the .at method for this purpose, but solve this algo w/o it.
  */
  
  // Last element:
  var arr1 = ["a", "b", "c", "d"];
  var idx1 = 1;
  var expected1 = "d";
  
  // Second to last element:
  var arr2 = ["a", "b", "c", "d"];
  var idx2 = 2;
  var expected2 = "c";
  
  var arr3 = ["a", "b", "c", "d"];
  var idx3 = 0;
  var expected3 = null;
  
  var arr4 = ["a", "b", "c", "d"];
  var idx4 = -1;
  var expected4 = null;
  
  var arr5 = [];
  var idx5 = 2;
  var expected5 = null;
  
  /**
   * Retrieves the nth to last indexed item from the given array.
   * @param {Array<any>} items An array of any kind of items.
   * @param {number} nthToLast
   * @returns {any} The item at the nthToLast index or null.
   */
  function nthLast(items, nthToLast) {
    if(items.length === 0){
        return null;
    }
    var newArray = items.reverse();
    for (var i = 0; i < items.length;i++){
        if(!newArray[nthToLast - 1]){
            return null;
        }
        else{
            return newArray[nthToLast - 1];
        }
    }
  }
  
  // Tests
  var result1 = nthLast(arr1, idx1);
  console.log(result1, "should be", expected1);
  
  var result2 = nthLast(arr2, idx2);
  console.log(result2, "should be", expected2);
  
  var result3 = nthLast(arr3, idx3);
  console.log(result3, "should be", expected3);
  
  var result4 = nthLast(arr4, idx4);
  console.log(result4, "should be", expected4);
  
  var result5 = nthLast(arr5, idx5);
  console.log(result5, "should be", expected5);
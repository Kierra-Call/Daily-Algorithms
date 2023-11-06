// for (let someKey in Obj2) {
//     console.log(someKey, obj2[someKey])
// }
// const keyArr = Object.keys(obj2)
// //Returns an array of keys
// const valueArr = Object.values(obj2)
// //Returns an array of values
// const entriesArr = Object.entries(obj2)
// //Returs a 2D array 
// obj1.__proto__ = obj2;
//obj 1 is now inhereting everything that obj2 has

/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  const expected1 = [["name", "Pizza"], ["calories", 9001]];
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 99],
  ];
  
  // bonus - uncomment
  obj1.__proto__ = obj2;
  
  // decide your ALGO roles:
  // 1. DRIVER 🚗
  // 2. PRESENTER 👩‍🏫👨‍🏫
  // 3. NAVIGATOR 🧭
  
function entries(obj) {
  let resultArray = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      resultArray.push([key, obj[key]])
    }
  }
return resultArray;
}
console.log(entries(obj1));
console.log(entries(obj2));

/* Create a function that returns a 2D array that takes in an object
create a result array = []
create a for loop that loops through each key in the object
    push each key with its value, with brackets (subarray), into result array 
return result array*/

//  
//     }
  //   console.log(entries(obj1));
  //   console.log(entries(obj2));
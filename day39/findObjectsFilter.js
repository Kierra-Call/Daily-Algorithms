/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    let resultArray = [];
    for (element of items) {
        let flag = true;
        for (key in searchObj) {
            if (element[key] !== searchObj[key]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            resultArray.push(element)
        }
    }
    return resultArray;


    // return items.filter((item) => {
    //     for (const key in searchObj) {
    //         if (searchObj[key] !== item[key]) {
    //             return false;
    //         }
    //     }
    //     return true;
    // })
    
}



/* Write an function that takes in an object to search for, and an array of objects to search in.
create an empty result array = []
create a for loop that loops through all of the objects in the array 
    create a loop to go through the keys/value pairs of each object 
        create a conditional that would compare the key/values of the loop to the search object
        if a match, then push the whole object to empty result array
return result array at the end
*/




console.log(findObjectsFilter(searchFor1, items))
console.log(findObjectsFilter(searchFor2, items))
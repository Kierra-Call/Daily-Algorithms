/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false
    }
  ];
  
  // Ninja.findByIdAndUpdate(req.params._id, {updateObject})
  
  /*
  here is a multi line
  comment
  */
  
  // JSDOCS
  
  /**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} id
   * @param {Object} updatedValues Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */
  function findByIdAndUpdate(id, updatedValues, collection) { 
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
            for (let [key, value] of Object.entries(updatedValues)) {
                if (collection[i].hasOwnProperty(key))
                collection[i][key] = value
            }
            return collection[i];
        }
    }
    return null;
  }
  
  console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
  console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
  console.log(findByIdAndUpdate(5, {}, students));
  
  
/* Create a function that takes in three things, a student ID, information to change (in an object), and the students array of objects
search through the objects by using a forloop, inspecting each value of the student ID key to see if the student exists.
  if not found, return null
  if desired student is found


  /*--- TEST the following: ---
  Input: 3, { redBeltStatus: true }, students
  Output: {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: true
  }
  */
  
  /*
  Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
  Output: {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false
  }
  */
  
  // Input: 5, {}, students
  // Output: null
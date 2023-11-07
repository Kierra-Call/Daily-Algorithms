/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };

const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};

const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
    const columns = Object.keys(columnValuePairs).join(', ');
    const values = Object.values(columnValuePairs)
      .map(value => (typeof value === 'string' ? `'${value}'` : value))
      .join(', ');
  
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
  }



// function insert(tableName, columnValuePairs) {
//     let output = `INSERT INTO ${tableName} (`
//     let keys = Object.keys(columnValuePairs);
//     let values = Object.values(columnValuePairs);
//     for (let i = 0; i < keys.length;i++) {
//         if (keys[i] === keys[keys.length-1]) {
//             output = output + keys[i]
//         }
//         else {
//             output = output + keys[i] + ", "
//         }
//     }
//     output += ") VALUES ("
//     for (let i = 0; i < values.length;i++) {
//         if (values[i] === values[values.length-1]) {
//             if (typeof values[i] === 'string') {
//                 output = output + `'${values[i]}'` + ");"
//             }
//             if (values[i] === false) {
//                 output = output + "-1" + ");"
//             }
//             if (values[i] === true) {
//                 output = output + "1" + ");"
//             } 
//             if (typeof values[i] === 'number') {
//                 output = output + `${values[i]}` + ");"
//             }
//         }
//         else {
//             if (typeof values[i] === 'string') {
//                 output = output + `'${values[i]}'` + ", "
//             }
//             if (values[i] === false) {
//                 output = output + "-1" + ", "
//             }
//             if (values[i] === true) {
//                 output = output + "1" + ", "
//             } 
//             if (typeof values[i] === 'number') {
//                 output = output + `${values[i]}` + ", "
//             }
//         }
//     }
//     return output;
// }


//1. Create a string to hold output query. start with "INSERT INTO ${tableName}"
//2. Capture keys with object.keys into key array
//3. Capture values with object.values into value array
//4. Create a for loop to iterate through keyArray
  //5. Concatenate keyArray[i]
  //6. if not the last value of the array, concatenate ","
  //7. If the last value of the array, concatenate ") VALUES ("
//8. Create a for loop to iterate through keyArray
  //9. Concatenate valueArray[i]
  //10.if NaN, concate with "", if a number, do not concate with ""
  //11. if not the last value of the array, concatenate ","
  //12. If the last value of the array, concatenate ");"

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));
/* 
  String: Reverse

  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 * 
 * step 1: create an empty string variable
 * step 2: start at the back of the string
 * step 3: make a loop and loop to the front
 * step 4: add it to a new string
 * ** finish the loop 
 * step 5: return the new string
 */
function reverseString(str) {
    let newString = ""
    for (let i = str.length-1;i >= 0;i--) {
        newString += str[i];
    }
    return newString
}

console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));

/*****************************************************************************/

/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with .split first if you need to, then try to do it without
*/

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
let newString = "";
// newString += str[0];
if(str[0] != " ") {
    newString += str[0];
}
for (let i = 1; i < str.length-1;i++) {
    if (str[i] === " " && str[i+1] != " ") {
        newString += str[i+1];
    }
}
return newString.toUpperCase();

}



console.log(acronymize(two_str1));
console.log(acronymize(two_str2));
console.log(acronymize(two_str3));
console.log(acronymize(two_str4));
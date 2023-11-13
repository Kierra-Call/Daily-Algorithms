/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                      V
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";
// RIOT

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
    let freqTable = new Object
    let char = ""
    let temp = ""
    for (let i = 0; i < str.length; i++) {
        if(isNaN(str[i])) {
            if ( char!= "") {
                freqTable[char] += parseInt(temp)
                console.log("char ", char, freqTable[char])
            }
            char=str[i]
            temp = ""
            if (freqTable[char] == undefined){
                freqTable[char]=0
            }
        }
        else {
            temp = temp+str[i]
            console.log("temp", temp)
        }

    }
    return freqTable
}
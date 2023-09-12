function digitize(n) {
    let newString = n.toString();
    let newArray = newString.split("");
    let reverseArray = newArray.reverse();
    let finalArray = [];
    for(var i = 0;i < reverseArray.length;i++){
        finalArray.push(parseInt(reverseArray[i]));
    }
    return finalArray;
}

console.log(digitize("123456"));
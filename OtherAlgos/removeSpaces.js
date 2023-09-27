function noSpace(stringWithSpaces){
    let newArray = stringWithSpaces.split(" ");
    let finalString = ""
    // console.log(newArray);
    for(var i = 0;i < newArray.length;i++){
        finalString = finalString + newArray[i];
    }
return finalString;

}

console.log(noSpace("ndiowan diowaniodnoig fejw f f fwe fewf e wfwef ew f ew f ew f"));
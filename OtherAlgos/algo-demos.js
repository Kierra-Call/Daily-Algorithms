function twoCount(n) {
    var count = 0;
    var currVal = n;
    while (currVal % 2 === 0) {
        currVal /= 2;
        count++;
    }
    return count;
}
console.log(twoCount(24));
console.log(twoCount(17280));
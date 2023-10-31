/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  
  function diagonalDifference(sqrMatrix) {
    let leftSum = 0, rightSum = 0;
    for ( let i = 0; i < sqrMatrix.length; i ++) {
        leftSum += sqrMatrix[i][i]
        rightSum += sqrMatrix[i][sqrMatrix.length-1-i]
    }
    let result = leftSum - rightSum
    return result < 0 ? result*-1 : result
  }

  console.log(diagonalDifference(squareMatrix1));
  console.log(diagonalDifference(squareMatrix2));

      //sum variable for left, default to zero
    //sum variable for right, default to zero
    //for loop for outter array incrementing the index by 1
    //add number to sum at appropriate index for left sum
    //for loop for outter array decreasing index starting from arr.length decrease by 1
    //add number to sum at appropriate index for right sum
    //Outside of for loops calculate the difference
    //Return difference as a positive number
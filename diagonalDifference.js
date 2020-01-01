// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here
    let matrix = arr.length;
    let primarySum = 0;
    let secondarySum = 0;

    for(let i = 0; i < matrix; i++){
        for(let j = 0; j < matrix; j++){
            if( i === j) {
                primarySum += arr[i][j];
            } 
            if(i + j === matrix - 1){
                secondarySum += arr[i][j];
            }
        }
        
    }

    return Math.abs(secondarySum - primarySum);

}

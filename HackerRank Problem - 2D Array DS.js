// HackerRank Problem - 2D Array DS
// Solution by Billy Shelton
// Javascript(Node.js)

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let largestSum = -64;
    let currentSum = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (arr[i][j] != 'undefined' & arr[i][j + 1] != 'undefined' & arr[i][j + 2] != 'undefined' & arr[i + 1][j + 1] != 'undefined' & arr[i + 2][j] != 'undefined' & arr[i + 2][j + 1] != 'undefined' & arr[i + 2][j + 2] != 'undefined') {
                currentSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
                if (currentSum > largestSum) {
                    largestSum = currentSum;
                }
            }
        }
    } return largestSum;
}
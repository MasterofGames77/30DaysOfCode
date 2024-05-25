// 2D Arrays

'use strict';

function main() 
{
    // 2D array input
    let arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    let sumArray = []

    for (let i = 0; i < arr.length - 2; i++) 
      {
        for (let j = 0; j < arr[i].length - 2; j++) 
          {
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] // top row
                      + arr[i + 1][j + 1] // middle element
                      + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2] // bottom row
            sumArray.push(sum)
        }
    }

    // Find the maximum hourglass sum
    console.log(Math.max(...sumArray))
}

main()
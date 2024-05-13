// Arrays

// From the original assignment
// function main() 
// {
//     let n = parseInt(readLine())
//     arr = readLine().split(' ')
//     arr = arr.map(Number)
//     console.log(arr.reverse().join(' '))
// }

// Working Version in Visual Studio Code
function reverseArray(arr) 
{
    const reversedArr = arr.slice().reverse()

    //process.stdout.write("Reversed Array: ")
    reversedArr.forEach(element => process.stdout.write(element + " "))
}

const firstArr = [1, 4, 3, 2]
reverseArray(firstArr)


// Simplified version using the reverse and slice method
// let numbers = [1, 4, 3, 2]
// let reveredNumbers = numbers.slice().reverse()

// console.log(numbers)
// console.log(reveredNumbers)
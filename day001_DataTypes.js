// Data Types

let newInt = 12
let newFloat = 8.0
let newString = "is the best place to learn and practice coding!"

main = (newInt, newFloat, newString) => {
    let i = 4
    let d = 4.0
    let s = "HackerRank "

    // Print the sum of both integer variables on a new line.
    intTotal = i + newInt

    // Print the sum of the double variables on a new line.
    floatTotal = ((d + newFloat).toFixed(1))

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    stringTotal = s + newString

    console.log(intTotal)
    console.log(floatTotal)
    console.log(stringTotal)
    return
}

main(newInt, newFloat, newString)
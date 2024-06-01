// Nested Logic

function processData(input) 
{
    // Split the input into lines
    let inputArr = input.trim().split('\n')

    // Split each line into day, month, and year
    let actual = inputArr[0].split(' ').map(Number)
    let expected = inputArr[1].split(' ').map(Number)

    // Constants for day, month, and year indices
    const day = 0
    const month = 1
    const year = 2

    let fine = 0

    // Calculate the fine based on the given rules
    if (actual[year] > expected[year]) 
        {
        fine = 10000
    } else if (actual[year] === expected[year]) 
        {
        if (actual[month] > expected[month]) 
            {
            fine = 500 * (actual[month] - expected[month])
        } else if (actual[month] === expected[month] && actual[day] > expected[day]) 
            {
            fine = 15 * (actual[day] - expected[day])
        }
    }

    // Output the calculated fine
    console.log(fine)
}

// Example usage:
const input = "31 12 2009\n1 1 2010";
processData(input)
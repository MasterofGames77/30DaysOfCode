// Regular Expressions, Patterns, and Intro to Databases

// Hardcoded input data
const inputString = `
6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com
`.trim().split('\n')

let currentLine = 0

function readLine() 
{
    return inputString[currentLine++]
}

function main() 
{
    const N = parseInt(readLine().trim(), 10)
    let op = []

    for (let NItr = 0; NItr < N; NItr++) 
        {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ')

        const firstName = firstMultipleInput[0]
        const emailID = firstMultipleInput[1]
        
        if (/@gmail\.com/.test(emailID)) op.push(firstName)
    }
    console.log(op.sort().join("\n"))
}

// Run the main function to execute the logic
main()
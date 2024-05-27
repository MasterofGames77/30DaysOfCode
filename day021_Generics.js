'use strict'

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputString = ''
let inputLines = []
let currentLine = 0

rl.on('line', function(inputStdin) 
{
    inputString += inputStdin + '\n'
});

rl.on('close', function() 
{
    inputLines = inputString.split('\n').filter(line => line.trim() !== '')
    inputString = ''
    main()
});

function readLine() 
{
    return inputLines[currentLine++]
}

function main() 
{
    // Parsing the input
    let numberCount = parseInt(readLine())
    let numberArray = []
    for (let i = 0; i < numberCount; i++) {
        numberArray.push(parseInt(readLine()))
    }
    
    let stringCount = parseInt(readLine())
    let stringArray = []
    for (let i = 0; i < stringCount; i++) 
        {
        stringArray.push(readLine())
    }

    // Generic Printer class
    class Printer 
    {
        printArray(a) 
        {
            for (let element of a) 
                {
                console.log(element)
            }
        }
    }

    // Creating instances of Printer for different types and printing arrays
    let numberPrinter = new Printer()
    numberPrinter.printArray(numberArray)
    
    let stringPrinter = new Printer()
    stringPrinter.printArray(stringArray)
}
// Inheritance
// Originally written in TypeScript
// Converted to JavaScript

function main() 
{
    class Calculator 
    {
        divisorSum(n) 
        {
            let sum = 0
            for (let i = 1; i <= n; i++) 
                {
                if (n % i === 0) 
                    {
                    sum += i
                }
            }
            return sum
        }
    }

    // Reading input
    const n = parseInt(6)

    // Instantiating Calculator and calling divisorSum
    const myCalculator = new Calculator()
    const sum = myCalculator.divisorSum(n)

    // Printing the result
    console.log('I implemented: AdvancedArithmetic')
    console.log(sum)
}

console.log(main())
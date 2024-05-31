// Running Time and Complexity

function processData(input) 
{
    // Split input by newline to get each number as a string
    let arr = input.split('\n')
    
    // Loop through each number starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let n = parseInt(arr[i])  // Convert the string to an integer
        if (isPrime(n)) 
            {
            console.log("Prime")
        } 
        else 
        {
            console.log("Not prime")
        }
    }
}

function isPrime(n) 
{
    if (n <= 1) 
        {
        return false
    }
    if (n <= 3) 
        {
        return true
    }
    
    // This is checked so that the middle five numbers can be skipped
    if (n % 2 === 0 || n % 3 === 0) 
        {
        return false
    }
    
    for (let index = 5; index * index <= n; index += 6) 
        {
        if (n % index === 0 || n % (index + 2) === 0) 
            {
            return false
        }
    }
    return true
}

// Sample input
const input = `3
12
5
7`;

// Call the processData function with the sample input
processData(input)
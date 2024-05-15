// Recursions

function factorial(n) 
{
    let result = 1
    for (let i = n; i >= 1; i--) 
        {
        result *= i
    }
    return result
    //console.log(result)
}

console.log(factorial(3))
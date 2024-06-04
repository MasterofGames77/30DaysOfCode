// Bitwise AND

// The function is expected to return an INTEGER.
// The function accepts following parameters:
//  1. INTEGER N
//  2. INTEGER K

function bitwiseAnd(N, K) 
{
    let max = 0
    for (let b = 1; b <= N; b++) 
        {
        for (let a = 1; a < b; a++) 
            {
            let bitAB = a & b
            if (bitAB < K && bitAB > max) 
                {
                max = bitAB
            }
        }
    }
    return max;
}

// Function to handle multiple test cases
function main() 
{
    const input = `3
5 2
8 5
2 2`; // This is the input

    const lines = input.trim().split('\n')
    const T = parseInt(lines[0])

    for (let i = 1; i <= T; i++) 
        {
        const [N, K] = lines[i].split(' ').map(Number)
        console.log(bitwiseAnd(N, K))
    }
}

main()
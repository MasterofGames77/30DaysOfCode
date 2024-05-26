// Sorting

function main() {
    const n = 4
    const a = [4, 3, 1, 2]

    let numSwaps = 0

    // Bubble Sort algorithm
    let swapped
    do {
        swapped = false
        for (let i = 0; i < n - 1; i++) 
            {
            if (a[i] > a[i + 1]) 
                {
                let temp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = temp
                swapped = true
                numSwaps++
            }
        }
    } while (swapped);

    console.log('Array is sorted in ' + numSwaps + ' swaps.')
    console.log('First Element:', a[0])
    console.log('Last Element:', a[n - 1])
}

main()
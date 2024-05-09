// Intro to Conditional Statements

function main() {
    //const N = parseInt(readLine().trim(), 10);
    let N = parseInt(10)
    
    if (N%2 != 0 || (N > 5 && N < 21)) {
        console.log("Weird")
    } else {
        console.log("Not Weird")
    }
}

console.log(main())
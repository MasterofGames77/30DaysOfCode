// Scope
// Converted to JavaScript

class Difference 
{
    constructor(elements) 
    {
        this.elements = elements;
        this.maximumDifference = 0;
    }

    computeDifference() 
    {
        let maxElement = Math.max(...this.elements);
        let minElement = Math.min(...this.elements);
        this.maximumDifference = Math.abs(maxElement - minElement);
    }
}

function main() 
{
    let n = parseInt(3)
    let elements = [1, 2, 5]

    let difference = new Difference(elements);
    difference.computeDifference();

    console.log(difference.maximumDifference);
}

console.log(main())
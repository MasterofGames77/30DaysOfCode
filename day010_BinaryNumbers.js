// Binary Numbers

function main() 
{
    let n = parseInt(10);
    
    let binary = [];

  while (n > 0) 
    {
    binary.push(n % 2)
    n = Math.floor(n / 2)
  }

  binary = binary.reverse()

  let numOfOnes = 0;;
  let max = 0;

  for (let i = 0; i < binary.length; i++) 
    {
    if (binary[i] === 1) 
        {
      numOfOnes += 1;
    } 
    else if (binary[i] === 0) 
        {
      if (numOfOnes > max) max = numOfOnes;
      numOfOnes = 0;
    }
  }

  if (numOfOnes > max) max = numOfOnes

  console.log(max)
}

console.log(main())
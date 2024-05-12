// Review

function processData(input) 
{
    input = input.split('\n')

    for (let i = 0; i < input.length; i++) {
        let slashWord = input[i].split('')

        let evenNum = ''
        let oddNum = ''

        for (let j = 0; j < slashWord.length; j++) 
            {
            if (j % 2 === 0) 
                {
                evenNum = evenNum + slashWord[j]
            } 
            else {
                oddNum = oddNum + slashWord[j]
            }
        }
        console.log(evenNum + ' ' + oddNum)
    }
}

console.log(processData('\nHacker \nRank'))
// Dictionaries & Maps

function processData(input) 
{
    // Enter your code here
    input = input.split('\n')
    let phoneBook = {}

    for (let i = 1; i <= parseInt(input[0]); i++) 
        {
        let contactArray = input[i].split(' ')
        phoneBook[contactArray[0]] = contactArray[1]
    }

    for (let i = (parseInt(input[0]) + 1); i < input.length; i++) 
        {
        if (phoneBook[input[i]]) 
            {
            console.log(input[i] + '=' + phoneBook[input[i]])
        } 
        else 
        {
            console.log('Not found')
        }
    }
}

function main() 
{
    const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

    processData(input)
}

main()
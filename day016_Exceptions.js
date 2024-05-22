// Exceptions - String to Integer

function main() 
{
    let S = 7

    try 
    {
        console.log(eval(S))
    } 
    catch(e) 
    {
        console.log('Bad String')
    }
}

console.log(main())
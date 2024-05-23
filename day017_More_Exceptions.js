// More Exceptions

//Write your code here
function Calculator() 
{
    this.power = function(n, p) 
    {
        try 
        {
            if (n >= 0 && p >= 0) 
                {
                    return Math.pow(n, p)
                } 
                else 
                {
                    throw 'n and p should be non-negative'
                }
            } 
            catch (err) 
            {
                return err
            }
        }
    }
  
function main() 
{
    let myCalculator = new Calculator()
    
    let inputs = [
        [4],     // input 1
        [3, 5],  // input 2
        [2, 4]   // input 3
    ];
    
    let T = inputs.length
    
    for (let i = 0; i < T; i++) 
        {
            try 
            {
                let n = inputs[i][0]
                let p = inputs[i][1]
                let ans = myCalculator.power(n, p)
                console.log(ans)
            } 
            catch (e) 
            {
                console.log(e);
            }
        }
    }

main()
// Queues & Stacks

function Solution() 
{
    // Initialize stack and queue
    this.stack = []
    this.queue = []

    // Use arrow functions to maintain the correct 'this' context
    this.pushCharacter = (ch) => this.stack.push(ch)
    this.popCharacter = () => this.stack.pop()

    this.enqueueCharacter = (ch) => this.queue.push(ch)
    this.dequeueCharacter = () => this.queue.shift()
}

function main() 
{
    // Read the string s
    let s = 'racecar';
    let len = s.length;

    let obj = new Solution();

    // Push/enqueue all the characters of string s to stack
    for (let i = 0; i < len; i++) 
        {
        obj.pushCharacter(s.charAt(i))
        obj.enqueueCharacter(s.charAt(i))
    }

    let isPalindrome = true;
    /*
    Pop the top character from stack
    Dequeue the first character from queue
    Compare both the characters
    */
    for (let i = 0; i < len / 2; i++) 
        {
        if (obj.popCharacter() !== obj.dequeueCharacter()) 
            {
            isPalindrome = false
            break;
        }
    }

    // Finally print whether string s is palindrome or not
    if (isPalindrome) 
        {
        console.log("The word, " + s + ", is a palindrome.")
    } 
    else 
    {
        console.log("The word, " + s + ", is not a palindrome.")
    }
}

// Call the main function to execute the code
main();
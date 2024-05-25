// Linked Lists

// Node class definition
class Node 
{
    constructor(data) 
    {
        this.data = data
        this.next = null
    }
}

// Solution class with insert and display methods
class Solution 
{
    insert(head, data) 
    {
        let node = new Node(data)
        
        if (head === null) 
            {
            head = node
        } 
        else 
        {
            let temp = head
            while (temp.next !== null) 
                {
                temp = temp.next
            }
            temp.next = node
        }
        return head
    }

    display(head) 
    {
        let start = head
        let result = []
        while (start) 
            {
            result.push(start.data)
            start = start.next
        }
        console.log(result.join(' '))
    }
}

// Main function to simulate input and run the program
function main() 
{
    let input = [4, 2, 3, 4, 1]
    let T = input[0] // Number of elements
    let head = null
    let mylist = new Solution()
    
    for (let i = 1; i <= T; i++) 
        {
        let data = input[i]
        head = mylist.insert(head, data)
    }
    mylist.display(head)
}

main()
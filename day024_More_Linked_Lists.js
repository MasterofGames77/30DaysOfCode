// More Linked Lists

class Node 
{
    constructor(data) 
    {
        this.data = data
        this.next = null
    }
}

class Solution 
{
    insert(head, data) 
    {
        let newNode = new Node(data)
        if (head === null) 
            {
            head = newNode
        } 
        else if (head.next === null) 
            {
            head.next = newNode
        } 
        else 
        {
            let current = head
            while (current.next !== null) 
                {
                current = current.next
            }
            current.next = newNode
        }
        return head
    }

    removeDuplicates(head) 
    {
        let current = head
        while (current !== null && current.next !== null) 
            {
            if (current.data === current.next.data) 
                {
                current.next = current.next.next
            } 
            else 
            {
                current = current.next
            }
        }
        return head
    }

    display(head) 
    {
        let current = head
        let result = ''
        while (current !== null) 
            {
            result += current.data + ' '
            current = current.next
        }
        console.log(result.trim())
    }
}

function main() 
{
    let data = [1, 2, 2, 3, 3, 4]
    let head = null
    let mylist = new Solution()
    for (let i = 0; i < data.length; i++) 
        {
        head = mylist.insert(head, data[i])
    }
    head = mylist.removeDuplicates(head)
    mylist.display(head)
}

main()
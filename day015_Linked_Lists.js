// Linked Lists

function Solution()
{

	this.insert = function(head, data)
    {
          //complete this method
          let node = new Node(data)
          
          if (head == null) 
            {
              head = node
          } else 
          {
              let temp = head
              
              while(temp.next != null) 
                {
                  temp = temp.next
              }
              temp.next = node
          }
          return head
    };

	this.display = function(head)
    {
        let start = head
            while(start)
                {
                process.stdout.write(start.data + " ");
                start = start.next
            }
    };
}

function main()
{
    let T = parseInt()
    let head = null
    let mylist = new Solution()
    for(i = 0; i < T; i++)
        {
        let data = parseInt();
        head = mylist.insert(head, data);
    }
    mylist.display(head)
}
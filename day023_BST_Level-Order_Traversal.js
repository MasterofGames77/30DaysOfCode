// Binary Search Tree: Level-Order Traversal

// Node class
function Node(data) 
{
    this.data = data
    this.left = null
    this.right = null
}

// BinarySearchTree class
function BinarySearchTree() 
{
    this.root = null

    this.insert = function(root, data) 
    {
        if (root === null) 
            {
            return new Node(data)
        }
        if (data <= root.data) 
            {
            if (root.left) 
                {
                this.insert(root.left, data);
            } 
            else 
            {
                root.left = new Node(data);
            }
        } 
        else 
        {
            if (root.right) 
                {
                this.insert(root.right, data)
            } 
            else 
            {
                root.right = new Node(data)
            }
        }
        return root
    }

    // Level order traversal function
    this.levelOrder = function(root) 
    {
        if (!root) return

        let queue = [root]

        while (queue.length) {
            let treeNode = queue.shift()
            process.stdout.write(treeNode.data + ' ')

            if (treeNode.left) 
                {
                queue.push(treeNode.left)
            }

            if (treeNode.right) 
                {
                queue.push(treeNode.right)
            }
        }
    }
}

let bst = new BinarySearchTree()
let values = [6, 3, 5, 4, 7, 2, 1]
for (let value of values) 
    {
    bst.root = bst.insert(bst.root, value)
}

// Perform level-order traversal
bst.levelOrder(bst.root)
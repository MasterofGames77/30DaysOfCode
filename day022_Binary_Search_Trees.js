// Binary Search Trees

// Start of function Node
function Node(data) 
{
    this.data = data
    this.left = null
    this.right = null
}

// BinarySearchTree definition
function BinarySearchTree() 
{
    this.root = null

    this.insert = function(root, data) 
    {
        if (root === null) 
            {
            this.root = new Node(data)
            return this.root
        }

        if (data <= root.data) 
            {
            if (root.left) 
                {
                this.insert(root.left, data)
            } else {
                root.left = new Node(data)
            }
        } 
        else 
        {
            if (root.right) 
                {
                this.insert(root.right, data)
            } 
            else {
                root.right = new Node(data)
            }
        }

        return this.root
    }

    // getHeight function
    this.getHeight = function(root) 
    {
        if (root === null) 
            {
            return -1
        }
        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1
    }
}

// Create the BST and insert nodes
const bst = new BinarySearchTree()
const input = [7, 3, 5, 2, 1, 4, 6, 7]
const n = input[0]

for (let i = 1; i <= n; i++) 
    {
    bst.insert(bst.root, input[i])
}

// Output the height of the BST
console.log(bst.getHeight(bst.root))
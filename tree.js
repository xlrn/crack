class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    /*TODO:
    insert(data)
    remove(data)

    Helper functions
    findMinNode()
    getRootNode()
    inorder()
    preorder()
    postorder()
    search()
    */

    insert(data) {
        var newNode = new Node(data);

        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        // if new node is < current node, go left
        if (newNode.data < node.data) {
            // assign newNode as node's left if null
            // check if node.left is equivalent to null
            if (node.left === null) {
                node.left = newNode;
            } else {
                // keep going left
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}
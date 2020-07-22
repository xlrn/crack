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

    insert(data) {
        var newNode = new Node(data);

        // add root if root is null
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
                // else go right
            if (node.right === null) {
                node.right = newNode;
            } else {
                // keep going right
                this.insertNode(node.right, newNode);
            }
        }
    }

    removeNode(node, data) {
        if(node === null) {
            return null;
        }

        else if(data < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if(data > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if(node.left === null) {
                node = node.right;
                return node;
            }

            if(node.right === null) {
                node = node.left;
                return node;
            }
            
            // Delete node with 2 children
            var storage = this.findMinNode(node.right);
            node.data = storage.data;

            node.right = this.removeNode(node.right, storage.data);
            return node;
        }

    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    getRootNode() {
        return this.node;
    }

    search(data, node) {
        if (node === null) {
            return null;
        }

        else if (data < node.data) {
            return this.search(data, node.left);
        }

        else if (data > node.data) {
            return this.search(data, node.right);
        }

        else return node;
    }
}
// heap is tree-like data-structure that allows fast retrieval of the
// smallest element in the collection

class Node {
    constructor(val, priority) {
        this.val = val;
        this.property = priority;
        this.next = null;
    }
}

class priorityQueue {
    constructor() {
        this.first = null;
    }
}


class Queue {

    constructor() {
        this.items = [];
    }    

    enqueue(item) {
        this.items.push(item);
    }

    dequeue(item) {
        if (this.items.length == 0) {
            return "No more items in Queue.";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i]+ " ";
        }
        return str;
    }

}
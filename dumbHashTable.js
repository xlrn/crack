class dumbHashTable {
    // default bucket size is 42
    constructor (size = 42) {
        this.buckets = new ArrayList(size);
        this.size = size;
    }

    hash(key) {
        return key.toString().length % this.size;
    }

    set(key, value) {
        // let has block scope -> cannot be accessed outside of this block of code
        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [ ];
        }

        this.buckets[index].push([key, value]);

        return index;
    }

    get(key) {
        let index = this.hash(key);

        if (!this.buckets[index]) 
            return null;
        
        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1];
            }
        }    

    }
}
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null; // Ponteiro para o próximo nó na lista
    }
}

export class HashMap {
    constructor(capacity, loadFactor) {
        this.capacity = capacity
        this.loadFactor = loadFactor
        this.bucket = new Array(capacity)
        this.size = 0;
    }

    hash(key) {
        let hashCode = 17;

        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * key.charCodeAt(i)) % 16;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        let current = this.bucket[index]

        while (current) {
            if (current.key === key) {
                current.value === value
                return;
            }
            current = current.next;
        }

        //Caso não exista bucket nesse index, cria um.
        const newNode = new Node(key, value);
        newNode.next = this.bucket[index];
        this.bucket[index] = newNode;
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        let current = this.bucket[index];

        if (index < 0 || index >= this.bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }

        while (current) {
            if (current.key === key) {
                return current.value
            }
            current = current.next;
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);
        let current = this.bucket[index];

        if (index < 0 || index >= this.bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }
        while (current) {
            if (current.key === key) {
                return true;
            }

            current = current.next
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.bucket[index];
        let previous = null;

        if (index < 0 || index >= this.bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!current) return false

        while (current) {
            if (current.key === key) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.bucket[index] = current.next
                }
            }
            this.size--;
            return;
        }
        previous = current;
        current = current.next;
    }

    length() {
        return this.size;
    }

    clear() {
        for (let i = 0; i < this.bucket.length; i++) {
            this.bucket[i] = null
        }
        this.size = 0;
    }

    keys() {
        const allKeys = [];

        for (let i = 0; i < this.bucket.length; i++) {
            let current = this.bucket[i];

            while (current) {
                allKeys.push(current.key);
                current = current.next;
            }
        }
        return allKeys;
    }

    values() {
        const allValues = [];

        for (let i = 0; i < this.bucket.length; i++) {
            let current = this.bucket[i];

            while (current) {
                allValues.push(current.value);
                current = current.next;
            }
        }
        return allValues;
    }

    entries() {
        let str = '['
        for (let i = 0; i < this.bucket.length; i++) {
            let current = this.bucket[i]; 

            while (current) { 
               str += `[${current.key}, ${current.value}], `
                current = current.next; 
            }
        }
        let allEntries = str.slice(0, -1) + "]"
        return allEntries ;
    }
}





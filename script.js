export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.tail.nextNode = newNode
            this.tail = newNode
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return

        } else {
            newNode.nextNode = this.head
            this.head = newNode
        }
    }

    size() {
        return this.length;

    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null
        }

        //Começa no primeiro
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
            //Faz loop pela lista de acordo com o index

        }
        return current;
    }

    pop(index) {
        if (this.length === 0) return;
        if (index < 0 || index >= this.length) {
            return null; // Índice inválido
        }

        if (index === 0) {
            const removedNode = this.head
            this.head = this.head.nextNode;
            if (this.head === null) { // Lista ficou vazia
                this.tail = null;
            }
            this.length--;
            return removedNode.value;
        }
        let current = this.head;
        let previous = null;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
        }

        const removedNode = current;
        previous.nextNode = current.nextNode;

        if (current === this.tail) { // Removeu o último elemento
            this.tail = previous;
        }

        this.length--;
        return removedNode.value;

    }

   
    contains(value) {
        let current = this.head
        while (current !== null) {
            if (current.value == value) {
                return true
                // current = current.nextNode
            }
        }
        return false;
    }

    find(value) {

        let current = this.head;
        let index = 0;
    
        while (current !== null) {
            if (current.value === value) {
                return index; // Retorna o índice se o valor for encontrado
            }
            current = current.nextNode; // Avança para o próximo nó
            index++;
        }
    
        return -1; // Retorna -1 se o valor não for encontrado (após percorrer a lista inteira)
    }

    toString(){
    let str = "";
    let current = this.head
        while (current ) {
            str += `(${current.value}) -> `
            current = current.nextNode
        }
        return str + null;
    }

    remove(index){
        if (this.length === 0) return;
        if (index < 0 || index >= this.length) {
            return null; // Índice inválido
        }

        if (index === 0) {
            const removedNode = this.head
            this.head = this.head.nextNode;
            if (this.head === null) { // Lista ficou vazia
                this.tail = null;
            }
            this.length--;
            return removedNode.value;
        }
        
        let current = this.head;
        let previous = null;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
        }
console.log(this.tail);

        const removedNode = current;
        previous.nextNode = current.nextNode;
        
        if (current === this.tail) { // Removeu o último elemento
            this.tail = previous; 
        }
    
        
        return removedNode.value
        
    
    }


}

export class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

}


const list = new LinkedList();


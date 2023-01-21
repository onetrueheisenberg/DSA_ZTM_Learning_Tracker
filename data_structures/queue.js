class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    peek() {
        return this.head?.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if ( this.length === 0 ) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    dequeue() {
        let temp = this.head;
        if ( this.length === 1 ) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        temp.next = null;
        this.length--;
        return temp;
    }
}

const queue = new Queue(100);
console.log(JSON.stringify(queue));

queue.enqueue(200);
console.log(JSON.stringify(queue));

queue.dequeue();
console.log(JSON.stringify(queue));

console.log(queue.peek());
console.log(JSON.stringify(queue));

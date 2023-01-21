class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    peek() {
        return this.top?.value;
    }

    pop() {
        if ( this.length === 0 ) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    push(value) {
        const newNode = new Node(value);
        if ( this.length !== 0 ) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.length++;
    }
}

const stack = new Stack(100);
console.log(JSON.stringify(stack));

stack.push(200);
console.log(JSON.stringify(stack));

stack.pop();
console.log(JSON.stringify(stack));

console.log(stack.peek());
console.log(JSON.stringify(stack));

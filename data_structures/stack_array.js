class Stack {
    constructor(value) {
        this.values = [value];
    }

    peek() {
        return this.values[this.values.length - 1];
    }

    pop() {
        if ( this.values.length === 0 ) return undefined;
        return this.values.pop();
    }

    push(value) {
        this.values.push(value);
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

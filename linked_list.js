class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if ( index < 0 || index > this.length ) return false;
        if ( index === 0 ) return this.prepend(value);
        if ( index === this.length ) return this.append(value);
        const newNode = new Node(value);
        const insertedNode = this.get(index - 1);
        newNode.next = insertedNode.next;
        insertedNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if ( index === 0 ) {
            const temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
            if ( this.length === 0 ) {
                this.tail = null;
            }
            return temp;
        }
        const preRemoveNode = this.get(index - 1);
        const removeableNode = this.get(index);
        if ( !preRemoveNode || !removeableNode ) return false;
        preRemoveNode.next = removeableNode.next;
        removeableNode.next = null;
        this.length--;
        return removeableNode;
    }

    get(index) {
        if ( index < 0 || index > this.length ) return undefined;
        if ( index === this.length - 1) return this.tail;
        let counter = 0;
        let currentNode = this.head;
        while ( counter < index ) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    print() {
        const array = [];
        let temp = this.head;
        while ( temp ) {
            array.push(temp.value);
            temp = temp.next;
        }
        return array;
    }

    reverse() {
        if ( this.length < 2 ) return this;
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while ( second ) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

const linkedList = new LinkedList(100);
console.log(linkedList.print());

linkedList.append(200);
console.log(linkedList.print());

linkedList.prepend(300);
console.log(linkedList.print());

linkedList.insert(1, 400);
console.log(linkedList.print());

linkedList.remove(2);
console.log(linkedList.print());

linkedList.reverse();
console.log(linkedList.print());

const linkedListNull = new LinkedList(3);
linkedListNull.remove(0);
console.log(linkedListNull.print());

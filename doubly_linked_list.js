class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        if ( this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if ( this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    insert(index, value) {
        if ( index === 0 ) return this.prepend(value);
        if ( index === this.length ) return this.append(value);
        if ( index < 0 || index > this.length ) return undefined;
        let prev = this.get(index - 1);
        if ( !prev ) return false;
        const newNode = new Node(value);
        newNode.next = prev.next;
        prev.next = newNode;
        newNode.prev = prev;
        this.length++;
        return true;
    }

    remove(index) {
        if ( index < 0 || index >= this.length ) return false;
        const pre = this.get(index - 1);
        const temp = this.get(index);
        if ( !temp ) return false;
        if ( this.length === 1 ) {
            temp.next = null;
            temp.prev = null;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        pre.next = temp.next;
        temp.prev = null;
        this.length--;
        return temp;
    }

    get(index) {
        if ( index === 0 ) return this.head;
        if ( index === this.length - 1 ) return this.tail;
        if ( index < 0 || index > this.length ) return undefined;
        let temp;
        let counter;
        if ( index < this.length / 2) {
            temp = this.head;
            counter = 0;
            while ( counter < index ) {
                temp = temp.next;
                counter++;
            }
        } else {
            temp = this.tail;
            counter = this.length - 1;
            while ( counter > index ) {
                temp = temp.prev;
                counter--;
            }
        }
        return temp;
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
            second.prev = first.prev;
            first.next = second.next;
            first.prev = second;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head = first;
        return this;
    }
}

const doublyLinkedList = new DoublyLinkedList(100);
console.log(doublyLinkedList.print());

doublyLinkedList.append(200);
console.log(doublyLinkedList.print());

doublyLinkedList.prepend(300);
console.log(doublyLinkedList.print());

doublyLinkedList.insert(1, 400);
console.log(doublyLinkedList.print());

doublyLinkedList.remove(2);
console.log(doublyLinkedList.print());

doublyLinkedList.reverse();
console.log(doublyLinkedList.print());

const doublyLinkedListNull = new DoublyLinkedList(3);
doublyLinkedListNull.remove(0);
console.log(doublyLinkedListNull.print());

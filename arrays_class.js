class ArrayClass {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.get(index);
        if ( item === null || item === undefined ) return false;
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for ( let i = index; i < this.length - 1; i++ ) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new ArrayClass();
newArray.push(0);
newArray.push(1);
newArray.push(2);
newArray.pop();
newArray.delete(0);

console.log(JSON.stringify(newArray));

console.log(newArray.get(1));
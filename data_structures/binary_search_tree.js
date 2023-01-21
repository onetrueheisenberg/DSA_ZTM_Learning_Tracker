class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if ( !this.root ) {
            this.root = newNode;
            return this;
        } else {
            let temp = this.root;
            while ( true ) {
                if ( value < temp.value ) {
                    if ( !temp.left ) {
                        temp.left = newNode;
                        return this;
                    } else {
                        temp = temp.left;
                    }
                } else if ( value > temp.value ) {
                    if ( !temp.right ) {
                        temp.right = newNode;
                        return this;
                    } else {
                        temp = temp.right;
                    }
                } else {
                    return undefined; // disallow duplicates
                }
            }
        }
    }

    remove(value) {
        if ( ! this.root ) return false;
        let temp = this.root;
        let parentNode = null;
        while ( temp ) {
            if ( value < temp.value ) {
                parentNode = temp;
                temp = temp.left;
            } else if ( value > temp.value ) {
                parentNode = temp;
                temp = temp.right;
            } else if ( value === temp.value ) {
                if ( temp.right === null ) {
                    parentNode.left = temp.left;
                    temp.left = null;
                    return temp;
                } else if ( temp.right.left === null ) {
                    if ( parentNode === null ) {
                        this.root = temp.left;
                    }
                    parentNode.left.right = temp.right;
                }
            }
        }
        return false;
    }

    lookup(value) {
        if ( !this.root ) return undefined;
        let temp = this.root;
        while ( temp ) {
            if ( value === temp.value ) {
                return temp;
            } else if ( value < temp.value ) {
                temp = temp.left;
            } else if ( value > temp.value ) {
                temp = temp.right;
            }
        }
        return undefined;
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(9);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(20);
binarySearchTree.insert(170);
binarySearchTree.insert(15);
binarySearchTree.insert(1);
console.log(JSON.stringify(traverse(binarySearchTree.root)));

console.log(binarySearchTree.lookup(9));
console.log(binarySearchTree.lookup(170));
console.log(binarySearchTree.lookup(6));
console.log(binarySearchTree.lookup(425));

binarySearchTree.remove(170);
console.log(JSON.stringify(traverse(binarySearchTree.root)));

binarySearchTree.remove(9);
console.log(JSON.stringify(traverse(binarySearchTree.root)));


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


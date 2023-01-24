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

    breadthFirstSearch() {
        let currentNode = this.root;
        const list = [];
        const queueOfNodes = [];
        queueOfNodes.push(currentNode);
        while ( queueOfNodes.length > 0 ) {
            currentNode = queueOfNodes.shift();
            list.push(currentNode.value);
            if ( currentNode.left ) {
                queueOfNodes.push(currentNode.left);
            }
            if ( currentNode.right ) {
                queueOfNodes.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchRecursive(queue, list) {
        if ( queue.length === 0 ) return list;
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if ( currentNode.left ) {
            queue.push(currentNode.left);
        }
        if ( currentNode.right ) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }

    depthFirstSearchInOrder(node, list) {
        if ( node.left ) this.depthFirstSearchInOrder(node.left, list);
        list.push(node.value);
        if ( node.right ) this.depthFirstSearchInOrder(node.right, list);
        return list;
    }

    depthFirstSearchPreOrder(node, list) {
        list.push(node.value);
        if ( node.left ) this.depthFirstSearchPreOrder(node.left, list);
        if ( node.right ) this.depthFirstSearchPreOrder(node.right, list);
        return list;
    }

    depthFirstSearchPostOrder(node, list) {
        if ( node.left ) this.depthFirstSearchPostOrder(node.left, list);
        if ( node.right ) this.depthFirstSearchPostOrder(node.right, list);
        list.push(node.value);
        return list;
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

// binarySearchTree.remove(170);
// console.log(JSON.stringify(traverse(binarySearchTree.root)));

// binarySearchTree.remove(9);
// console.log(JSON.stringify(traverse(binarySearchTree.root)));

console.log(JSON.stringify(binarySearchTree.breadthFirstSearch()));
console.log(JSON.stringify(binarySearchTree.breadthFirstSearchRecursive([binarySearchTree.root], [])));
console.log(JSON.stringify(binarySearchTree.depthFirstSearchInOrder(binarySearchTree.root, [])));
console.log(JSON.stringify(binarySearchTree.depthFirstSearchPreOrder(binarySearchTree.root, [])));
console.log(JSON.stringify(binarySearchTree.depthFirstSearchPostOrder(binarySearchTree.root, [])));


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

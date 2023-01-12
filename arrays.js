const arr = ['a', 'e', 'i', 'o', 'u', 'y'];

arr.push('b'); // O(1)

arr.pop(); // O(1)

arr.unshift('b'); // O(n)

arr.splice(2, 0, 'k'); // O(n)

console.log(arr);
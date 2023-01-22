// const array = [1, 400, 600, 32, 54, 76, 983, 4392, 3304, 1293213, 1329321, 91238, 12938];
const array = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(array) {
    let temp;
    for ( let i = 1; i < array.length; i++ ) {
        temp = array[i];
        for ( var j = i - 1; array[j] > temp && j > -1; j-- ) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
        console.log(array);
    }
    return array;
}

insertionSort(array);
// console.log(insertionSort(array));
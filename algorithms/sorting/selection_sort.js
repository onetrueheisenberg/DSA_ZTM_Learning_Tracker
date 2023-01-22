const array = [1, 400, 600, 32, 54, 76, 983, 4392, 3304, 1293213, 1329321, 91238, 12938];

function selectionSort(array) {
    for ( let i = 0; i < array.length; i++ ) {
        let currentMin = array[i];
        let currentMinIndex = i;
        for ( let j = i + 1; j < array.length; j++ ) {
            if ( array[j] < currentMin ) {
                currentMin = array[j];
                currentMinIndex = j;
            }
            console.log(array);
        }
        if ( i !== currentMinIndex ) {
            swap(array, i, currentMinIndex);
        }
    }
    return array;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

selectionSort(array);
// console.log(selectionSort(array));
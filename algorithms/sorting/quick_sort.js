const array = [1, 400, 600, 32, 54, 76, 983, 4392, 3304, 1293213, 1329321, 91238, 12938];

function quickSort (array, left = 0, right = array.length - 1) {
    if ( left < right ) {
        let pivot = findPivot( array, left, right );

        quickSort(array, left, pivot - 1);
        quickSort(array, pivot + 1, right);
    }
    return array;
}

function findPivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for ( let i = pivotIndex + 1; i <= endIndex; i++ ) {
        if ( array[i] < array[pivotIndex] ) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex);
    console.log(swapIndex);
    console.log(array);
    return swapIndex
}

function swap( array, left, right ) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

quickSort(array);
// console.log(quickSort(array));
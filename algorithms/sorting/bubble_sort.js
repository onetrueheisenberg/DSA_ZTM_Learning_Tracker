const array = [1, 400, 600, 32, 54, 76, 983, 4392, 3304, 1293213, 1329321, 91238, 12938];

function bubbleSort(array) {
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = 0; j < array.length; j++ ) {
            if ( array[j] >  array[j+1] ) {
                const temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
            console.log(array);
        }
    }
    return array;
}
bubbleSort(array);
console.log(bubbleSort(array));
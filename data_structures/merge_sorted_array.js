function mergeSortedArrays(array1, array2) {
    if ( array1.length === 0 ) return array2;
    if ( array2.length === 0 ) return array1;
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while ( i < array1.length && j < array2.length ) {
        if ( array1[i] < array2[j] ) {
            mergedArray.push(array1[i]);
            i++;
        } else if ( array2[j] < array1[i] ) {
            mergedArray.push(array2[j]);
            j++;
        } else {
            mergedArray.push(array1[i]);
            mergedArray.push(array2[j]);
            i++;
            j++;
        }
    }
    while ( i < array1.length ) {
        mergedArray.push(array1[i]);
        i++;
    }
    while ( j < array2.length ) {
        mergedArray.push(array2[j]);
        j++;
    }
    return mergedArray;
}

console.log(JSON.stringify(mergeSortedArrays([0, 45, 600,2932, 5056], [1, 46, 64, 464, 646, 3032])));
// [0, 1, 45, 46, 64, 464, 600, 646, 2932, 3032, 5056]
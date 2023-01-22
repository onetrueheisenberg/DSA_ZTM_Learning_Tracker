const array = [1, 400, 600, 32, 54, 76, 983, 4392, 3304, 1293213, 1329321, 91238, 12938];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2), array.length);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    const array = [];
    let i = 0;
    let j = 0;
    while ( i < left.length && j < right.length ) {
        if ( left[i] < right[j]) {
            array.push(left[i]);
            i++;
        } else if ( right[j] < left[i] ) {
            array.push(right[j]);
            j++;
        } else {
            array.push(left[i]);
            array.push(right[j]);
            i++;
            j++;
        }
    }
    while ( i < left.length ) {
        array.push(left[i]);
        i++;
    }
    while ( j < right.length ) {
        array.push(right[j]);
        j++;
    }
    return array;
}

console.log(mergeSort(array));
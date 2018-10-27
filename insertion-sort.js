function insertionSort(arr) {
    let count = arr.length;

    if (arr.length === 0) {
        return [];
    }

    for (let i = 1; i < count; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

// console.log('insertion', insertionSort([2, 0, -3, 1, 10]));
// console.log('insertion', insertionSort([-3, 20, 10]));
// console.log('insertion', insertionSort([]));
// console.log('insertion', insertionSort([3, 2, 10, -100, -20, -1, 0, 1]));

function selectionSort(arr) {
    let count = arr.length;

    if (arr.length === 0) {
        return [];
    }

    for (let i = 0; i < count - 1; i++) {
        let min = i;

        for (let j = i + 1; j < count; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }

    return arr;
}

console.log('selection', selectionSort([-3, 2, 0, 1, 10]));
console.log('selection', selectionSort([-3, 20, 10]));
console.log('selection', selectionSort([]));
console.log('selection', selectionSort([3, 2, 10, -100, -20, -1, 0, 1]));

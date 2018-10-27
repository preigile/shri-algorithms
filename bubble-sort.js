function bubbleSort(arr) {
    let max;
    let count = arr.length - 1;

    if (arr.length === 0) {
        return [];
    }

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count - i; j++) {
            if (arr[j] > arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }

    return arr;
}

// console.log('bubble', bubbleSort([-3, 2, 10]));
// console.log('bubble', bubbleSort([-3, 20, 10]));
// console.log('bubble', bubbleSort([]));
// console.log('bubble', bubbleSort([3, 2, 10, -100, -20, -1, 0, 1]));

function reverseList (node) {
    let previous = null;

    while (node) {
        let tmp = node.next;
        node.next = previous;
        previous = node;
        node = tmp;
    }

    return previous;
}

const list = {
    head: {
        value: 12,
        next: {
            value: 99,
            next: {
                value: 37,
                next: null
            }
        }
    }
};

// console.log('reverse list', reverseList(list.head));

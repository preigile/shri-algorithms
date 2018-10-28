function treeTraversal (tree) {
    if (!tree.val) {
        return;
    }

    console.log(tree.val);

    if (tree.left) {
        treeTraversal(tree.left);
    }

    if (tree.right) {
        treeTraversal(tree.right);
    }
}

let tree = {
    val: 'rt',
    left: {
        val: 'rt-l',
        left: {
            val: 'rt-l-l',
            left: {
                val: 'rt-l-l-l',
                left: {
                    val: 'rt-l-l-l-l'
                }
            },
            right: {
                val: 'rt-l-l-r'
            }
        },
        right: {
            val: 'rt-l-r',
            left: {
                val: 'rt-l-r-l'
            },
            right: {
                val: 'rt-l-r-r'
            }
        }
    },
    right: {
        val: 'rt-r',
        left: {
            val: 'rt-r-l',
            left: {
                val: 'rt-r-l-l'
            },
            right: {
                val: 'rt-r-l-r'
            }
        },
        right: {
            val: 'rt-r-r',
            left: {
                val: 'rt-r-r-l'
            },
            right: {
                val: 'rt-r-r-r'
            }
        }
    }
};

treeTraversal(tree);

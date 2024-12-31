
// Week 4 Problems

// Lowest Common Ancestor of BST
function lowestCommonAncestor(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
}

// Kth Smallest Element in a BST
function kthSmallest(root, k) {
    let stack = [];
    let current = root;
    let count = 0;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        count++;
        if (count === k) return current.val;
        current = current.right;
    }
}

// Word Search
function exist(board, word) {
    function dfs(board, word, i, j, index) {
        if (index === word.length) return true;
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[index]) return false;
        let temp = board[i][j];
        board[i][j] = '#';
        let found = dfs(board, word, i + 1, j, index + 1) ||
                    dfs(board, word, i - 1, j, index + 1) ||
                    dfs(board, word, i, j + 1, index + 1) ||
                    dfs(board, word, i, j - 1, index + 1);
        board[i][j] = temp;
        return found;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

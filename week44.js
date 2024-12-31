// 1. Subtree of Another Tree
function isSubtree(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(s, t) {
    if (!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}
/* 
1. Base case: if root is null, return false
2. Check if current root is the same as subRoot
3. Recursively check left and right subtrees
4. Helper function isSameTree to verify identical structure
*/

// 2. Lowest Common Ancestor of BST
function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    return root;
}
/* 
1. Recursively traverse the tree
2. Move to left subtree if both p and q are smaller
3. Move to right subtree if both p and q are larger
4. Return root if it’s the LCA (values diverge)
*/

// 3. Implement Trie (Prefix Tree)
class Trie {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }

    insert(word) {
        let node = this;
        for (let char of word) {
            if (!node.children[char]) node.children[char] = new Trie();
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}
/* 
1. Insert: Traverse or create nodes for each character, mark end of word
2. Search: Traverse nodes, return false if character not found, check end of word
3. startsWith: Traverse nodes, return false if character not found
*/

// 4. Add and Search Word
class WordDictionary {
    constructor() {
        this.children = {};
    }

    addWord(word) {
        let node = this;
        for (let char of word) {
            if (!node.children[char]) node.children[char] = new WordDictionary();
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word, node = this) {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === ".") {
                for (let child in node.children) {
                    if (node.children[child].search(word.slice(i + 1))) return true;
                }
                return false;
            } else {
                if (!node.children[char]) return false;
                node = node.children[char];
            }
        }
        return node.isEndOfWord === true;
    }
}
/* 
1. addWord: Traverse or create nodes for each character, mark end of word
2. search: Traverse nodes, handle '.' as wildcard, recurse on children
*/

// 5. Kth Smallest Element in a BST
function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;
        inorder(node.left);
        count++;
        if (count === k) result = node.val;
        inorder(node.right);
    }

    inorder(root);
    return result;
}
/* 
1. Use in-order traversal to access nodes in ascending order
2. Increment count during traversal
3. Return node value when count reaches k
*/

// 6. Merge K Sorted Lists
function mergeKLists(lists) {
    if (!lists.length) return null;
    
    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedList.push(mergeTwoLists(l1, l2));
        }
        lists = mergedList;
    }
    return lists[0];
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return dummy.next;
}
/* 
1. Merge pairs of lists iteratively until one list remains
2. Helper function mergeTwoLists to merge two sorted lists
*/

// 7. Find Median from Data Stream
class MedianFinder {
    constructor() {
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }

    addNum(num) {
        if (this.maxHeap.size() === 0 || num < this.maxHeap.peek()) {
            this.maxHeap.add(num);
        } else {
            this.minHeap.add(num);
        }

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.add(this.maxHeap.poll());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.add(this.minHeap.poll());
        }
    }

    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        }
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
}
/* 
1. Use max-heap and min-heap to maintain balance
2. Add number to appropriate heap
3. Balance heaps if needed, find median by checking sizes
*/

// 8. Insert Interval
function insert(intervals, newInterval) {
    let result = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}
/* 
1. Add non-overlapping intervals before newInterval
2. Merge overlapping intervals with newInterval
3. Add remaining intervals after merging
*/

// 9. Longest Consecutive Sequence
function longestConsecutive(nums) {
    let set = new Set(nums);
    let maxStreak = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }
            maxStreak = Math.max(maxStreak, streak);
        }
    }
    return maxStreak;
}
/* 
1. Use set to remove duplicates and allow O(1) checks
2. For each number, start streak if it’s the beginning of a sequence
3. Track and update max streak length
*/

// 10. Word Search II
function findWords(board, words) {
    let result = [];
    let trie = buildTrie(words);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, trie, result);
        }
    }
    return result;
}

function buildTrie(words) {
    let root = {};
    for (let word of words) {
        let node = root;
        for (let char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.word = word;
    }
    return root;
}

function dfs(board, i, j, node, result) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
    let char = board[i][j];
    if (!node[char]) return;

    node = node[char];
    if (node.word) {
        result.push(node.word);
        node.word = null;
    }

    board[i][j] = '#';
    dfs(board, i + 1, j, node, result);
    dfs(board, i - 1, j, node, result);
    dfs(board, i, j + 1, node, result);
    dfs(board, i, j - 1, node, result);
    board[i][j] = char;
}
/* 
1. Build Trie for words
2. Perform DFS on each cell in board
3. Mark visited cells, add word to result if found
4. Restore cells and continue search
*/

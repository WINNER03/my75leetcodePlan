
// 12. Detect Cycle in a Linked List
function hasCycle(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

function hasCycle (head) {
    let slow = head;
    let fast = head ;
    while (fast !== null && fast.next!==null) {
        slow = slow.next;
        fast = fast.next.next ;
        if (slow === fast ){
            return true ;
        }

    }
}

// Steps:
// 1. Initialize two pointers: slow and fast.
// 2. Move slow one step and fast two steps.
// 3. If they meet, return true (cycle detected).
// 4. If fast reaches the end, return false.

// 13. Validate Binary Search Tree
function isValidBST(root, min = null, max = null) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}


function isValidBST (root,min=null,max=null) {
    if (!root) return true;
    if ((min!==null && root.val <= min )|| (max!==null && root.val >= max ))  return false;
    return isValidBST (root.left ,min,root.val)  && isValidBST (root.right , root.val,val);

}

// Steps:
// 1. Use recursion to traverse the tree.
// 2. Ensure each node's value is within valid range.
// 3. Recursively validate the left and right subtrees.
// 4. Return true if all nodes are valid; else, false.

// 14. Lowest Common Ancestor of BST
function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}

// Steps:
// 1. Recursively traverse the tree.
// 2. If both p and q are smaller, move to the left subtree.
// 3. If both are larger, move to the right subtree.
// 4. If p and q are on either side, return the current node (LCA).

// 15. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

function lengthOfLongestSubstring (s) {

    let set = new Set () ;

   
}

// Steps:
// 1. Initialize a set and two pointers for the sliding window.
// 2. Expand the window by moving right.
// 3. Shrink the window by moving left when a duplicate is found.
// 4. Track the maximum length of the substring without duplicates.

// 16. Word Search II
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
        node.word = null;  // Avoid duplicates
    }
    
    board[i][j] = '#';
    dfs(board, i + 1, j, node, result);
    dfs(board, i - 1, j, node, result);
    dfs(board, i, j + 1, node, result);
    dfs(board, i, j - 1, node, result);
    board[i][j] = char;
}

// Steps:
// 1. Build a Trie for the words.
// 2. Perform DFS from each cell in the grid.
// 3. If a valid word is found, add it to the result.
// 4. Mark cells as visited and backtrack after exploring all neighbors.

// 17. Number of Islands
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
    
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}


function numIslands (grid ) {
    if (!grid ||  grid.length === 0) return 0 ;
    let count = 0 ;
    for (let i = 0 ;i<grid.length ;i++) {

    }
}
// Steps:
// 1. Iterate through the grid and check for land ('1').
// 2. Perform DFS to mark all connected lands as visited ('0').
// 3. For each DFS, increment the island count.
// 4. Return the total number of islands.

// 18. Spiral Order
function spiralOrder(matrix) {
    let result = [];
    if (matrix.length === 0) return result;
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;
        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
            left++;
        }
    }
    
    return result;
}

// Steps:
// 1. Define the boundaries: top, bottom, left, and right.
// 2. Traverse the matrix in a spiral order (right, down, left, up).
// 3. Adjust the boundaries after each traversal.
// 4. Repeat until all elements are processed and return the result.

// 19. Lowest Common Ancestor of BST (Duplicate)
function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}

// Steps:
// 1. Traverse the tree to find where p and q diverge.
// 2. If both are smaller than the root, move left.
// 3. If both are larger than the root, move right.
// 4. If they diverge, the current node is the LCA.

// 20. Valid Parentheses (Repeated)
function isValid(s) {
    let stack = [];
    let map = { '(': ')', '{': '}', '[': ']' };
    
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map[last] !== char) return false;
        }
    }
    
    return stack.length === 0;
}

// Steps:
// 1. Use a stack to match parentheses.
// 2. Push opening parentheses to the stack.
// 3. Pop from the stack when a closing parenthesis is found, and check for a match.
// 4. If the stack is empty at the end, return true; else, false.




// 21. Palindromic Substrings
function countSubstrings(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        count += countPalindromesAroundCenter(s, i, i);   // Odd length
        count += countPalindromesAroundCenter(s, i, i + 1); // Even length
    }
    
    return count;
}

function countPalindromesAroundCenter(s, left, right) {
    let count = 0;
    
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    
    return count;
}

// Steps:
// 1. Loop through each character in the string.
// 2. Check for both odd and even length palindromes around each character.
// 3. Expand outward while the characters are equal (forming a palindrome).
// 4. Keep a running count of all palindromic substrings.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 1. Flip Binary Tree
function invertTree(root) {
    if (!root) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

// 2. Validate Binary Search Tree
function isValidBST(root, min = null, max = null) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// 3. Non-overlapping Intervals
function eraseOverlapIntervals(intervals) {
    if (!intervals.length) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1], count = 1;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= end) {
            end = intervals[i][1];
            count++;
        }
    }
    return intervals.length - count;
}

// 4. Construct Binary Tree from Preorder and Inorder Traversal
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
}

// 5. Top K Frequent Elements
function topKFrequent(nums, k) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => entry[0]);
}

// 6. Clone Graph
function cloneGraph(node) {
    if (!node) return null;
    const map = new Map();
    const dfs = (n) => {
        if (!map.has(n.val)) {
            map.set(n.val, new Node(n.val));
            map.get(n.val).neighbors = n.neighbors.map(neighbor => dfs(neighbor));
        }
        return map.get(n.val);
    };
    return dfs(node);
}

// 7. Course Schedule
function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        inDegree[a]++;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        const curr = queue.shift();
        count++;
        for (const next of graph[curr]) {
            if (--inDegree[next] === 0) queue.push(next);
        }
    }
    return count === numCourses;
}

// 8. Serialize and Deserialize Binary Tree
function serialize(root) {
    const res = [];
    const dfs = (node) => {
        if (!node) {
            res.push('null');
            return;
        }
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res.join(',');
}

function deserialize(data) {
    const nodes = data.split(',');
    let index = 0;
    const dfs = () => {
        if (nodes[index] === 'null') {
            index++;
            return null;
        }
        const node = new TreeNode(Number(nodes[index++]));
        node.left = dfs();
        node.right = dfs();
        return node;
    };
    return dfs();
}

// 9. Binary Tree Maximum Path Sum
function maxPathSum(root) {
    let maxSum = -Infinity;
    const dfs = (node) => {
        if (!node) return 0;
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        maxSum = Math.max(maxSum, left + right + node.val);
        return Math.max(left, right) + node.val;
    };
    dfs(root);
    return maxSum;
}




// 10. Path Sum
function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}


function hasPathSum ( root , targetSAUM) {
    if (!root ) return false ;
    if (root.left && ! root.right ) return root.val === targetSum;
    return hasPathSum (root.left , targetSum- root.val) || hasPathSum ( root.right , targetSum - root.val) ;
}
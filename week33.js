// 1. Flip Binary Tree
function invertTree(root) {
    if (!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}
/* 
1. Base case: if root is null, return null
2. Recursively invert left and right subtrees
3. Swap left and right children of the current node
4. Return the root with inverted children
*/

// 2. Validate Binary Search Tree
function isValidBST(root, min = null, max = null) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}
/* 
1. Use recursion to traverse tree
2. Set valid range for each node (min and max)
3. Ensure node values are within valid range, return false if not
4. Recursively validate left and right subtrees
*/

// 3. Non-overlapping Intervals
function eraseOverlapIntervals(intervals) {
    if (!intervals.length) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1];
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            count++;
        } else {
            end = intervals[i][1];
        }
    }
    return count;
}
/* 
1. Sort intervals by end time
2. Initialize count for overlapping intervals
3. Iterate through intervals, check overlap
4. If overlap, increment count, otherwise update end
5. Return count of intervals removed
*/

// 4. Construct Binary Tree from Preorder and Inorder Traversal
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
}
/* 
1. Base case: if preorder or inorder is empty, return null
2. Identify root from first element of preorder
3. Split inorder around root to define left and right subtrees
4. Recursively build left and right subtrees
*/

// 5. Top K Frequent Elements
function topKFrequent(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
}
/* 
1. Initialize map to count frequency of elements
2. Convert map to array of [element, frequency] pairs
3. Sort by frequency in descending order
4. Take the first k elements and return them
*/

// 6. Clone Graph
function cloneGraph(node, map = new Map()) {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    let clone = new Node(node.val);
    map.set(node, clone);
    for (let neighbor of node.neighbors) {
        clone.neighbors.push(cloneGraph(neighbor, map));
    }
    return clone;
}
/* 
1. Base case: if node is null, return null
2. Check if node has already been cloned, return if so
3. Create clone node and store in map
4. Recursively clone each neighbor
5. Return clone node with cloned neighbors
*/

// 7. Course Schedule
function canFinish(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let inDegree = Array(numCourses).fill(0);
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    let count = 0;
    while (queue.length) {
        let course = queue.shift();
        count++;
        for (let nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) queue.push(nextCourse);
        }
    }
    return count === numCourses;
}
/* 
1. Build graph and in-degree array for each course
2. Initialize queue with courses having in-degree 0
3. Process each course, decrement in-degree for connected courses
4. Check if all courses can be taken by comparing count to numCourses
*/

// 8. Serialize and Deserialize Binary Tree
function serialize(root) {
    let result = [];
    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result.join(",");
}

function deserialize(data) {
    let nodes = data.split(",");
    function build() {
        let val = nodes.shift();
        if (val === "null") return null;
        let node = new TreeNode(Number(val));
        node.left = build();
        node.right = build();
        return node;
    }
    return build();
}
/* 
1. Serialize: Use DFS to convert tree to string, replace null nodes with "null"
2. Deserialize: Split string, use recursion to rebuild tree
3. Parse node values, create nodes, link left and right
4. Return root node
*/

// 9. Binary Tree Maximum Path Sum
function maxPathSum(root) {
    let maxSum = -Infinity;
    function dfs(node) {
        if (!node) return 0;
        let leftMax = Math.max(dfs(node.left), 0);
        let rightMax = Math.max(dfs(node.right), 0);
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);
        return node.val + Math.max(leftMax, rightMax);
    }
    dfs(root);
    return maxSum;
}
/* 
1. Initialize maxSum to -Infinity
2. Use DFS to calculate max path sum from each node
3. Consider max of left and right paths, ignore negative paths
4. Update maxSum with current path sum and return maxSum
*/

// 10. Path Sum
function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
/* 
1. Base case: if root is null, return false
2. Check if leaf node matches targetSum
3. Recur for left and right subtrees with adjusted targetSum
4. Return true if any path matches targetSum
*/

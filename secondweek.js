// 1. Reverse a Linked List
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;  // New head of the reversed list
}
/* 
Steps:
1. Initialize three pointers: `prev` (null), `current` (head), and `nextNode` (null).
2. Traverse the list: change the `next` pointer of each node to point to the previous node.
3. After the traversal, return the `prev` pointer as the new head of the reversed list.
*/
// Time Complexity: O(n)  
// Space Complexity: O(1)


// 2. Detect a Cycle in a Linked List
function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;  // Cycle detected
        }
    }
    return false;  // No cycle
}
/* 
Steps:
1. Use two pointers: `slow` (moves one step) and `fast` (moves two steps).
2. Traverse the list: if `slow` and `fast` meet, it indicates a cycle.
3. If `fast` reaches the end, the list has no cycle.
*/
// Time Complexity: O(n)  
// Space Complexity: O(1)


// 3. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let seenChars = new Set();
    for (let end = 0; end < s.length; end++) {
        while (seenChars.has(s[end])) {
            seenChars.delete(s[start]);
            start++;
        }
        seenChars.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}
/* 
Steps:
1. Use two pointers, `start` and `end`, to define a sliding window.
2. Use a set to store characters in the current window.
3. If a character repeats, move the `start` pointer to the right until the substring is unique again.
4. Track the maximum length of the unique substring.
*/
// Time Complexity: O(n)  
// Space Complexity: O(min(n, m)) where `m` is the size of the character set.


// 4. Find Smallest Window Containing Substring
function minWindow(s, t) {
    let map = new Map();
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    let start = 0, end = 0, minLength = Infinity, minStart = 0, count = t.length;
    
    while (end < s.length) {
        if (map.has(s[end])) {
            if (map.get(s[end]) > 0) count--;
            map.set(s[end], map.get(s[end]) - 1);
        }
        
        while (count === 0) {
            if (end - start + 1 < minLength) {
                minLength = end - start + 1;
                minStart = start;
            }
            if (map.has(s[start])) {
                if (map.get(s[start]) === 0) count++;
                map.set(s[start], map.get(s[start]) + 1);
            }
            start++;
        }
        end++;
    }
    
    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}
/* 
Steps:
1. Use two pointers, `start` and `end`, to define a sliding window.
2. Track the frequency of characters in the substring with a map.
3. Expand the window by moving `end`, and shrink it by moving `start` when all characters are included.
4. Track the minimum window length.
*/
// Time Complexity: O(n)  
// Space Complexity: O(m), where `m` is the number of unique characters in the substring.


// 5. Valid Binary Search Tree (BST)
function isValidBST(root) {
    function helper(node, lower = -Infinity, upper = Infinity) {
        if (!node) return true;
        if (node.val <= lower || node.val >= upper) return false;
        return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
    }
    return helper(root);
}
/* 
Steps:
1. Use recursion to check the validity of the left and right subtrees for each node.
2. Ensure that the current node's value lies within the valid range (`lower`, `upper`).
3. Return `true` if all nodes follow the BST property.
*/
// Time Complexity: O(n)  
// Space Complexity: O(h), where `h` is the height of the tree.


// 6. Find Maximum Path Sum in Binary Tree
function maxPathSum(root) {
    let maxSum = -Infinity;

    function helper(node) {
        if (!node) return 0;
        let left = Math.max(helper(node.left), 0);  // Ignore negative paths
        let right = Math.max(helper(node.right), 0);  // Ignore negative paths
        maxSum = Math.max(maxSum, left + right + node.val);  // Update max sum
        return Math.max(left, right) + node.val;  // Return max path sum including the current node
    }

    helper(root);
    return maxSum;
}
/* 
Steps:
1. Perform a depth-first search (DFS) to calculate the maximum path sum from any node.
2. For each node, calculate the maximum sum from the left and right children.
3. Track the global maximum path sum.
*/
// Time Complexity: O(n)  
// Space Complexity: O(h), where `h` is the height of the tree.


// 7. Find Kth Smallest Element in BST
function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        count++;
        if (count === k) result = node.val;
        inorder(node.right);
    }

    inorder(root);
    return result;
}
/* 
Steps:
1. Perform an in-order traversal of the BST.
2. Keep count of the nodes visited and return the k-th node during the traversal.
*/
// Time Complexity: O(n)  
// Space Complexity: O(h), where `h` is the height of the tree.


// 8. Insert and Merge Intervals
function insertInterval(intervals, newInterval) {
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
Steps:
1. Iterate through intervals and add any intervals that don’t overlap with the new interval.
2. Merge overlapping intervals by adjusting the start and end points.
3. Return the list of merged intervals.
*/
// Time Complexity: O(n)  
// Space Complexity: O(n)


// 9. Longest Increasing Subsequence
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    let dp = new Array(nums.length).fill(1);  // Initialize dp array with 1 for each element
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);  // The longest increasing subsequence length
}
/* 
Steps:
1. Initialize a `dp` array where `dp[i]` holds the length of the longest increasing subsequence up to index `i`.
2. Compare each element with previous elements and update the `dp` value.
3. Return the maximum value in the `dp` array.
*/
// Time Complexity: O(n^2)  
// Space Complexity: O(n)




/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // Step 1: Create a graph where each airport points to its destinations.
    const graph = {};
    
    // Step 2: Build the graph.
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    // Step 3: Sort the destinations for each airport lexicographically.
    for (let airport in graph) {
        graph[airport].sort();
    }

    // Step 4: Initialize the result array to store the final itinerary.
    const result = [];
    
    // Step 5: Define a DFS function to perform depth-first search.
    const dfs = (airport) => {
        // While there are destinations from the current airport
        while (graph[airport] && graph[airport].length > 0) {
            // Always take the lexicographically smallest destination (front of the array)
            const nextAirport = graph[airport].shift();
            dfs(nextAirport); // Recursively visit the next airport
        }
        // Add the airport to the result in reverse order
        result.push(airport);
    };

    // Step 6: Start DFS from "JFK" (as per the problem statement).
    dfs("JFK");

    // Step 7: Reverse the result to get the correct order and return it.
    return result.reverse();
};

// Example Usage:
const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets)); // Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]


// Graph Construction: 
// Build a hashmap (graph) where each airport points to a list of its destinations (e.g., JFK → [ATL, SFO]).

// Sort Destinations: 
// Sort each airport's destinations alphabetically for lexicographical order.

// DFS Traversal:
// - Start from "JFK."
// - Explore destinations recursively, removing each visited destination.
// - Add airports to the result after all destinations are explored.

// Reverse Result: 
// Reverse the collected result to get the correct itinerary order.

// This approach ensures all tickets are used once and the itinerary follows the required order.

// ========================
// Week 1: Arrays and Hashing
// ========================

// 1. Two Sum
/*
Problem: Find indices of two numbers in an array that add up to a target.
Approach: Use a hash map to store and lookup complements.
Time: O(n), Space: O(n)
*/
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) return [map.get(complement), i];
      map.set(nums[i], i);
    }
    return [];
  }

  function twosun (nums) {

  }




  // Remove Duplicate 

  function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    arr.sort((a, b) => a - b);

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    arr.length = i + 1;

    return arr;
}
 function remvoveduplicate ( array) {

  if (array.length === 0) return 0;
  let i = 0 ;
  array.sort((a,b)=> a-b);

  for (let j = 1 ; j < array.length; j++  ) {
    if (array[i]!==array[j]){
      i++;
      array[i] = array[j] ;
    }


  }
   array.length = i+1 
   return array ;

}
const nums = [4, 2, 2, 3, 1, 4, 5];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums);

  
  // 2. Contains Duplicate
  /*
  Problem: Check if an array contains any duplicates.
  Approach: Use a Set to track unique elements.
  Time: O(n), Space: O(n)
  */
  function containsDuplicate(nums) {
    let set = new Set();
    for (let num of nums) {
      if (set.has(num)) return true;
      set.add(num);
    }
    return false;
  }
    function contain (arr) {

      let set = new Set ;
      for (let num of arr) {
        if (Set.has(num )) {
          return true 
        }
        Set.add(num)
      }
    }
  // 3. Maximize Stock Profits (Best Time to Buy and Sell Stock)
  /*
  Problem: Find the maximum profit by buying and selling once.
  Approach: Track minimum price and maximum profit.
  Time: O(n), Space: O(1)
  */
  function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (let price of prices) {
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
  }
  
  // 4. Check if Anagram (Valid Anagram)
  /*
  Problem: Check if two strings are anagrams.
  Approach: Use character frequency hash maps.
  Time: O(n), Space: O(1) (limited by character set)
  */
  function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let char of s) count[char] = (count[char] || 0) + 1;
    for (let char of t) {
      if (!count[char]) return false;
      count[char]--;
    }
    return true;
  }


  function anagram (s,t) {


    if (t.length !== s.length) return false;

    let count = {} ;
    for (let char of s) count [char] = (count[char] || 0) +1 ;
    for (let char of t) {
      if (!count[char]) return false ;
      count[char] --;
    }
    return true ;


  }
  
  // 5. Balanced Parentheses (Valid Parentheses)
  /*
  Problem: Check if parentheses are balanced.
  Approach: Use a stack to manage pairs.
  Time: O(n), Space: O(n)
  */
  function isValidParentheses(s) {
    let stack = [], map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
      if (!map[char]) stack.push(char);
      else if (stack.pop() !== map[char]) return false;
    }
    return stack.length === 0;
  }

function validparenthese (s) {

  let stack =[] ; map = {')':'(','}' :'{' ,']':'['};
  for (let char of s){
    if (!map[char]){
      stack.push (char) ;

    } else if (stack.pop ()!==map [char]) return false ;
  } 
   return stack.length===0;
}


  //The function uses a stack to track opening brackets.
  // For each closing bracket, it checks if it matches the last opened one.
  // If there's a mismatch or unbalanced brackets, it returns false.
  // If the stack is empty at the end, the string is valid.
  
  // ========================
  // Week 2: Linked Lists and Strings
  // ========================
  
  
  // 1. Reverse a Linked List
  /*
  Problem: Reverse a singly linked list.
  Approach: Use iterative pointers to reverse links.
  Time: O(n), Space: O(1)
  */

  function reverseList(head) {
    let prev = null, current = head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  
  // 2. Detect a Cycle in a Linked List
  /*
  Problem: Detect if a cycle exists in a linked list.
  Approach: Use slow and fast pointer (Floyd's Algorithm).
  Time: O(n), Space: O(1)
  */
  function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
  
  // 3. Remove Node From End of List (Remove Nth Node From End)
  /*
  Problem: Remove nth node from the end of a linked list.
  Approach: Use two-pointer technique.
  Time: O(n), Space: O(1)
  */
  function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head), first = dummy, second = dummy;

    for (let i = 0; i <= n; i++) first = first.next;
    while (first) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
  }
  
  // ========================
  // Week 3: Trees and Graphs
  // ========================
  
  // Definition for TreeNode
  
  // 1. Invert a Binary Tree
  /*
  Problem: Flip a binary tree.
  Approach: Recursively swap left and right subtrees.
  Time: O(n), Space: O(h) where h is height.
  */
  function invertTree(root) {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
  }
  
  // 2. Validate Binary Search Tree
  /*
  Problem: Check if a binary tree is a valid BST.
  Approach: Use recursion with bounds.
  Time: O(n), Space: O(h)
  */
  function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
  }


    function isvalidBST (root, min= -infinity ,max = infinity) {
      if (!root) return true ;
      if (root.val <=min || root.val>= max) return false ;
      return isvalidBST (root.left,min,root.val) && (root.right , max,root.val)

    }
  // 3. Check for Path Sum in Tree
  /*
  Problem: Check if any root-to-leaf path equals targetSum.
  Approach: Use depth-first traversal.
  Time: O(n), Space: O(h)
  */
  function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right && targetSum === root.val) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  }
  
  // ========================
  // Week 4: Advanced Tree and Graph Algorithms
  // ========================
  
  // 1. Check if Tree Contains Subtree
  /*
  Problem: Check if one tree is a subtree of another.
  Approach: Recursive comparison.
  Time: O(m * n), Space: O(h)
  */
  function isSubtree(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
  function isSameTree(p, q) {
    if (!p || !q) return p === q;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  
  // 2. Find Lowest Common Ancestor in BST
  /*
  Problem: Find LCA of two nodes in BST.
  Approach: Use BST properties.
  Time: O(h), Space: O(1)
  */
  function lowestCommonAncestor(root, p, q) {
    while (root) {
      if (p.val < root.val && q.val < root.val) root = root.left;
      else if (p.val > root.val && q.val > root.val) root = root.right;
      else return root;
    }
  }
    function lowestancestor (root,p,q) {
      while (root) {
        if(p.val < root.val && q.val < root.val ) root =root.left ;
        else if (p.val>root.val && q.val > root.val) root = root.right ;
      else return root ;     
     }
    }


  // ========================
  // Week 5: Dynamic Programming
  // ========================
  
  // 1. Count Ways to Climb Stairs
  /*
  Problem: Count ways to climb n stairs.
  Approach: Fibonacci sequence using DP.
  Time: O(n), Space: O(1)
  */

  function climbStairs(n) { 

    if (n <= 1) return 1; // Base case: 1 way to climb 0 or 1 step
    let a = 1, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

  
  // 2. Maximize House Robbery Amount
  /*
  Problem: Maximize the sum of non-adjacent houses.
  Approach: Dynamic programming.
  Time: O(n), Space: O(1)
  */
  function rob(nums) {
    let prev1 = 0, prev2 = 0;
    for (let num of nums) {
      let temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
    }
    return prev1;
  }
  




  function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}



  // Initialize left to 0, maxLength to 0, and a Set to store characters in the window.
// Expand the window by iterating right through the string.
// If a duplicate character is found, move the left pointer to shrink the window until the duplicate is removed.
// Track the maximum length of the window at each step.
// Time Complexity: O(n), as each character is added and removed from the Set at most once.
// Space Complexity: O(k), where k is the size of the character set (at most 26 for lowercase English letters).




function mergeIntervals(intervals) {
    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize result array
    const merged = [];

    // Step 3: Iterate through intervals
    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];

        // If merged is empty or no overlap, add the current interval
        if (!last || last[1] < current[0]) {
            merged.push(current);
        } else {
            // Overlap detected, merge intervals by updating the end time
            last[1] = Math.max(last[1], current[1]);
        }
    }

    // Step 4: Return merged intervals
    return merged;
}

// Example Usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const result = mergeIntervals(intervals);
console.log(result); // Output: [[1, 6], [8, 10], [15, 18]]






function isPalindrome(head) {
    if (!head || !head.next) return true;

    // Find the middle of the linked list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare the first half and the reversed second half
    let left = head, right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
}

/**
 * Time Complexity: O(n)
 * - Finding the middle: O(n)
 * - Reversing the second half: O(n)
 * - Comparing the halves: O(n)
 * 
 * Space Complexity: O(1)
 * - No extra space is used beyond a few pointers.
 */

// 1. Reverse a Linked List
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// 2. Detect Cycle in a Linked List
function hasCycle(head) {
    if (head == null || head.next == null) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

// 3. Container With Most Water
function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}

// 4. Find Minimum in Rotated Sorted Array
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}

// 5. Longest Repeating Character Replacement
function characterReplacement(s, k) {
    let maxLen = 0;
    let maxCount = 0;
    let count = {};
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxCount = Math.max(maxCount, count[s[right]]);
        
        while (right - left + 1 - maxCount > k) {
            count[s[left]]--;
            left++;
        }

        
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// 6. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    let map = new Map();
    
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// 7. Number of Islands
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    let count = 0;
    
    function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    
    return count;
}

// 8. Remove Nth Node From End Of List
function removeNthFromEnd(head, n) {
    let dummy = { next: head };
    let fast = dummy;
    let slow = dummy;
    
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }
    
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return dummy.next;
}

// 9. Palindromic Substrings
function countSubstrings(s) {
    let count = 0;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }
    
    return count;
}

// 10. Pacific Atlantic Water Flow
function pacificAtlantic(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    let pacific = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
    let atlantic = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
    
    function dfs(matrix, i, j, visited, prevHeight) {
        if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || visited[i][j] || matrix[i][j] < prevHeight) return;
        visited[i][j] = true;
        dfs(matrix, i + 1, j, visited, matrix[i][j]);
        dfs(matrix, i - 1, j, visited, matrix[i][j]);
        dfs(matrix, i, j + 1, visited, matrix[i][j]);
        dfs(matrix, i, j - 1, visited, matrix[i][j]);
    }
    
    for (let i = 0; i < matrix.length; i++) {
        dfs(matrix, i, 0, pacific, matrix[i][0]);
        dfs(matrix, i, matrix[0].length - 1, atlantic, matrix[i][matrix[0].length - 1]);
    }
    
    for (let j = 0; j < matrix[0].length; j++) {
        dfs(matrix, 0, j, pacific, matrix[0][j]);
        dfs(matrix, matrix.length - 1, j, atlantic, matrix[matrix.length - 1][j]);
    }
    
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }
    
    return result;
}

// 11. Minimum Window Substring
function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";
    
    let countT = {};
    for (let char of t) {
        countT[char] = (countT[char] || 0) + 1;
    }
    
    let required = Object.keys(countT).length;
    let left = 0;
    let right = 0;
    let formed = 0;
    let windowCounts = {};
    let ans = [-1, 0, 0];
    
    while (right < s.length) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;
        
        if (countT[char] && windowCounts[char] === countT[char]) {
            formed++;
        }
        
        while (left <= right && formed === required) {
            char = s[left];
            
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }
            
            windowCounts[char]--;
            if (countT[char] && windowCounts[char] < countT[char]) {
                formed--;
            }
            left++;
        }
        
        right++;
    }
    
    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}

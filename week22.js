// 1. Reverse a Linked List
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}


function reverse (head) {

    let prev = null; 
    let current = head ;
    while (current !== null) {
        let Nextemp = current.next ;
        current.next = prev ;
        prev = current  ;
        current = Nextemp ;

    }

    return prev 
}

// time 
/* 
1. Initialize prev as null
2. Traverse the list
3. Reverse pointers by setting current.next to prev
4. Move prev and current forward
5. Return prev as the new head
*/

// 2. Detect Cycle in a Linked List
function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}


function hascycly (head ) {
    var slow= head ;
    var fast = head ;

    while (fast !== null&& fast.next !== null) {
        slow = slow.next
        fast = fast.next.next ;
        if (slow === fast){
            return true ;

        }
        return fasle ;

    }
}


/* 
1. Initialize slow and fast pointers
2. Move slow by one step, fast by two steps
3. If slow meets fast, return true (cycle detected)
4. If fast reaches end, return false (no cycle)
*/



// 3. Container With Most Water
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
}



/* 
1. Initialize left and right pointers
2. Calculate area, update maxArea if larger
3. Move pointer of smaller height inward
4. Return maxArea after loop ends
*/

// 4. Find Minimum in Rotated Sorted Array
function findMin(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}
/* 
1. Use binary search on rotated array
2. Adjust left and right pointers based on mid value
3. Narrow down until left meets right
4. Return the element at left
*/

// 5. Longest Repeating Character Replacement
function characterReplacement(s, k) {
    let count = {};
    let maxCount = 0, maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxCount = Math.max(maxCount, count[s[right]]);
        while (right - left + 1 - maxCount > k) {
            count[s[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
/* 
1. Initialize count map, left pointer, maxCount, and maxLength
2. Expand window to include new characters and update maxCount
3. Shrink window if replacements exceed k
4. Update maxLength and return result
*/

// 6. Longest Substring Without Repeating Characters
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
/* 
1. Initialize set, left pointer, and maxLength
2. Expand window by moving right pointer
3. Remove left characters if duplicate found
4. Update maxLength and return result
*/

// 7. Number of Islands
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
/* 
1. Traverse grid, if land ('1') found, start DFS
2. Use DFS to mark all connected lands as visited ('0')
3. Increment island count and return total
*/

// 8. Remove Nth Node From End of List
function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy, fast = dummy;
    for (let i = 0; i <= n; i++) fast = fast.next;
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
/* 
1. Initialize dummy node, set slow and fast to dummy
2. Move fast pointer n+1 steps ahead
3. Move slow and fast until fast reaches end
4. Remove nth node by adjusting slow's next pointer
*/

// 9. Palindromic Substrings
function countSubstrings(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += countPalindromesAroundCenter(s, i, i);    // Odd length
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
/* 
1. Check for palindromes around each character (odd and even)
2. Expand outward from center to find palindromes
3. Count palindromic substrings and return total count
*/

// 10. Pacific Atlantic Water Flow
function pacificAtlantic(heights) {
    let rows = heights.length, cols = heights[0].length;
    let pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    let atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        dfs(heights, i, 0, pacific);
        dfs(heights, i, cols - 1, atlantic);
    }
    for (let j = 0; j < cols; j++) {
        dfs(heights, 0, j, pacific);
        dfs(heights, rows - 1, j, atlantic);
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }
    return result;
}
function dfs(heights, i, j, ocean) {
    ocean[i][j] = true;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let [di, dj] of directions) {
        let newRow = i + di, newCol = j + dj;
        if (newRow >= 0 && newRow < heights.length && newCol >= 0 && newCol < heights[0].length &&
            !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[i][j]) {
            dfs(heights, newRow, newCol, ocean);
        }
    }
}
/* 
1. Initialize matrices for Pacific and Atlantic
2. Perform DFS from edges connected to oceans
3. Record cells reachable from both oceans
4. Return result of all such cells
*/

// 11. Minimum Window Substring
function minWindow(s, t) {
    let map = {};
    for (let char of t) {
        map[char] = (map[char] || 0) + 1;
    }
    let left = 0, right = 0, count = t.length, minLength = Infinity, start = 0;
    while (right < s.length) {
        if (map[s[right]] > 0) count--;
        map[s[right]]--;
        right++;
        while (count === 0) {
            if (right - left < minLength) {
                minLength = right - left;
                start = left;
            }
            map[s[left]]++;
            if (map[s[left]] > 0) count++;
            left++;
        }
    }
    return minLength === Infinity ? "" : s.substring(start, start + minLength);
}
/* 
1. Initialize frequency map for t
2. Expand window to include all characters of t
3. Contract window from left when all characters match
4. Track minimum length and return substring
*/





// Initialize `occurrences` as an empty Map to store element counts.
// For each element in `arr`:
//   - If the element exists in `occurrences`, increment its count.
//   - If it doesn't exist, add it to `occurrences` with a count of 1.
// Iterate through `occurrences` Map:
//   - For each element, print its count in the format: "element occurs count time(s)".



function countOccurrences(arr) {
    const occurrences = new Map();
  
    arr.forEach(element => {
      occurrences.set(element, (occurrences.get(element) || 0) + 1);
    });
  
    occurrences.forEach((count, element) => {
      console.log(`${element} occurs ${count} time(s)`);
    });
  }
  
  const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  countOccurrences(array);
  
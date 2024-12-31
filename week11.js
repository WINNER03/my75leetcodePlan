// 1. Two Sum
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
  function twosun ( array, target ) {
        var map = new map () ;
        for (let i =0 ; i < array.lenght ;i++) {

            var complement = target - array[i] ;
            if (map.has (complement)) {
                map.get(complement , i)
             }
            map.set(array[i] ,i) ; 
            }
            return [] ;
        
        
    }


// Time Complexity: O(n)
// Space Complexity: O(n)
/* 
1. Initialize map
2. Iterate through array
3. Calculate complement
4. Check map for complement
5. Return indices if found, or add current number to map
*/

function containsDuplicate(nums) {
    const seen = new Set(); // Create a set to store unique elements.

    for (let num of nums) { // Iterate through each number in the array.
        if (seen.has(num)) { // If the number is already in the set, a duplicate is found.
            return true;
        }
        seen.add(num); // Otherwise, add the number to the set.
    }

    return false; // If no duplicates are found, return false.
}


function contaidupliacet (nums) {

    let set = new Set ;
    for (let num of nums) {
        if (set.has(num)) {
            return true
        }
        set.add (num)
    }
}






/* 
1. Initialize set
2. Iterate through array
3. Check if set has number
4. Add number to set
5. Return result
*/

// 3. Best Time to Buy and Sell Stock
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
function maxprofit  (prices) {

}

/* 
1. Initialize minPrice and maxProfit
2. Iterate through prices
3. Update minPrice
4. Calculate and update maxProfit
5. Return maxProfit
*/

// 4. Valid Anagram


function isanagram2(s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    // Count characters in the first string
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character counts using the second string
    for (let char of t) {
        if (!charCount[char]) {
            return false; // If char is missing or count goes negative, not an anagram
        }
        charCount[char]--;
    }

    // Check if all counts are zero
    return Object.values(charCount).every(count => count === 0);
}




/* 
1. Check lengths
2. Initialize count array
3. Increment/decrement counts
4. Check if all counts are zero
*/

// 5. Valid Parentheses
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





/* 
1. Initialize stack
2. Iterate through s
3. Match parentheses
4. Return true if stack is empty
*/

// 6. Maximum Subarray
function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
  function maxsum (nums) {

    let currensum = [0];
    let maxsum = [0] ;
    for (let i=1; i<nums.length;i++) {
        currensum = Math.max (nums[i],currensum+nums[i]);
        maxsum = Math.max (currensum, maxsum) ;


    }
    return maxsum;

  }
/* 
1. Initialize currentSum and maxSum
2. Iterate through nums
3. Update currentSum and maxSum
4. Return maxSum
*/

// 7. Product of Array Except Self
function productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1);
    let prefix = 1, suffix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}



/* 
Steps:
1. Initialize result array, prefix, and suffix to store intermediate products.
2. Perform the prefix pass: calculate cumulative product of all elements to the left of the current index.
3. Perform the suffix pass: calculate cumulative product of all elements to the right of the current index and combine with the prefix product.
4. Return the result array containing the product of all elements except the current index.
*/


// 8. 3Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
        
    }
    return result;
}

function Threesun (nums) {
    nums.sort((a,b) => a-b) ;

    let result =[ ];
for (let i=0 ; i<nums.lenght-2 ;i++){

    let left = i+1; right = nums.lenght-1;

    while (left<right ) {
        if (nums[i]=== nums[i+1])  continue ;
        let sum = nums[i ] + nums[left] + nums[right];
        if (sum===0 ){
            result.push ([nums[i],nums[left] , nums [right]]);

            while (nums[left] === nums[left+1 ]) left ++;
            while (nums [right ]=== nums[right+1]) right -- ;
            left++;
            right--;

        } else if (sum <0){
            left++;
        } else {
            right--;

        }
    }

 }

    return result ; 
}

/* 
1. Sort array
2. Iterate with two pointers
3. Skip duplicates
4. Store triplets
5. Return result
*/

// 9. Merge Intervals

function mergeiterval (intervals ) {
    intervals.sort((a,b) , a-b);
    var merge =  [];

    for (let i =0 ;i<intervals.length;i++) {
        var current = intervals[i];
        var last = merge [ intervals.length-1 ];

        if (!last|| last [1] < current[0]) {
            merge.push (current)
        }  else {
            last[1 ] = Math.max (last[1],current [1]);
        }


    }
    return merge ;


}
/* 
1. Sort intervals
2. Initialize result
3. Iterate through intervals
4. Merge or add interval
5. Return result
*/

// 10. Group Anagrams
function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}


  function groupAnagrams (strs) {

    let map = new Map ;

    for (let str of strs) {

        let key = str.split('').sort('').join('') ;
        if(!map.has(key)) {
            map.set (key,[]);
        }
        map.get (key).push(str);
         
    }

    return Array.from (map.values ());
  }

  function shuffle(nums, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
}
   function shuffle ( nums,n) {

    let result = [];
    for (let i =0; i< n; i++) {
        result.push (nums[i]);
        result.push (nums [i+n]);

    }
   }

// Example usage:
let nums = [2, 5, 1, 3, 4, 7]; // 2n elements
let n = 3;                      // n is the number of elements in each half
console.log(shuffle(nums, n));  // Output: [2, 3, 5, 4, 1, 7]

//time complexity O(N * M log M) 
// space complexity  O(N * M).
/*For each string, create a key by sorting its characters.
Use this sorted key to group all strings that share the same sorted form.
Return all these groups as an array of arrays /

/* 
1. Initialize map
2. Sort each string to create key
3. Add string to map under sorted key
4. Return grouped anagrams
*/



// 1. Spiral Order

// Solution Steps
// 1. Initialize variables: result array, and top, bottom, left, right pointers for boundaries.
// 2. Traverse matrix in spiral order: left to right, top to bottom, right to left, bottom to top.
// 3. Repeat until all elements are visited.

//11
function spiralOrder(matrix) {
    // Check for empty or invalid matrix
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const result = [];
    let top = 0;                    // Top boundary
    let bottom = matrix.length - 1; // Bottom boundary
    let left = 0;                   // Left boundary
    let right = matrix[0].length - 1; // Right boundary

    // Traverse the matrix in a spiral order
    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top boundary
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++; // Move the top boundary down

        // Traverse from top to bottom along the right boundary
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--; // Move the right boundary left

        // Check if there are rows remaining before traversing bottom to left
        if (top <= bottom) {
            // Traverse from right to left along the bottom boundary
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--; // Move the bottom boundary up
        }

        // Check if there are columns remaining before traversing left to top
        if (left <= right) {
            // Traverse from bottom to top along the left boundary
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++; // Move the left boundary right
        }
    }

    return result;
}




function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;


    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }


    return result;
}


  // Time Complexity: O(m * n)
  // Space Complexity: O(m * n)
  
  // Example Usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


  
  // 12. Number of Islands
  
  // Solution Steps
  // 1. Initialize island count to 0.
  // 2. Iterate through grid cells. If cell is '1', perform DFS to mark connected land as '0'.
  // 3. Increment count for each new island found.
  
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
    // Base case: stop if out of bounds or not on land ('1')
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') return;
    
    // Mark the current cell as visited by changing it from '1' to '0'
    grid[i][j] = '0';
    
    // Recursively call dfs for adjacent cells (up, down, left, right)
    dfs(grid, i + 1, j); // Down
    dfs(grid, i - 1, j); // Up
    dfs(grid, i, j + 1); // Right
    dfs(grid, i, j - 1); // Left


    
    
  }



  // Time Complexity: O(M * N)
  // Space Complexity: O(M * N) due to DFS call stack
  
  // Example Usage
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  console.log(numIslands(grid)); // Output: 1
  






  // Initialize `rows` and `cols` for grid dimensions.
// Define `dfs` function for depth-first search:
//   - Return `true` if `i` equals `word.length` (word found).
//   - Return `false` if out of bounds or `board[r][c]` doesn’t match `word[i]`.
// Temporarily mark `board[r][c]` as visited with `#`.
// Recursively call `dfs` in four directions to find the next character.
// Reset `board[r][c]` to its original character to backtrack.
// For each cell in `board`, if `dfs` returns `true`, return `true`.
// Return `false` if the word isn’t found in any path.


function exist(board, word) {
    // Get the number of rows and columns in the board
    const rows = board.length;
    const cols = board[0].length;

    // Define a helper function for Depth-First Search (DFS)
    function dfs(r, c, i) {
        // Base case: If we have matched all characters in the word, return true
        if (i === word.length) return true;

        // If the current position is out of bounds or the character doesn't match, return false
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[i]) {
            return false;
        }

        // Temporarily mark the current cell as visited
        const temp = board[r][c];
        board[r][c] = '#';

        // Recursively check all four directions (down, up, right, left) for the next character in the word
        const found = (
            dfs(r + 1, c, i + 1) || // Move down
            dfs(r - 1, c, i + 1) || // Move up
            dfs(r, c + 1, i + 1) || // Move right
            dfs(r, c - 1, i + 1)    // Move left
        );

        // Restore the cell to its original value after the exploration
        board[r][c] = temp;

        // Return whether the word was found in any of the directions
        return found;
    }

    // Iterate over every cell in the board
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Start a DFS search from the current cell
            if (dfs(row, col, 0)) {
                return true; // Return true if the word is found
            }
        }
    }

    // Return false if the word cannot be found in the board
    return false;
}



function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let index = 1; // Pointer for the next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index; // New length of the array with unique elements
}

/**
 * Time Complexity: O(n)
 * - We iterate through the array once.
 * 
 * Space Complexity: O(1)
 * - No additional space is used, as we modify the array in place.
 */






// Binary Search Function
function binarySearch(arr, target) {
    // Initialize pointers
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        // Find the middle index
        const mid = Math.floor((left + right) / 2);
        
        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Target found
        } 
        
        // Adjust the search range
        if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    
    return -1; // Target not found
}







// Node class for Linked List
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Reverse Linked List Function
function reverseLinkedList(head) {
    let prev = null; // Initialize previous pointer to null
    let current = head; // Start with the head of the list
    
    while (current !== null) {
        const nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the current node's pointer
        prev = current; // Move the previous pointer forward
        current = nextNode; // Move the current pointer forward
    }
    
    return prev; // New head of the reversed list
}

// Example Usage of Binary Search
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const index = binarySearch(sortedArray, target);
console.log(`Target ${target} found at index:`, index); // Output: Target 7 found at index: 3

function maxCount(arr) {
    const count = {};
    for (const item of arr) {
        count[item] = (count[item] || 0) + 1;
    }

    let max = 0, maxItem = null;
    for (const key in count) {
        if (count[key] > max) {
            max = count[key];
            maxItem = key;
        }
    }
    return { maxItem, max };
}

const arr = [1, 2, 3, 2, 1, 2, 4, 1];
const result = maxCount(arr);
console.log(`Item with max count: ${result.maxItem}, Count: ${result.max}`);


 
function Maxcount (arr) {
    const count = {} ;
    for (const item of arr) {
        count [item] = (count [item] || 0) +1 ;
         
    }

    let max = 0; maxItem = null;
    for (const key in count) {
        if ( count[key] >max) {
            max = count [key] ;
            maxItem = key ;


        }
    }

    return {maxItem , max};
}

// Time Complexity: O(n + k) ≈ O(n) in the worst case.
// Space Complexity: O(k), where k is the number of unique elements in the array.




function pacificAtlantic(heights) {
    // Initialize the dimensions of the grid
    let rows = heights.length, cols = heights[0].length;
    
    // Create matrices to track cells that can reach the Pacific and Atlantic oceans
    let pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    let atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Start DFS from the border cells of each ocean
    // Traverse all rows, marking Pacific (left column) and Atlantic (right column) borders
    for (let i = 0; i < rows; i++) {
        dfs(heights, i, 0, pacific); // Start DFS for Pacific
        dfs(heights, i, cols - 1, atlantic); // Start DFS for Atlantic
    }
    // Traverse all columns, marking Pacific (top row) and Atlantic (bottom row) borders
    for (let j = 0; j < cols; j++) {
        dfs(heights, 0, j, pacific); // Start DFS for Pacific
        dfs(heights, rows - 1, j, atlantic); // Start DFS for Atlantic
    }

    // After completing DFS for both oceans, find cells reachable by both
    let result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Collect cells marked as reachable by both oceans
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }
    // Return the list of cells that can flow to both oceans
    return result;
}

// During DFS, explore all valid neighbors (up, down, left, right)
function dfs(heights, i, j, ocean) {
    // Mark the current cell as reachable
    ocean[i][j] = true;
    // Define directions for neighboring cells
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    // Explore each direction
    for (let [di, dj] of directions) {
        let newRow = i + di, newCol = j + dj;
        // Check if the neighbor is within bounds, unvisited, and has an equal or higher height
        if (newRow >= 0 && newRow < heights.length &&
            newCol >= 0 && newCol < heights[0].length &&
            !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[i][j]) {
            // Recursively call DFS for the valid neighbor
            dfs(heights, newRow, newCol, ocean);
        }
    }
}

// 1. Two Sum
function twoSum(nums, target) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap[complement] !== undefined) {
            return [hashMap[complement], i];
        }
        hashMap[nums[i]] = i;
    }
    return [];
}


function twoSum ( nums , target) {

    let hashMap = {};
    for(let i=0; i< nums.length;i++) {
        let complement = target - nums [i] ;
        if (hashMap [complement]!== undefined ) {
            return [hashMap[complement],i];
            

        }
        hashMap [nums[i]] = i ;
    }
}



// 2. Contains Duplicate
function containsDuplicate(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}


function containsDuplicate ( nums ) {
    let set = new set () ;
    for (let num of nums ) {
    if (set.has (num)) {
        return true
         }
         set.add (nums) ;
    }
    return false ;
    
}



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

function maxProfit (prices ) {
    let minPrice = Infinity;
    let maxProfit = 0 ;
    for (let price of prices ) {
        minPrice = math.min (minPrice, price) ;
        maxProfit = Math.max (maxProfit,price - minPrice) ;


    }

    return maxProfit;
}

// 4. Valid Anagram
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}

function isAnagram (s,t) {
    if (s.length !== t.length) return false ;
    return s.split ('').sort ().joim ('') === t.split ('').sort ().join ('') ;
}

// 5. Valid Parentheses
function isValid(s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (char in map) {
            if (stack.length && stack[stack.length - 1] === map[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}


function isvalid () {
    let stack = [] ;
    let map = {')' : '(' , '}': '{', ']':'['} ;
    for (let char of s ) {
        if (char in map) {
            if (stack.length && stack [stack.length-1] === map [char]) {
                stack.pop () ;

            } else {
                return false ;

            } 
        }   else {
            stack.push (char) ;
        }
    }

    return stack.length  === 0; 
}


// 6. Maximum Subarray
function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
  function maxSubArray ( nums ) {

  }
// 7. Product of Array Except Self
function productExceptSelf(nums) {
    let length = nums.length;
    let result = new Array(length).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return result;
}




// 8. 3Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
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

// 9. Merge Intervals
function merge(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let last = result[result.length - 1];
        if (last[1] >= intervals[i][0]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}

// 10. Group Anagrams
function groupAnagrams(strs) {
    let map = {};
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }
        map[sortedStr].push(str);
    }
    return Object.values(map);
}



// 11 Numbers of island 

function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    let numIslands = 0;

    const dfs = (grid, i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';

        dfs(grid, i + 1, j); 
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }

    return numIslands;
}




  function numberIsland (grid) {
    if(!grid ||  grid.length===0) {
        return 0;
    }
        let numberIsland = 0 ;

        const dfs = (grid,i,j) => {
            if (i< 0|| i >= grid.length || j < 0 || j>= grid[0].length || grid[i][j] === '0') {
                return ;
            }
            grid [i] [j] = '0';

            dfs (grid,i+1,j) ;
            dfs (grid,i-1,j) ;
            dfs (grid,i,j-1) ;
            dfs (grid,i ,j+1) ;

        } ;
        for (let i  = 0 ; i < grid.length ; i++) {
            for (let j = 0; j < grid [0].length;j++) {
                if (grid[i][j]=== '1') {
                    numberIsland ++;
                    dfs (grid,ij) ;
                }

            }

        }
        return numberIsland ;

  }



/* 
Solution Steps (Brief and Efficient):

1. Check Grid: If the grid is empty, return `0` (no islands).

2. Initialize Counter: Set `numIslands` to `0`.

3. DFS Function: Create a helper function `dfs` that:
   - Marks the current cell as visited by setting it to `'0'`.
   - Recursively explores adjacent cells (up, down, left, right).

4. Iterate Grid: Loop through each cell in the grid.

5. Identify Islands: When a land cell (`'1'`) is found, increment `numIslands` and call `dfs` to mark the entire island.

6. Return Count: After the loop, return `numIslands` as the total number of islands.
*/


// Example usage:
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid)); // Output: 3




// 12 spiral order 


function spiralOrder(matrix) {
    let result = [];
    
    if (matrix.length === 0) return result;
    
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
// Comment: Traverse from left to right along the top row
// Comment: Move down to the next row
// Comment: Traverse from top to bottom along the right column
// Comment: Move left to the next column
// Comment: Traverse from right to left along the bottom row
// Comment: Move up to the next row
// Comment: Traverse from bottom to top along the left column
// Comment: Move right to the next column


// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]









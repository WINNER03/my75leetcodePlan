// 1. Climbing Stairs
function climbStairs(n) {
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
/* 
1. Handle base cases for n <= 2
2. Use two variables to track the last two steps
3. Update variables iteratively until reaching n
4. Return the number of ways to climb n stairs
*/

// 2. Coin Change
function coinChange(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
/* 
1. Initialize dp array with Infinity, dp[0] = 0
2. For each coin, update dp array for achievable amounts
3. Calculate minimum coins needed for each amount
4. Return dp[amount] or -1 if not achievable
*/

// 3. Longest Increasing Subsequence
function lengthOfLIS(nums) {
    let dp = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}
/* 
1. Initialize dp array with 1s, as each element is a subsequence of length 1
2. For each element, check previous elements for increasing subsequences
3. Update dp array with the longest subsequence found
4. Return the maximum value in dp array
*/

// 4. Combination Sum
function combinationSum(candidates, target) {
    let result = [];
    function backtrack(remaining, start, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                path.push(candidates[i]);
                backtrack(remaining - candidates[i], i, path);
                path.pop();
            }
        }
    }
    backtrack(target, 0, []);
    return result;
}
/* 
1. Use backtracking to explore combinations
2. If remaining target is 0, add path to result
3. For each candidate, recursively subtract from remaining and continue
4. Remove last element to explore other paths
*/

// 5. House Robber
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
}
/* 
1. Handle base cases for empty or single-element arrays
2. Initialize dp with max of robbing first house or skipping it
3. For each house, decide to rob or skip based on previous dp values
4. Return the maximum rob amount at the last house
*/

// 6. House Robber II
function robCircular(nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(rob(nums.slice(0, -1)), rob(nums.slice(1)));
    
    function rob(nums) {
        let prev = 0, curr = 0;
        for (let num of nums) {
            let temp = Math.max(curr, prev + num);
            prev = curr;
            curr = temp;
        }
        return curr;
    }
}
/* 
1. Handle single-element case separately
2. Calculate max rob amount for two cases: exclude first or last house
3. Use helper rob function to calculate max rob for linear array
4. Return maximum of two cases
*/

// 7. Decode Ways
function numDecodings(s) {
    if (s[0] === '0') return 0;
    let dp = Array(s.length + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= s.length; i++) {
        let oneDigit = parseInt(s.slice(i - 1, i));
        let twoDigits = parseInt(s.slice(i - 2, i));
        if (oneDigit >= 1) dp[i] += dp[i - 1];
        if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i - 2];
    }
    return dp[s.length];
}
/* 
1. Initialize dp array to track decoding ways
2. For each character, check valid one and two-digit decodings
3. Update dp array based on previous decoding counts
4. Return total decoding ways for entire string
*/

// 8. Unique Paths
function uniquePaths(m, n) {
    let dp = Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}
/* 
1. Initialize dp array with 1s for first row
2. For each cell, calculate paths by adding from top and left cells
3. Update dp array in-place for each row
4. Return total paths for bottom-right cell
*/

// 9. Jump Game
function canJump(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}
/* 
1. Initialize maxReach to track furthest reachable index
2. For each index, check if reachable, update maxReach
3. Return true if loop completes, false if maxReach is insufficient
*/

// 10. Word Break
function wordBreak(s, wordDict) {
    let wordSet = new Set(wordDict);
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}
/* 
1. Initialize dp array with dp[0] as true (empty substring)
2. For each substring, check if it can be segmented by previous words
3. Update dp array based on whether words in wordSet match substrings
4. Return dp[s.length] indicating if entire string can be segmented
*/

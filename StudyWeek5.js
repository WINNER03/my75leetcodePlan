
// Week 5 Problems




// Climbing Stairs
function climbStairs(n) {
    if (n <= 2) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}


function climbStairs (n) {
    if (n<=2 ) return n;
    let first  =1 ;
    let second = 2;
}








// Longest Increasing Subsequence
function lengthOfLIS(nums) {
    if (!nums.length) return 0;
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






// Word Break
function wordBreak(s, wordDict) {
    let wordSet = new Set(wordDict);
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}



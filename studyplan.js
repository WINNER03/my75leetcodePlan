// 1. Three Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
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








// 2. Longest Consecutive Sequence
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
}



// 3. Subarray Sum Equals K
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0, sum = 0;
    
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
}



// 4. Product of Array Except Self
function productExceptSelf(nums) {
    const result = [];
    let prefix = 1;
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    
    return result;
}

// 5. Find the Duplicate Number
function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    fast = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}

// 6. 4Sum II
function fourSumCount(nums1, nums2, nums3, nums4) {
    const map = new Map();
    let count = 0;
    
    for (let a of nums1) {
        for (let b of nums2) {
            map.set(a + b, (map.get(a + b) || 0) + 1);
        }
    }
    
    for (let c of nums3) {
        for (let d of nums4) {
            if (map.has(-1 * (c + d))) {
                count += map.get(-1 * (c + d));
            }
        }
    }
    
    return count;
}

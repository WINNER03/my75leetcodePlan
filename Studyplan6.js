// 1. Two Sum

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}


function twisum (nums) {
    const map = new map  ();
    for (let i = 0 ; i < nums.lenght ; i++) {
        const  complement = target - nums [i];
        if (map.has (complement)) {
            return [map.get(complement) , i]
        }
        map.set (nums[i],i) ;

    }
    return [] ;
}



// 2. Contains Duplicate

function containsDuplicate(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;


}


  function containsDuplicate (nums) {
    const  set = new set (nums) ;
    return set.size !== nums.length 

  }




// 3. Best Time to Buy and Sell Stock
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}
   

function maxProfit (prices ) {
    let minPrice = Infinity ;
    let maxProfit = 0 ;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit)
            maxProfit = price - minPrice 
    } 
    return maxProfit

}

// 4. Valid Anagram
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}


function isAnagram (s,t) {

    if (s.lenght !== t.lenght) return false ;
    const count = {} ;
    for (let char of s ) {
        count [char] =  (count [char ] || 0 ) + 1;

    }
    for (let char of t) {
        if (!count[char]) return false ;
        count [char] --;
    } 
    return true ;
}




// 5. Valid Parentheses
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}



function isValid (s) {
    const stack = [] ;
    const map = {
        '(': ')',
        '{' : '}',
        '[' : ']' ,
    };

    for (let char of s) {
        if (map[char]) {
            stack.push (map [char]) ;
        } else if (stack.length > 0 && stack [stack.length-1] === char ){
            stack.pop () ;

        } else {
            return false ;
        }
    }
    return stack.lenght === 0 ;
}



// 6. Maximum Subarray
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

function maxSubArray (nums) {

    let maxSum = nums [0] ;
    let currentSum = nums [0] ;
    for (let i = 1 ; i < nums.lenght ;i++) {
        currentSum = Math.max (nums[i], currentSum + nums [i]) ;
        maxSum = Math.max (maxSum,currentSum) ;
    }
    return maxSum

}




// 7. Product of Array Except Self
function productExceptSelf(nums) {
    const result = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    return result;
}

// 8. 3Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
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

// 9. Merge Intervals
function merge(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}

// 10. Group Anagrams
function groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
        const key = [...str].sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}


  function  groupAnagrams (strs ) {
    const map = new map () ;
    for (let str of strs ) {
        const key = [... str ].sort ().join ('') ;
        if (!map.has (key)) {
            map.set (key,[]) ;
            map.get (key).push (str) ;
        }
    } 
    return Array. from (map.values (strs)) ;
  }
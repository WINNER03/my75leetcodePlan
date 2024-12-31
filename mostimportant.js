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

 function twosum ( nums , target) {
    let map  = new map () ;
    for(let i = 0 ; i < nums.length ; i++) {
        let complement = target - nums [i] ;
        if (map.has (complement )) {
            return [map.get (complement),i] ;
        }  
        map.set (nums[i],i);
    }
    return [] ;
 }

// Steps:
// 1. Initialize an empty map to store numbers and their indices.
// 2. Iterate through the array.
// 3. Calculate the complement for each number (target - current number).
// 4. Check if the complement exists in the map; if found, return indices.
// 5. If not, add the current number and its index to the map.
// 6. Return an empty array if no valid pair is found.

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


function containsDuplicate (nums) {
    let set = new set ();
    for (let num of nums ) {
        if (set.has (num)) {
            return true ;
        }
        set.add (num) ;

    }
    return false ; 
}
// Steps:
// 1. Initialize an empty set to store unique numbers.
// 2. Iterate through the array.
// 3. If a number is already in the set, return true (indicating a duplicate).
// 4. If not, add the number to the set.
// 5. If no duplicates are found after iteration, return false.

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

function maxProfit ( prices ) {
    let minPrice = Infinity ;
    let maxProfit = 0; 
    for (let price of prices ) {
        minPrice = Math.min (minPrice , price) ;
        maxProfit = Math.max (maxProfit, price- minPrice);
    }

    return maxProfit;
}

// Steps:
// 1. Initialize minPrice to infinity and maxProfit to 0.
// 2. Iterate through prices to find the minimum price to buy.
// 3. Calculate the profit for each price.
// 4. Update maxProfit if the profit is higher than the current maxProfit.
// 5. Return maxProfit at the end.

// 4. Valid Anagram
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    let count = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    
    for (let i of count) {
        if (i !== 0) return false;
    }
    
    return true;
}



function isAnagram (s,t) {
    
    if (s.length !== t.length) return false ;
    let  count  = new  Array (26).fill (0) ;

    for ( let i = 0;  i < s.length ; i++) {

        count [s.charCodeAt (i) -97 ] ++;
        
        count [s.charCodeAt (i) -97 ] --;

        for (let i of count ) {
            if (i !== 0 ) return false ; 

        }
            return true ;
    }
}
// Steps:
// 1. Check if the lengths of the two strings are the same. If not, return false.
// 2. Initialize an array of size 26 to count character occurrences.
// 3. Iterate through both strings and update the count array.
// 4. If all counts are zero, return true; otherwise, return false.




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




function isvalid (s) { 

    let stack = [] ;
    let map = {'(':')', '{':')', '[':']'} ;
    for ( let char of s) {
        if (map [char ]) {
            stack.push (char);

        } else {
            let last = stack.pop() ;
            if (map[last] !== char ) return false ;
        }

    }

    return stack.length === 0;
}
    


// Steps:
// 1. Initialize an empty stack and a map for matching brackets.
// 2. Iterate through the string.
// 3. Push opening brackets to the stack.
// 4. For closing brackets, check if they match the last opening bracket.
// 5. If the stack is empty after iteration, return true; otherwise, return false.

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
function maxSubArray (nums) {
    let currentSum = nums [0 ] ;
}
// Steps:
// 1. Initialize currentSum and maxSum with the first element.
// 2. Iterate through the array, updating the currentSum and maxSum.
// 3. At each element, decide whether to add it to the current subarray or start a new one.
// 4. Return the maximum sum at the end.

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

// Steps:
// 1. Initialize a result array filled with 1 and prefix/suffix to 1.
// 2. Perform a prefix pass to calculate the product of all elements before the current element.
// 3. Perform a suffix pass to calculate the product of all elements after the current element.
// 4. Return the result array.

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

// Steps:
// 1. Sort the array to avoid duplicates.
// 2. Iterate through the array, using two pointers (left and right) to find pairs that sum to zero.
// 3. Skip duplicates, add valid triplets to the result, and move pointers accordingly.
// 4. Return the result array of triplets.

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

// Steps:
// 1. Sort the intervals by start time.
// 2. Initialize result with the first interval.
// 3. Iterate through the intervals, merging overlapping intervals.
// 4. Return the merged intervals.

// 10. Group Anagrams
function groupAnagrams(strs) {
    let map = new Map();
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
}

// Steps:
// 1. Initialize a map to store arrays of anagrams.
// 2. Iterate through each string, sort the characters, and use the sorted string as the key.
// 3. Group anagrams together by adding them to the same array in the map.
// 4. Return the grouped anagrams as an array.

// 11. Reverse a Linked List
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

// Steps:
// 1. Initialize prev as null and current as head.
// 2. Iterate through the list, reversing the direction of each node.
// 3. Set current to the next node and continue until the end of the list.
// 4. Return the reversed list (prev).

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (currentSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Example Usage
const nums = [-1, 0, 1, 2, -1, -4];
const triplets = threeSum(nums);
console.log(triplets);
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

/**
 * Solution Steps:
 * 1. Sort the Array: Arrange nums in ascending order to facilitate the two-pointer approach and eliminate duplicates.
 * 2. Iterate Through the Array: Loop through each element, treating it as the first element of a potential triplet.
 * 3. Skip Duplicates: If the current element is the same as the previous one, skip it to prevent duplicate triplets.
 * 4. Initialize Two Pointers: Set left to the element right after the current and right to the end of the array.
 * 5. Find Triplets:
 *    - Calculate the sum of the three elements.
 *    - If the sum is zero, add the triplet to the result and move both pointers past any duplicates.
 *    - If the sum is less than zero, move the left pointer to increase the sum.
 *    - If the sum is greater than zero, move the right pointer to decrease the sum.
 * 6. Return Results: After completing the iterations, return all unique triplets that sum to zero.
 */

/**
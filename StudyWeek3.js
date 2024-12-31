
// Week 3 Problems

// Top K Frequent Elements
function topKFrequent(nums, k) {
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let freqArray = Array.from(freqMap.entries());
    freqArray.sort((a, b) => b[1] - a[1]);

    return freqArray.slice(0, k).map(item => item[0]);
}

// Validate Binary Search Tree
function isValidBST(root) {
    function validate(node, min, max) {
        if (!node) return true;
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

    return validate(root, null, null);
}



function isValidBST (root ) {  
    function validate (node,min,max){
        if (!node) return true ;
        if ((min!== null && node.val <= min ) ||  (max!== null && node.val >= max )) return false ;
     return  validate (node.left, min,node.val) && validate (node.right ,node.val,max) ;

    }
}
// Binary Tree Maximum Path Sum
function maxPathSum(root) {
    let maxSum = -Infinity;

    function helper(node) {
        if (!node) return 0;
        let left = Math.max(helper(node.left), 0);
        let right = Math.max(helper(node.right), 0);
        maxSum = Math.max(maxSum, node.val + left + right);
        return node.val + Math.max(left, right);
    }

    helper(root);
    return maxSum;
}

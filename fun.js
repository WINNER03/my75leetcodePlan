function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3



function lengthOfLongestSubstring (s) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {} ;

    for ( let i = 0 ; i < s.length ;i++ ) {

        const currentChar = s[i] ;
    }

    
}
// Binary Search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}


function binarysearch  ( nums, target ) {

    let left = 0, right = nums.lenght -1 ;
    while (left <right ) {
        let mid = Math.floor ((left+right)/2)
        if (nums[mid] === target) return mid;
        else if ( nums[mid]< target) left = mid+1;
        else right =  mid -1 


    }
    return -1 ;
}

// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    const equal = arr.filter(x => x === pivot);
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacci (n) {
    if (n <= 1) return n;
    return fibonacci (n-1) + fibonacci (n-2);

}

function fibonacciIterative(n) {
    let a = 0, b = 1, temp;
    for (let i = 0; i < n; i++) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}


function fibonacci (n) {
let a = 0, b = 1 , temp;
for (let i = 0;i < n ;i++) {
    temp = a ;
    a = b ;
    b = temp + b ;
}
 return a;
}

// Reverse Linked List In Place
function reverseLinkedList(head) {
    let prev = null, current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


function reverseLinkedList (head) {
    let prev = null, current = head ;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current ;
        current = next ; 

    }
    return prev ;

}

// Palindrome Linked List
function isPalindrome(head) {
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    if (fast) slow = slow.next;
    while (slow) {
        if (slow.val !== prev.val) return false;
        slow = slow.next;
        prev = prev.next;
    }
    return true;
}

// Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) nums[++i] = nums[j];
    }
    return i + 1;
}

// Longest Word in a String
function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}

// Capitalize First Letter
function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// First Repeating Character
function firstRepeatingCharacter(str) {
    let charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) return char;
        charSet.add(char);
    }
    return null;
}


function firstR (str ) {

    let charSet = new Set () ;q
    for (let char of str ) {
        if (charSet.has (char)) return  char ;
        charSet.add (char);

    }
    return null;
}

// Palindrome String
function isPalindromeString(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}


function palindron (str) {

    str = str .replace (/[^A-Za-z0-9]/g, '').toLowerCase ();
    let left = 0; right = str.lenght -1;
         while (left <right) {
            if (str[left ]!== str[right]) return false ;
                 left ++;
                right--;

    
   }

   return true 
}

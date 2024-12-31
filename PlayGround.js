// 1. Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  

  function fibonacci (n) {
  
    if (n <= 1 ) return n;
    let a = 0 ; b = 1, c;
    for (let i = 2 ; i <= n ; i++)  {
      c = a+b;
      a=b;
      b=c;
    }
        return b;
}



  // 2. Reverse Words in a String
  function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
  }


  



    function reverseWords (str) {

      return str.split('').reverse () .join ('') ;
    }

  // 3. Count Occurrence
  function countOccurrence(str) {
    return str.split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  }
  
  // 4. All Unique Characters
  function allUniqueCharacters(str) {
    const charSet = new Set();
    for (let char of str) {
      if (charSet.has(char)) return false;
      charSet.add(char);
    }
    return true;
  }


  function allUniqueCharacters(str ) {
    const charSet = new Set () ;
    for ( let char of str ){
      if (charSet.has (char )) return flase ;
      charSet.add(char) ; 
    }
  }

  // 5. Anagrams
  function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }

  function areAnagrams(str1, str2) {
    if (str1.length!== str2.length ) return false ; 
    return str1.split ('').sort().join('') === str2.split('').sort().join('');

  }
  
  // 6. Array Reduce (Sum Elements)
  function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 7. Capitalize
  function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
  
  // 8. Bubble Sort
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // 9. Contains Duplicate
  function containsDuplicate(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
  }
  
  // 10. Find Duplicate
  function findDuplicate(arr) {
    const set = new Set();
    for (let num of arr) {
      if (set.has(num)) return num;
      set.add(num);
    }
    return -1; // No duplicate found
  }


  function findduplicatee (arr) {
    const set = new Set () ;
    for (let num of arr) {
      if (set.has(num)) return num;
      set.add (num)

    }
    return -1 ;

  }
  
  // 11. FizzBuzz
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      let result = '';
      if (i % 3 === 0) result += 'Fizz';
      if (i % 5 === 0) result += 'Buzz';
      console.log(result || i);
    }
  }
  
  // 12. Linear Search
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }
  
  // 13. Longest Word
  function longestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
  }
  
  // 14. Odd and Even
  function separateOddEven(arr) {
    const odd = [], even = [];
    for (let num of arr) {
      if (num % 2 === 0) even.push(num);
      else odd.push(num);
    }
    return { odd, even };
  }

  function sepertateodeven (arr) {
    const odd = [] , even = [];
    for (let num of arr) {
      if (num % 2 ===0 ) even.push (num) ;
      else odd.push (num);
    }
      return {odd,even} ;
  }

  

  function separateOddEven (arr) {
    const odd = [] ; even = [] ;
    for (let num of arr) {
    if (num % 2 === 0) even.push(num) ;
    else odd.push(num);

    } 
    return {odd,even};
  }
  
  // 15. Pangram
  function isPangram(str) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    str.toLowerCase().split('').forEach(char => alphabet.delete(char));
    return alphabet.size === 0;
  }
  
  // 16. Prime Number
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // 17. Reverse a Linked List
  function reverseLinkedList(head) {
    let prev = null, current = head, next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  
  // 18. Reverse Integer
  function reverseInteger(n) {
    const reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''), 10);
    return n < 0 ? -reversed : reversed;
  }
  
  // 19. Vowel Count
  function vowelCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }
  








  function countOccurrences(array) {
    const countMap = {}; // Create an empty object

    for (const element of array) {
        // Increment count if exists, else initialize to 1
        countMap[element] = (countMap[element] || 0) + 1;
    }

    return countMap;
}

// Example usage
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countOccurrences(array));
// Output: { apple: 3, banana: 2, orange: 1 }



function countOccurrencesUsingMap(array) {
  const countMap = new Map();

  for (const element of array) {
      if (countMap.has(element)) {
          countMap.set(element, countMap.get(element) + 1);
      } else {
          countMap.set(element, 1);
      }
  }

  return countMap;
}

// Example usage
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countOccurrencesUsingMap(array));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }







  // Sample Usage (uncomment to test each function)
  
  // console.log(fibonacci(10)); // Output: 55
  // console.log(reverseWords("Hello World")); // Output: "World Hello"
  // console.log(countOccurrence("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
  // console.log(allUniqueCharacters("abcde")); // Output: true
  // console.log(areAnagrams("listen", "silent")); // Output: true
  // console.log(arraySum([1, 2, 3, 4])); // Output: 10
  // console.log(capitalize("hello world")); // Output: "Hello World"
  // console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
  // console.log(containsDuplicate([1, 2, 3, 4, 4])); // Output: true
  // console.log(findDuplicate([1, 2, 3, 4, 2])); // Output: 2
  // fizzBuzz(15); // Output: FizzBuzz for multiples of 3 and 5
  // console.log(linearSearch([1, 2, 3, 4], 3)); // Output: 2
  // console.log(longestWord("The quick brown fox")); // Output: "quick"
  // console.log(separateOddEven([1, 2, 3, 4, 5])); // Output: { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }
  // console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
  // console.log(isPrime(11)); // Output: true
  // // Linked List example is omitted for simplicity
  // console.log(reverseInteger(-123)); // Output: -321
  // console.log(vowelCount("hello world")); // Output: 3
  


  const findItinerary = function(tickets) {
    const graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for (let airport in graph) {
        graph[airport].sort(); // Sort destinations
    }

    const result = [];
    const stack = ["JFK"];

    while (stack.length > 0) {
        while (graph[stack[stack.length - 1]] && graph[stack[stack.length - 1]].length > 0) {
            const next = graph[stack[stack.length - 1]].shift();
            stack.push(next);
        }
        result.push(stack.pop());
    }

    return result.reverse();
};
 
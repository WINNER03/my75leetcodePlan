
// Week 1 Problems

// Valid Parentheses
function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}




function isValid  (s) {
    let stack = [] ;

    let map = {
        '(' :')' ,
        '{' : '}' ,
        '[' : ']',
     };

     for (let i = 0 ; i < s.lenght;i++) {
        if (map[s[i]]) {
            stack.push (s [i])
        }  else {
            let last = stack.pop ();
            if (s[i] !== map [last]) {
                return false ;
            }
        }
        
     }
     return stack.lenght === 0 ;
}





// 3Sum

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}





function threesum (nums ) {

    nums.sort ((a,b) =>  a-b ) ;
    let result = [] ;

    for (let i= 0 ; i <nums.lenght-2;i++) {
        if (i=== 0 ||  nums [i] !== nums [i-1]) {


            let left = i + 1 ;
            let right  = nums.lenght -1 ;   

            while (left < right ) {
                const sum = nums [i] + nums [left] + nums [right] ;
                if (sum ===0) {
                    result.push ([nums[i],nums [left ],nums [right]]);
                    while (left <right && nums [left] === nums [left=1]) left ++;
                    while (left < right && nums [right] === nums [right-1]) right --;
                    left++;
                    right--;

                } else if (sum<0) {
                    left++
                } else {
                    right --;
                }
            
            
            }

     }

       

        }

      return result     
    }









// Merge Intervals

function merge(intervals) {

    if (!intervals.length) return intervals;
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



function merge (intervals ) {

    if (!intervals.lenght ) return intervals;

    intervals.sort( (a,b) => a [0] - b [0] );
    let   result = [intervals [0]] ;

    for (let i = 1; i < intervals.lenght;i++) {
        let last = result [result.lenght-1];
        if (last [1] >= intervals [i][0]) {
            last [1 ] = Math.max (last[1],intervals [i][1])


        } else {
            result.push (intervals ) ;
        }

    }


    return result ;
}




const isValidPalindrome = str => {
    let i = 0;
    let j = str.length - 1;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
  
      i++;
      j--;
    }
  
    return true;
  };
  
  
  const isPalindrome = head => {
    let str = '';
  
    while (head) {
      str += head.val;
      head = head.next;
    }
  
    return isValidPalindrome(str);
  };



  function palindrome  ( str) {
    let i = 0;
    let j = str.length-1 ;
    while (i<j) {
        if(str[i] !== str[j]) {
            return false 
        }
            i++ ;
            j--;

    }
    return true ;

  };

  const isdPalindrome = head => {

  }
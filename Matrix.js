

// Solution Steps
// 1. Initialize variables: result array, and top, bottom, left, right pointers for boundaries.
// 2. Traverse matrix in spiral order: left to right, top to bottom, right to left, bottom to top.
// 3. Repeat until all elements are visited.

//11

function spiralOrder(matrix) {
    // Step 1: Input Validation - Check if the matrix is empty or invalid
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return []; // Return an empty array for invalid input
    }

    // Step 2: Initialize variables
    const result = []; // To store the elements in spiral order
    let top = 0; // Top boundary of the matrix
    let bottom = matrix.length - 1; // Bottom boundary
    let left = 0; // Left boundary
    let right = matrix[0].length - 1; // Right boundary

    // Step 3: Loop to traverse the matrix in spiral order
    while (top <= bottom && left <= right) {
        // Traverse the top row from left to right
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]); // Add each element in the top row
        }
        top++; // Shrink the top boundary

        // Traverse the right column from top to bottom
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]); // Add each element in the right column
        }
        right--; // Shrink the right boundary

        // Traverse the bottom row from right to left (if applicable)
        if (top <= bottom) { // Check to avoid overlapping
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]); // Add each element in the bottom row
            }
            bottom--; // Shrink the bottom boundary
        }

        // Traverse the left column from bottom to top (if applicable)
        if (left <= right) { // Check to avoid overlapping
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]); // Add each element in the left column
            }
            left++; // Shrink the left boundary
        }
    }

    // Step 4: Return the result array containing elements in spiral order
    return result;
}


  function spiralOrder2 (matrix) {


    const result = 0;
    let top = 0;
    let right = matrix[0].length -1;
    let left = 0;
    let bottom = matrix.length -1;


        while (top <= bottom && left <= right ) {
            for (let col = left ; col <= right;  col++ ) {
                result.push (matrix [top][row]);
            }
                top++;

                for (let row = top ; row <= bottom; row++) {
                    result.push (matrix[row] [right])

                  } 
                  
                  right --; 

                if (top <= bottom ) {
                    for (let col = right ; col >= left ; col-- ) {
                        result.psuh (matrix [bottom][col])

                    }
                    bottom -- ;

                }


                if (left  <= right ) {
                    for (let row = bottom; row >= top ; row--) {
                        result.push (matrix[row] [left ])

                    }        
                    left ++;     
                }

                

        }
            return result ;
}
  // Time Complexity: O(m * n)
  // Space Complexity: O(m * n)


  
  // Example Usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


  


  // 12. Number of Islands
  
  // Solution Steps
  // 1. Initialize island count to 0.
  // 2. Iterate through grid cells. If cell is '1', perform DFS to mark connected land as '0'.
  // 3. Increment count for each new island found.
  
  function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
  
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          dfs(grid, i, j);
          count++;
        }
      }
    }
    return count;
  }
  


  function dfs(grid, i, j) {
    // Base case: stop if out of bounds or not on land ('1')
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') return;
    
    // Mark the current cell as visited by changing it from '1' to '0'
    grid[i][j] = '0';
    
    // Recursively call dfs for adjacent cells (up, down, left, right)
    dfs(grid, i + 1, j); // Down
    dfs(grid, i - 1, j); // Up
    dfs(grid, i, j + 1); // Right
    dfs(grid, i, j - 1); // Left

  }


  function numberofisland (grid) {

    if (!grid.length || grid.lenght ===0) return 0;

    let count = 0;

    for (let i =0 ; i<grid.length ;i++){
        for(let j=0; i<grid[0].length;j++){
            if (grid[i][j]==='1'){
            
                dfs (grid,i,j) ;
                count++;
            }
        }
    }
    return count 
  }



  function dfs (grid,i,j) {

    if (i<0|| j<0 || i>= grid.length||j>=grid[0].lenght || grid[i][j]!=="1") return ;

    grid[i][j] ='0';

    dfs (grid,i+1,j) //up
    dfs (grid,i-1,j) //down
    dfs (grid,i,j+1) //right 
    dfs (grid,i,j-1) //left 
  }

  // Time Complexity: O(M * N)
  // Space Complexity: O(M * N) due to DFS call stack
  
  // Example Usage
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  console.log(numIslands(grid)); // Output: 1




  
function exist(board, word) {
    const rows = board.length; // Number of rows in the board.
    const cols = board[0].length; // Number of columns in the board.

    function dfs(row, col, index) {
        if (index === word.length) return true; // If all characters are matched, return true.
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;
        // Check if out of bounds or character mismatch.

        const temp = board[row][col]; // Save the current character.
        board[row][col] = '#'; // Mark cell as visited.

        // Explore all 4 possible directions (up, down, left, right).
        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);

        board[row][col] = temp; // Restore the cell after backtracking.
        return found; // Return true if the word is found in any direction.
    }

    for (let row = 0; row < rows; row++) { // Iterate over all cells.
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) return true; // Start DFS if the first character matches.
        }
    }

    return false; // Return false if the word is not found.
}
function exist(word , board ) {
    let rows = board.length;
    let cols = board[0].length;


     function dfs (row, col, index){
        if (index === word ) return true ;
        if (row<0|| col<0|| row>= rows|| col >=cols || board[row][col] !== word[index] ) return false ;

        const temp = board [row][col];
        board[row][col] ='#';
         const found =  dfs (row+1,col,index+1)
                        dfs (row-1,col,index+1)   
                        dfs (row,col+1,index+1)
                        dfs (row,col-1,index+1)

                        board[row][col] = temp;
                        return found ;
    
     }

     for (let row =0; row< rows;row++){
        for (let col =0; col< cols ; col++){
            if (dfs (row,col,0)) return true ;
        }
     }
     return false ;
}



  





function numIslands2(m, n, positions) {

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Possible directions (right, down, left, up).
    const uf = new UnionFind(m * n); // UnionFind for the grid.
    const grid = Array(m).fill(null).map(() => Array(n).fill(0)); // Initialize grid as water (0).
    const results = []; // Store results after each operation.
    let count = 0; // Track the number of islands.

    for (let [row, col] of positions) {
        if (grid[row][col] === 1) { // If it's already land, skip and append current count.
            results.push(count);
            continue;
        }

        grid[row][col] = 1; // Mark the position as land.
        count++; // Increment island count.
        const index1 = row * n + col; // Convert 2D coordinates to 1D index.

        for (let [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            const index2 = newRow * n + newCol;

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === 1) {
                if (uf.union(index1, index2)) { // If union succeeds, reduce island count.
                    count--;
                }
            }
        }

        results.push(count); // Append current island count.
    }

    return results; // Return the results array.
}



// Time Complexity: O(k * α(m * n))
//   - k: number of positions
//   - α: inverse Ackermann function, very close to O(1) for practical purposes.
// Space Complexity: O(m * n)
//   - Space used for the union-find structure (parent and rank arrays).




// Word Search
function exist(board, word) {
    const rows = board.length; // Number of rows in the board.
    const cols = board[0].length; // Number of columns in the board.


    function dfs(row, col, index) {
        if (index === word.length) return true; // If all characters are matched, return true.
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;
        // Check if out of bounds or character mismatch.

        const temp = board[row][col]; // Save the current character.
        board[row][col] = '#'; // Mark cell as visited.

        // Explore all 4 possible directions (up, down, left, right).
        const found = dfs(row + 1, col, index + 1) ||
                      dfs(row - 1, col, index + 1) ||
                      dfs(row, col + 1, index + 1) ||
                      dfs(row, col - 1, index + 1);

        board[row][col] = temp; // Restore the cell after backtracking.
        return found; // Return true if the word is found in any direction.
    }

    for (let row = 0; row < rows; row++) { // Iterate over all cells.
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) return true; // Start DFS if the first character matches.
        }
    }

    return false; // Return false if the word is not found.
}


function exist (board ,word ) {

    let rows = board.lenght;
    let cols = board[0].length ;



     function dfs  (col, row, index) {

        if (index=== word.lenght) return true ;
        if (row < 0 || col<0|| row >= rows|| col >= cols || board [row][col]!== word[index] ) return false ;

        let temp = board [row][col];
        board [row][col ] ='#'

        const found =   dfs (row+1,col, index+1) ||
                        dfs (row-1,col, index+1) ||
                        dfs (row,col+1, index+1) ||
                        dfs (row,col-1, index+1)

                        board [row] [col] = temp;
                        return found ;

     }

     for  (let row =0; row <rows; row++) {
        for (let col =o ; col< cols ; cols ++) {
            if (dfs,col,row, 0) {
                return true
            }

        }
     }

     return false ;
}

// Time Complexity: O(m * n * 4^L)
//   - m: number of rows, n: number of columns
//   - L: length of the word
//   - 4^L comes from exploring all four directions for each character in the word.
// Space Complexity: O(L)
//   - Space used for the recursion stack, where L is the length of the word.




  // 10. Pacific Atlantic Water Flow
  // The function identifies cells that can flow to both the Pacific and Atlantic oceans

  function pacificAtlantic(heights) {
    let rows = heights.length, cols = heights[0].length;
    let pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    let atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        dfs(heights, i, 0, pacific);
        dfs(heights, i, cols - 1, atlantic);
    }
    for (let j = 0; j < cols; j++) {
        dfs(heights, 0, j, pacific);
        dfs(heights, rows - 1, j, atlantic);
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }
    return result;
}

function dfs(heights, i, j, ocean) {
    ocean[i][j] = true;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let [di, dj] of directions) {
        let newRow = i + di, newCol = j + dj;
        if (newRow >= 0 && newRow < heights.length &&
            newCol >= 0 && newCol < heights[0].length &&
            !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[i][j]) {
            dfs(heights, newRow, newCol, ocean);
        }
    }
}



   function paicificOcean (heights) {

     let rows = heights.length , cols = heights[0].length ;
     let pacific  = Array. from ({length : rows}, () => Array(cols).fill (false ) )
    let Atlantic =  Array. from ({length : rows}, () => Array(cols).fill (false ) )

        for (let i = 0 ; i < rows; rows++ ) {
            dfs (heights,i,0,pacific) ;
            dfs (heights,i,cols-1,Atlantic);
        }

        for (let j=0; j< cols; j++) {
            dfs (heights, rows-1,Atlantic)
            dfs (heights, 0, j,pacific )

        }

        let result = 0;
        for (let i=0; i < rows; i++) {
            for (let j=0; j < cols; j++){

            }
        }
        if (Atlantic[i][j]&& pacific[i][j]) {
            result.push ([i,j]);
        }

   }



   function dfs (heights,i,j,ocean) {
    ocean[i][j] = true;
    let direction = [[1,0] ,[-1,0]  ,[0,1]  ,[0,-1]]

    for (let [di,dj] of directions) {
        let Newrow = i +di ; newcol= j+dj;
        if (Newrow>=0 && Newrow < heights.length && newcol>= 0 && newcol< heights[0].length 
            && !ocean [Newrow][newcol]  && heights [Newrow][newcol] >= heights [i][j]
        ) {
            dfs (heights,Newrow,newcol,ocean);
        }
    }
   }

//Initialize matrices for Pacific and Atlantic
// Perform DFS from edges connected to oceans
//Record cells reachable from both oceans
//Return result of all such cells








// Main function to find words on the board

const findWords = (board, words) => {
    const rows = board.length; // Number of rows in the board
    const cols = board[0].length; // Number of columns in the board
    const result = new Set(); // Use a Set to store results and avoid duplicates

    // Build the Trie as a plain object
    const buildTrie = (words) => {
        const root = {}; // Root of the Trie
        for (const word of words) {
            let node = root; // Start from the root for each word
            for (const char of word) {
                // Add each character to the Trie
                if (!node[char]) {
                    node[char] = {}; // Create a new node if it doesn't exist
                }
                node = node[char]; // Move to the next node
            }
            node.isWord = true; // Mark the end of the word
        }
        return root; // Return the root of the Trie
    };

    const trie = buildTrie(words); // Construct the Trie from the words list

    // Define the directions for DFS traversal: right, down, left, up
    const directions = [
        [0, 1],  // Move right
        [1, 0],  // Move down
        [0, -1], // Move left
        [-1, 0], // Move up
    ];



    

    // DFS with Backtracking
    const dfs = (row, col, node, path) => {
        // If the node represents a complete word, add it to the result set
        if (node.isWord) {
            result.add(path); // Add the word to the result
        }

        // Check boundaries and if the cell is already visited
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] === '#') {
            return; // Stop if out of bounds or cell is visited
        }

        const char = board[row][col]; // Current character on the board
        if (!node[char]) {
            return; // Stop exploring if the character is not in the Trie
        }

        board[row][col] = '#'; // Mark the cell as visited
        for (const [dr, dc] of directions) {
            // Explore all possible directions
            dfs(row + dr, col + dc, node[char], path + char);
        }
        board[row][col] = char; // Restore the cell after backtracking
    };

    // Start DFS from every cell on the board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (trie[board[r][c]]) {
                // Only start DFS if the current character exists in the Trie
                dfs(r, c, trie, '');
            }
        }
    }

    return Array.from(result); // Convert the Set to an array and return it
};

// Example Usage:
// Define the board and list of words
const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
];
const words = ["oath", "pea", "eat", "rain"];

// Call the function and print the result
console.log(findWords(board, words)); // Output: ["oath", "eat"]




/*
Complexity:

Time Complexity:
1. Building the Trie: O(L), where L is the total number of characters in all words.
   
Space Complexity:
Total: O(L + k), as the Trie size and recursion stack are the dominant factors.
*/
/*

This solution uses a Trie data structure to efficiently store words.
The Trie helps in quickly pruning invalid paths during the Depth-First Search (DFS).

Backtracking is employed to explore all valid paths in the grid.
It ensures that we do not reuse cells within the same path.

This combination of Trie and backtracking optimizes the word search process.
It focuses only on potential candidates, making the search fast and efficient.
*/


/* Steps:

1. Build a Trie:
   - "Insert all words into the Trie, so we can quickly access prefixes and full words during DFS."

2. Perform DFS:
   - "Start DFS from each cell on the board. For each step, check if the current letter matches a Trie node."
   - "If the current path matches a complete word, add it to the result set."
   - "If a cell is visited, mark it as visited temporarily to avoid reuse during the current DFS."

3. Optimize:
   - "Stop exploring a path early if the current character doesn’t match any prefix in the Trie."
   - "Use a Set to store results to handle duplicates efficiently."
*/


















// Time Complexity: O(m * n)
//   - m: number of rows, n: number of columns
//   - Each cell is visited at most once for both Pacific and Atlantic oceans.
// Space Complexity: O(m * n)
//   - Space used for the `pacific` and `atlantic` boolean grids, plus the recursion stack.

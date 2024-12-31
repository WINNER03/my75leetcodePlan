class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.isWord = false; // Indicates the end of a word
    }
}
  class TrieNode {
    constructor (){
        this.children= {};
        this.word = false;


    }

  }


class Trie {
    constructor() {
        this.root = new TrieNode(); // Root node of the Trie
    }


    


    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); // Create a new node if necessary
            }
            node = node.children[char];
        }
        node.isWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) return false; // If character not found, word doesn't exist
            node = node.children[char];
        }
        return node.isWord; // Return true if the word exists
    }

    // Search for a prefix in the Trie
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return false; // If prefix not found
            node = node.children[char];
        }
        return true; // Prefix exists
    }

    // Delete a word from the Trie
    delete(word) {
        const dfs = (node, index) => {
            if (index === word.length) {
                if (!node.isWord) return false; // Word doesn't exist
                node.isWord = false; // Unmark the end of the word
                return Object.keys(node.children).length === 0; // Check if the node is now a leaf
            }
            const char = word[index];
            if (!node.children[char]) return false; // Word doesn't exist
            const shouldDelete = dfs(node.children[char], index + 1);
            if (shouldDelete) {
                delete node.children[char]; // Remove the child node
                return Object.keys(node.children).length === 0 && !node.isWord; // Check if the current node is a leaf
            }
            return false;
        };
        dfs(this.root, 0);
    }

    // List all words in the Trie
    listWords() {
        const words = [];
        const dfs = (node, path) => {
            if (node.isWord) words.push(path.join("")); // Add the word to the result
            for (const char in node.children) {
                path.push(char); // Add character to the current path
                dfs(node.children[char], path); // Recursive call
                path.pop(); // Backtrack
            }
        };
        dfs(this.root, []);
        return words;
    }

    // Find words with a specific prefix
    findWordsWithPrefix(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return []; // If prefix not found
            node = node.children[char];
        }
        const words = [];
        const dfs = (node, path) => {
            if (node.isWord) words.push(prefix + path.join("")); // Add the word to the result
            for (const char in node.children) {
                path.push(char); // Add character to the current path
                dfs(node.children[char], path); // Recursive call
                path.pop(); // Backtrack
            }
        };
        dfs(node, []);
        return words;
    }

    // Count words in the Trie
    countWords() {
        let count = 0;
        const dfs = (node) => {
            if (node.isWord) count++; // Increment count for each word
            for (const char in node.children) {
                dfs(node.children[char]); // Recursive call
            }
        };
        dfs(this.root);
        return count;
    }

    // Find the longest common prefix
    longestCommonPrefix() {
        let prefix = "";
        let node = this.root;
        while (
            Object.keys(node.children).length === 1 &&
            !node.isWord // Ensure it's not the end of a word
        ) {
            const [nextChar] = Object.keys(node.children);
            prefix += nextChar;
            node = node.children[nextChar];
        }
        return prefix;
    }
}

// Example Usage
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("bat");
trie.insert("ball");
trie.insert("banana");

// Search for words
console.log(trie.search("apple")); // true
console.log(trie.search("bat")); // true
console.log(trie.search("cat")); // false

// Check prefixes
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("bal")); // true
console.log(trie.startsWith("zoo")); // false

// List all words
console.log(trie.listWords()); // ["apple", "app", "application", "bat", "ball", "banana"]

// Find words with a prefix
console.log(trie.findWordsWithPrefix("app")); // ["apple", "app", "application"]

// Count words
console.log(trie.countWords()); // 6

// Find longest common prefix
console.log(trie.longestCommonPrefix()); // ""

trie.insert("applepie");
console.log(trie.longestCommonPrefix()); // "app"

// Delete a word
trie.delete("apple");
console.log(trie.search("apple")); // false
console.log(trie.listWords()); // ["app", "application", "bat", "ball", "banana", "applepie"]

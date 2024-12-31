function wordfrequence(sentence) {
    // Convert to lowercase and remove punctuation using the correct regex
    const cleansedSentence = sentence.toLowerCase().replace(/[^\w\s]/g, '');
    
    // Split the sentence into words based on whitespace
    const words = cleansedSentence.split(/\s+/);
    
    // Initialize an empty object to store word frequencies
    const frequencies = {};
    
    // Loop through each word and count frequencies
    words.forEach(word => {
        if (word) {
            frequencies[word] = (frequencies[word] || 0) + 1;
        }
    });

    // Sort the word frequencies in descending order based on the count
    const sortedFrequencies = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);

    // Print the sorted frequencies
    sortedFrequencies.forEach(([word, count]) => {
        console.log(`${count} : ${word}`);
    });
}





//write a program that takes an English-language text file and a number N, and prints the top N words with their frequencies in descending order .e.g.
 
[bash]$ ./frequencies example.txt 10
5 : the
3 : and
2 : from
2 : his
2 : he
2 : it
2 : i
1 : man
1 : sprang
1 : chair
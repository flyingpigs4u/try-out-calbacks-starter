/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

// let suffixCipher = function(sent, obj) {
//     newSent = []
//     words = sent.split(" ");

//     for (let i in words) { 
//         let newWord = words[i]
//         ciphered = false

//         for (let funct in obj) { 
//             if (words[i].endsWith(funct)) {
//                 newWord = obj[funct](words[i])
//                 newSent.push(newWord)
//                 ciphered = true
//             }  
//         }
//         if (!ciphered) {
//             newSent.push(newWord)
//         }  
//     } 
//     return newSent.join(" ")
// };

let suffixCipher = function(sent, obj) {
    let words = sent.split(" ");
    let newWords = words.map(function(word) { // for every word in words, the function {} is applied
        for (let key in obj) { //the function first loops through each key in object
            if (word.endsWith(key)) { //if the word ends with the key string
               return obj[key](word) // return function passed with word 
            }
        }
        return word
    })
    return newWords.join(" ")
};


let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;

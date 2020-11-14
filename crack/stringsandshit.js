// Chapter 1 of Crack - Strings and Arrays

function isUnique (string) {
    for (i = 0; i < string.length; i++) {
        for (j = i+1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            } else return true;
        }
    }
}

console.log("isUnique");
console.log(isUnique("aaaaa"));
console.log(isUnique("abcd"));

function isUniqueCrack (string) {
    if (string.length > 128) {
        return false;
    }

    var char_set = [];
    for (i = 0; i < string.length; i++) {
        var val = string.charAt(i);
        if (char_set[val]) {
            return false;
        } 
        char_set[val] = true;

    }
    return true;

}

console.log("isUniqueCrack");
console.log(isUniqueCrack("aaaaa"));
console.log(isUniqueCrack("abcd"));

function checkPermutation (string1, string2) {
    // check if they are the same length, if not return false
    if (string1.length != string2.length) return false;

    // sort strings
    // must convert string to arrays to sort, the notation [...var] allows you to do this
    var sorted1 = [...string1].sort();
    var sorted2 = [...string2].sort();
    var actuallyTho = sorted1.toString().localeCompare(sorted2.toString());
    return (actuallyTho == 0);
}

console.log("checkPermutation");
console.log(checkPermutation("abc", "abcde"));
console.log(checkPermutation("abc", "bca"));
console.log(checkPermutation("asd", "abc"));


function urlify (string) {
    return encodeURIComponent(string);
}

// the hacky version
function urlify2 (string) {
    if (!string.includes(" ")) {
        return string;
    }
    // use regex to replace multiple spaces with one space
    // backslash is used to encase what you want to replace instead of quotation marks
    // \s\s+ is to cover most type of white space
    // /g means global --> covers the entire string
    var urlstring = string.replace(/\s\s+/g, " ");

    // do it again to replace single spaces with desired substring
    urlstring = urlstring.replace(/\s/g, "%20");

    return urlstring;
}

console.log("URLify");
console.log(urlify2("aaa     aaa aaa  aaa"));
console.log(urlify2("hello my name is greg"));
console.log(urlify2("askdhaskdh"));


function possiblyPalindrome (string) {
    if (string.length <= 1 || string === "") {
        return true;
    }

    var counts = char_counter(string);

    var oddCount = 0;
    for (char in counts) {
        if (!isEven(counts[char])) {
            oddCount++;
        }
    }

    if (oddCount > 1) {
        return false;
    } else return true;
}

function isEven (number) {
    if (number % 2 == 0) {
        return true;
    } else return false;
}


function char_counter (string) {
    // create a map for chars and count
    var counts = {};
    for (i = 0; i < string.length; i++) {
        // get char
        var character = string.charAt(i);
        
        // get the count for it, undefined if we don't know it yet
        var count = counts[character];
        
        // if we have the count, store it + 1, else store 1
        counts[character] = count ? count + 1 : 1
    }
    return counts;
}

console.log("char_counter");
console.log(char_counter("aaa"));
console.log("possiblyPalindrome");
console.log(possiblyPalindrome("aaaa"));
console.log(possiblyPalindrome("abcd"));
console.log(possiblyPalindrome("aavvxcc"));
console.log(possiblyPalindrome("aaabbccddeeff"));
console.log(possiblyPalindrome("aaabbbcccddeeff"));


function oneEdit (string1, string2) {
    if (string1.length == string2.length) {
        return oneReplace(string1, string2);
    }
    if (Math.abs(string1.length - string2.length) == 1) {
        return oneInsert(string1, string2);
    }
    return false;
}

function oneReplace (string1, string2) {
    var isDifferent = false; 
    // iterate through longer string
    for (i = 0; i < string1.length; i++) {
        // check if chars at index i are different
        if (string1.charAt(i) != string2.charAt(i)) {
            // if they are different from previous index
            if (isDifferent) {
                return false;
            }
            // set difference marker to true
            isDifferent = true;
        }        
    }
    return true;
}

function oneInsert (string1, string2) {
    var index1 = 0;
    var index2 = 0;

    while (index2 < string2.length && index1 < string1.length) {
        if (string1.charAt(index1) != string2.charAt(index2)) {
            if (index1 != index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}
console.log("oneEdit");
console.log(oneEdit("aaaa", "aaa"));
console.log(oneEdit("abc", "abd"));
console.log(oneEdit("asdf", "abcd"));
console.log(oneEdit("aaa", "aaaa"));

function stringCompression(string) {
    // check if string is empty
    if (string.length == 0) {
        return "";
    }

    var output = "";
    var count = 0;

    // iterate through entire string
    for (i = 0; i < string.length; i++) {
        // add 1 to counter to count for the first letter encountered
        count++;
        // if next letter is not the same, add the letter and count to the output
        if (string[i] != string[i+1]) {
            output += string[i]+count;
            // reset count for next letter encountered
            count = 0;
        }
    }
    return output;
}

console.log("stringCompression");
console.log(stringCompression(""));
console.log(stringCompression("aaabbbccc"));
console.log(stringCompression("aabbbccccd"));

// rotate NxN matrix by 90 degrees
// perform algorithm as such:
// for i = 0 to n
//     temp = top[i];
//     top[i] = left[i];
//     left[i] = bottom[i];
//     bottom[i] = right[i];
//     right[i] = temp;
function rotateMatrix (matrix) {
    // check if matrix is of 0 length in both directions
    
}
// check if s1 is s2 but backwards
function rotateString (s1, s2) {
    var s2ButReverse = s2.split("").reverse().join("");
    
    if (s1 === s2ButReverse) {
        return true;
    } else return false;
}

console.log("rotateString");
console.log(rotateString("abc", "cba"));
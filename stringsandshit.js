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

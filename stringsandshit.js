function isUnique (string) {
    for (i = 0; i < string.length; i++) {
        for (j = i+1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            } else return true;
        }
    }
}

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

console.log(isUniqueCrack("aaaaa"));
console.log(isUniqueCrack("abcd"));
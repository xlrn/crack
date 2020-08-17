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
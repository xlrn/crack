function mergeSort (unsortedArray) {
    
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    // const is within block scope
    // const must be declared, can change but not reassigned i.e. do not use "="
    // properties of the const can be changed/reassigned
    const mid = Math.floor(unsortedArray.length/2);

    // slice returns new array including the start but excluding the end 
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // concat because there will be one element remaining from either left or right
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex]
    items[rightIndex = temp];
}

function partition(items, left, right) {
    var pivot = items[Math.floor((left + right)/2)], //select middle element for pivot
        i = left,
        j = right;

    while (i < j) {
        //compare left to pivot
        while (items[i] < pivot) {
            i++; // move pointer right until it hits the pivot or you need to swap
        }
        // compare right to pivot
        while (items[j] > pivot) {
            j--; // move pointer left until it hits pivot or need to swap
        }
        // swap left and right
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { // recurse because left side has more items
            quickSort(items, left, index - 1);
        }
        if (index < right) { // recurse because right side has more items
            quickSort(items, index, right);
        }

    }
    return items;
}


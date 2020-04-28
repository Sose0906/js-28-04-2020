/*
Binary search with recursion
 */

function binarySearchRec(arr, el, additional = arr) {

    if (arr.length == 0) {
        return 'Empty array';
    }

    let mid = Math.floor(additional.length / 2);
    let left = additional.slice(0, mid);
    let right = additional.slice(mid);

    if (el === additional[mid]) {
        return arr.indexOf(el);
    }

    if (additional.length == 1) {
        return -1;
    }

    if (el > additional[mid]) {
        return binarySearchRec(arr, el, right);
    }

    if (el < arr[mid]) {
        return binarySearchRec(arr, el, left);
    }


}

binarySearchRec([1, 2, 3], 98)

/*
Binary search without recursion
 */

function binarySearch(arr, el) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (el === arr[middleIndex]) {
            return middleIndex;
        }
        if (el > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        }
        if (el < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 4)
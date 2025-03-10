function mergeSort(arr) {
    // if array is one length, return the array
    if (arr.length <= 1) {
        return arr;
    } else {
        // if array is two or more length, split array and sort
        const half = Math.floor(arr.length / 2);
        const left = arr.slice(0, half);
        const right = arr.slice(half, arr.length);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        const mergedArray = mergeArrays(sortedLeft, sortedRight);

        return mergedArray;
    }

}

function mergeArrays(arrOne, arrTwo) {
    const sortedArray = [];
    let arrOneIndex = 0;
    let arrTwoIndex = 0;

    while ((arrOneIndex !== arrOne.length) && (arrTwoIndex !== arrTwo.length)) {
        if (arrOne[arrOneIndex] < arrTwo[arrTwoIndex]) {
            sortedArray.push(arrOne[arrOneIndex]);
            arrOneIndex += 1;
        } else {
            sortedArray.push(arrTwo[arrTwoIndex]);
            arrTwoIndex += 1;
        }
    }

    if (arrOneIndex !== arrOne.length) {
        const one = arrOne.slice(arrOneIndex, arrOne.length);
        sortedArray.push(...one);
    }

    if (arrTwoIndex !== arrTwo.length) {
        const two = arrTwo.slice(arrTwoIndex, arrTwo.length);
        sortedArray.push(...two);
    }

    return sortedArray;
}


const first = mergeSort([3,1,2]);
console.log(first);

const second = mergeSort([10,2,8,4,5,3,7,6,9,1]);
console.log(second);

const third = mergeSort([4,6,3,5,7,23,34,45,23,1,1,3,6,7]);
console.log(third);
function fibs(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        if (i < 2) {
            arr.push(i);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }
    }
    return arr;
}
console.log(fibs(5));
console.log(fibs(8));

function fibsRec(num, arr = []) {
    
    if (num === 0) return arr;
    console.log("This was printed recursively");
    
    if (arr.length < 2) {
        arr.push(arr.length);
        return fibsRec(num-1, arr);
    } else {
        const val = arr.length;
        arr.push(arr[val-1] + arr[val-2]);
        return fibsRec(num-1, arr);
    }
}

console.log(fibsRec(5));
console.log(fibsRec(8));
const input = [4,5,4,5,8,5,7,8,9,8,7];

function removeDuplicate1(arr) {
    const result = [];
    let idx = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        } 
    }
    return result;
}

console.log(removeDuplicate1(input));
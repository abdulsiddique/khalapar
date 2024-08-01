/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0){
        return arr.slice();
    }
    let flatArray = [];
    for(let i = 0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        const nested = flat(arr[i],n-1)
        flatArray.push(...nested);

    }
    else {

        flatArray.push(arr[i])

    }}
    return flatArray;
};
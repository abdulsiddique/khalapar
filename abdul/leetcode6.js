/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    outputArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {

            outputArray.push(arr[i])

        }

    }

    return outputArray;
};
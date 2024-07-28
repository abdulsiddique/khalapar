/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let arr = Array;
    i= arr.length;
    arr = Object.values(obj);
    if(arr.length==0){
        return true;
    }
    else{
        return false ;
    }
};
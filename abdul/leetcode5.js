/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    var outputArray = []
    for(let k=0; k<arr.length; k++){
  
      outputArray[k]  = fn(arr[k],k);
        
    }
     
    return outputArray;
  };
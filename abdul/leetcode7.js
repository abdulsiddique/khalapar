/*Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.



/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result ;
    if(nums.length == 0){
        return init;
    }
    else 
    
    val = fn(init,nums[0])

      for(let i = 2 ; i<nums.length; i++){
        
       res1 = fn(val,nums[1]);
           res2 =    fn(res1,nums[2]);
              res3 = fn(res2,nums[3]);
            
           const lap = res3;
           return res3;
            }
        

    return res3;
    

};

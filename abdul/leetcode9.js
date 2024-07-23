/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) { 
    if(functions.length ==0){
    return function(x){
        return x ;
    }
     }
    else {
    return function(x) {
        let final = x ;
        for(let i= functions.length-1; i>=0;--i ){
            final= functions[i](final);
        }
        return final;
    }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
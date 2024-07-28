/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

    /* function createArray() {
     return [];
 }*/
        function createArray(...elements) {
     return elements;
 }
 
 
 
 
 let newArray = [];
         let i ;
          for(i = 0; i<arr.length; i+=size){
                    newArray.push(arr.slice(i, i + size));
          }
              
    
  
     
   
        return newArray;
     
 };
 
var createCounter = function(init) {

    

    function increment(){
 
 return init++;
     }
     function decrement(){
         return init--;
     }
     function reset(){
 return init;
 }    
 };

 createCounter(5);
 increment
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
     let newcounter = init;
     function increment (){
         return  ++newcounter;
     }
     function decrement (){
         return --newcounter;
     }
     function reset(){
         return (newcounter=init);
     }
     
   return { increment, decrement, reset };
 };
 
 /**
  * const counter = createCounter(5)
  * counter.increment(); // 6
  * counter.reset(); // 5
  * counter.decrement(); // 4
  */
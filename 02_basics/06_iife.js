// iife (immediately invoked function expression) is used to eliminate 
// problematic cases where the global scope variables become polluted by some function definitions

let counter = 0;

function increment() {
    counter++;
}

increment();
console.log(counter); // 1



/*
Syntax ->
 V.Imp -> putting a semi-colon at end of iife function is very much imp because the iife function defintion though is invoked
But doesn't know Where to stop the context of function 

( function_defintion )();

 */

function m1()
{
    console.log("Hey Tum kya kr rhe ho")
}
m1(); // must to apply semi-colon so that next executes


(function m1(){
    console.log(" hey i am iife normal function though having the same function name as above i.e m1 ")
})();



( () => {
    console.log("Hey I am iife arrow function ")
})();


/*

Without IIFE	                            With IIFE
Variables leak into global scope	        Variables stay confined in local scope
High chance of name collisions	            Very low risk of conflict
Hard to manage in large codebases	        Code is modular and encapsulated


*/

(
    function(){
        let cnt = 0;
        
        (() =>{
            for (let i = 0; i < 10; i++) {
                cnt += i;
            }
            console.log(cnt)
        })();

    }
)();

console.log(cnt) // you can't access cnt now as now it is wrapped in iife function
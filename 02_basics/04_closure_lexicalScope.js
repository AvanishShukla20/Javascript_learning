// we don't use var in modern practices because it is function scoped and not block scoped


let r = 80

if(true)
{
    let s = 90
    var p = 9
    console.log(r)
    console.log(s)
}


// console.log(s) // s is not defined in global scope So it gives error Which is Good
// console.log(p) // p is also not defined in global scope but still it doen't gives error ...This may create oproblem in many codebases 
// where javascript is used So Var is not used anymore


// ******************************Lexical Scoping*************************************

/* 
Lexical scope (also known as static scope) refers to the region of the source code in which a variable is defined and accessible. The lexical scope of an inner function is determined by where it is written in the source code, not where it's called.

So, when an inner function is defined inside an outer function, it has access to:

Its own local variables
Variables from the outer function
Variables from any parent scopes (all the way up to the global scope)
*/


// ***********************************(interview) Closure and Lexical Scope************************

 // Whenever an outer executes and ...
 // it contains an return of reference of inner2 function Then not only inner function But The Whole "Lexical Scope" of inner is also returned




/*
Even if the inner() function doesn’t use any variable from the outer function, it still has access to them in theory, because of lexical scope.
But here’s the key:
Closures are only created when the inner function actually references (i.e., uses) outer variables.
Here since inner() doesn’t use counter, no closure is formed over it.
Therefore, the JS engine is free to garbage collect counter once outer() finishes.
*/
// Ex1 ->

function outer() {
  let counter = 0;

  function inner() {
    console.log("I don't use counter.");
  }

  return inner;
}

const fn = outer();  // outer() executes fully
fn() 
fn()
fn()

// closure is enabled once inner uses some reference variabvle from outer func For Ex ->
function outer2() {
    let counter = 0;
  
    function inner2() {
      counter++;             // Accessing variable from outer's scope
      console.log(counter);
    }
  
    return inner2;
  }
  
  const fnt = outer2();  // outer2 runs ...and since it contains an return of reference of inner2 function .Whole "Lexical Scope" of inner2 is returned
  fnt(); // 1
  fnt(); // 2
  fnt();
  

// Even though outer()'s execution is done, the inner() function still has access to the counter variable because of lexical scoping.
// JavaScript engine keeps the variables from the outer function alive because inner is still referencing them.
// That preserved environment = Closure.

// *****************************************VERY IMPORTANT TO AGAIN SEE THAT PRACTICAL EXAMPLE BY CHAI AUR CODE LECTURE 49 TO EXPLAIN IN INTERVIEW*******************************
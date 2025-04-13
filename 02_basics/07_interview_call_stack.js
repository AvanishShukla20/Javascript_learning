/*
an execution context is an environment where the code is evaluated and executed

type of executional contexts ->
1. Global Execution context     ->  Default and always created once whenever the  JavaScript starts running your code
                                    It creates a global object (like Window object in browsers) and sets this , to global object created
                                    It  has Two main phases -> 
                                    a. Memory phase -> Storage of variables as unknown and storing only th definitions of function in global scope
                                    b. Execution Phase -> Execution of function, formation of call stacks , calculations etc are done here
2. Function Executional Context ->  Whenever you call a function.
                                    To execute it,  Everytime a new execution context is created and this execution context 
                                    created (placed on top of  call stack) has its own two Phases -> Memory Phase and Execution phase. Once Completed execution
                                    this execution context is removed and deleted , Then our flow comes back to parent execution stack.


3. Eval Execution context ->        When eval() is called, JavaScript creates a new execution context — just like it does for functions —
                                    but specific to the code inside eval().

*/
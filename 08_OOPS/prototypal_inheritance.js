// String/Array/Function -> Object -> null

// any property defined for the prototype of Object will be Available for all String/Array/Function objects
// BUT Vice-versa is not true

//Now to dynamically assign a object a as the property of protoype of object b -> Use Object.setprototypeof(b, a)

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


// modern syntax -> 

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "; // i want to develop a truelengthfunc() method avalilable to all String Object references as a property of prototype


String.prototype.trueLengthfunc = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLengthfunc()
"hitesh".trueLengthfunc()
"iceTea".trueLengthfunc()

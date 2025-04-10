// destructuring of an object and aliasing 

const course = {
    k1: "JavaScript",
    k2: "Python",
    k3: "C++"
  };

  const { k1: inst, k2: inst2 } = course;
  console.log(inst);   // "JavaScript"
console.log(inst2);  // "Python"

// use in place react props -> Will be Explored later on 
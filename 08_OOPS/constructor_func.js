function schoolData(name, rolno, marks, age)
{
    this.name = name;
    this.marks = marks;
    this.rolno = rolno;
    this.age = age

    this.isadult = function()
    {
        return this.age >= 18;
    }

    return this
}

// normal function call

// const st1 = schoolData("Advitiya", 23, 67, 16) // without a new keyword, this keyword  of above function refers to global object
// // this can only be printed if there is return this statement written above

// console.log(st1)
// console.log(st1.isadult());

// // with new keyword

// const st2 = new schoolData("Aman", 12, 94, 21)
// console.log(st2)



function coachingData(name, rolno, marks, age)
{
    this.name = name;
    this.marks = marks;
    this.rolno = rolno;
    this.age = age

    this.isadult = function()
    {
        return this.age >= 18;
    }

}

// See -> 

const rt1 = coachingData("nihaal", 34, 98, 23);
console.log(rt1)

const rt2 = new coachingData("manish", 45, 99, 22)
console.log(rt2)

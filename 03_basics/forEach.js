//************************************************  ForEach loop property of arrays *****************************/

// it takes parameter (values, index, array) in (callback function) defined under it

const m1 = ['tum', 'jo', 'aaye', 'jindagi', 'me', 'Baat', 'Ban', 'gayi']

// m1.forEach( (num, idx, arr) => {
//     console.log(idx, arr)
//     console.log(arr[idx], "or", num)

// })

const databaseArr = [
    {
        'name':"Anuj",
        score : 90,
        age: 18
    },
    {
        'name':"Agastya",
        score : 96,
        age: 20
    },
    {
        'name':"Gagan",
        score : 78,
        age: 19
    }
]


databaseArr.forEach( function (obj) {

    console.log(obj.age, obj.name)
})

// for each doesn't returns anything, it just iterates
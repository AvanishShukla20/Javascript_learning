// we are going to build multiple promises used in async javascript programming

// promise is an object ...The below is part of 3rd promise built by chai aur code tutorial

const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false;
        if (error == true) {
            reject('ERROR : Something went Wrong !!')
        } else {
            resolve({username:'Nibediya Bed', marks : 97, password:"345821"}) // passed an object as parameter

        }
    }, 2000)
})

promiseOne
.then(function(passedparameter)
{
    console.log(passedparameter)
})
.catch(function(error)
{
    console.log(error)
})


// chaining is told in promisetwo

const PromiseTwo = new promise(function(){
    setTimeout(function(){
        let error = false;
        if (error == true) {
            reject('ERROR : Something went Wrong !!')
        } else {
            resolve({username:'Avanish Shukla', marks : 98, password:"111aaaa"}) // passed an object as parameter

        }
    }, 2000)
})


PromiseTwo
.then(function(userinfo){
    console.log("Gets in first then, value returned from here will go in next then block")
    return userinfo.username
})
.then(function(usernamep){
    console.log(usernamep)
})
.catch(function(error){
    console.log(error)
})


// Use of async and await for consuming the promise made ...But We do not get a firm handling of erro here So we 
// have to use try catch block to handle errors

async function consumepromiseOne() {
    try{
        const responses = await promiseOne;
        console.log(responses)
    }
    catch(errors)
    {
        console.log(errors)
    }
}


consumepromiseOne();




//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER: ", a);
    
}

// console.log(a);
//console.log(b);
//console.log(c);

// {} ==> Scope
// Values inside the Scope {} are called local scope
// Values outside the scope {} are called global scope






function one(){
    const username = "Lubdha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    //two()
    
}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); 
}
//console.log(username);


// *********** Intrsting **********************

addone(5)
function addone(num){
    return num + 1
}

// addone(5)


addTwo(5)
const addTwo = function(num){
    return num + 2
}

//addTwo(5)















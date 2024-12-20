let balance = 1000

if(balance < 500){
    console.log("less than 500");
}else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 950) {
    console.log("less than 950");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmial = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmial) {
    console.log("User logged in");
    
}
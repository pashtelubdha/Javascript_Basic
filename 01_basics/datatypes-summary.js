// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100

const booleanIsLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 654667435476364676565886577869879709090n
console.log(typeof bigNumber);



// JavaScript is a dynamically typed language, but TypeScript is a statically typed language.

// Reference (non- Primitive)

// Array, Objects, Function


const heros = ["sushil", "Divyanshu", "Akhilesh"];
let myObj = {
    name: "Lubdha",
    age: 22
}

console.log(heros[1]);
console.log(myObj);

const myFunction = function(){
        console.log("Hello World");
        
}



// ***************** Memory *********************

//Stack(Primitive) Copy of declared variable
// Heap (Non- Primitive)  reference of original value, whatever you change it'll change in original value

let myYoutubename = "Lubdha's Kitchen"

let anothername = myYoutubename
anothername = "chai and gossip"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "lubdha@google.com"
console.log(userOne.email);
console.log(userTwo.email);


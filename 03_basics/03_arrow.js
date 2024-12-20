const user = {
    username: "Lubdha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`); 
        console.log(this);
         
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
console.log(this);



/* function chai(){
    let username = "hitesh"
    console.log(this.username);
}
*/
//chai()

// this can't be use in function


const chai = () => {
    let username = "hitesh"
    console.log(this);
    
}
chai()


// *****  Arrow function *******

/*const addTwo = (num1, num2) => {
    return num1 + num2
}
*/

//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => {username: "hitesh"}
console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5]

//myArray.forEach()













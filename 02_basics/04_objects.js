
//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 //console.log(tinderUser);

 const regularUser = {
    email: "sakshi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sakshi",
            lastname: "Malekar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({} ,obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "l@gmail.com"
    },
    {
        id: 2,
        email: "u@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    },
    {
        id: 4,
        email: "dx@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    price: "999",
    CourseInstructor: "Hitesh"
}

//console.log(course.CourseInstructor);
 

const {CourseInstructor: Instructor} = course
console.log(Instructor);

// React.js

const navbar = ({company}) => {

}
navbar(comapny = "ubiqedge")

 
//************** API ********************

/*
{
    name: "Lubdha",
    "coursename": "js in hindi",
    "price": "free"
}
*/
[
    {},
    {},
    {}
]


























// Array --> resizable, mix data types, can't be access using arbitary strings as index
// zero indexed
// array copy operation create shallow copies
// shallow copies whoses properties share the same reference as source object
// Deep copies whoes do not share same reference


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);


// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()

console.log(myArr.includes(3));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);




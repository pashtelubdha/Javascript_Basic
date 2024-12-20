// Immediately Invoked Function Exressions (IIFE)


// we use iffe  for avoid global scope pollution
(function chai(){
    console.log(`DB CONNECTED`);
})();

(function aurcode() {
    console.log(`DB CONNECTED TWO`);
})();

( () => {
    console.log(`DB CONNECTED THREE`);
})();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("Lubdha")
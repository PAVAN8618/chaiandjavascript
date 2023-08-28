// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    //console.log(`DB CONNECTED`);
})();

( (name) => {
    ///console.log(`DB CONNECTED TWO ${name}`);
} )('pawan')


const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr)
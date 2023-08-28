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
//console.log(myArr)


const obj = {name: "John", age: function () {return 30;}, city: "New York"};
const myJSON = JSON.stringify(obj); //

//console.log(myJSON);
//{"name":"John","city":"New York"}
//remove function from obj using stringify 

const obj1 = {name: "John", age: function () {return 30;}, city: "New York"};

obj1.age = obj1.age.toString();
const myJSON1 = JSON.stringify(obj1);


//console.log(myJSON1);// stringify will return a obj to string

//The JSON.stringify() function will convert any dates into strings.

//console.log(typeof(myFunction(90,1)));

function myFunction(y,x) {
   // console.log(arguments.length);
  return y * x;
}


function myFunction(x, y = 10) {//y have default values if we pass the value in the then value will taken if it is not not passed then i will take default values in the script. 
    return x + y;
  }
 console.log(myFunction(5,22));
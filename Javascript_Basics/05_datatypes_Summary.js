// Primitive datatype 
// 7 types : String, Number, boolean , null,undefined , Symbol, BigInt 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp= null
let userEmail = undefined
const id = Symbol('321')
const anotherId=Symbol('321')
console.log(id === anotherId);
const bigNumber = 838893893893893838n

//Referance type(Non Primitive)
// Arrays ,Objects,Functions

const heros = ["Shaktiman","dogesh","powerranger"]
let myObj={
    name:"Ankit",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World ");    
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);
console.log(typeof myObj);







let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33 
//"33abc" => NaN
// true => 1 ,false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true , 0 => false
// "" =>false 
//"Ankit" => true

let someNumber = 32

let stringNumber =  String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//*************************** Operations ******************************
let value = 3
let negvalue = - value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = "Ankit"
let str3 = str1 + str2

console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
//exception 
// It follows the ecma script guide line 
console.log(2+2+"1");


console.log((3+4)*5%3);

// These above code are bad practice as a developer 

//Tricky conversion
console.log(+true);
console.log(+"");

// ASSIGNMENT OPERATOR
let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCounter1 = 200
++gameCounter1;
console.log(gameCounter1);
// referances
//https://tc39.es/ecma262/#sec-abstract-operations




















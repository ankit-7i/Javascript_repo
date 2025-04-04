console.log("A");
console.log("N");
console.log("K");
console.log("I");
console.log("T");

function sayMyName(params) {
console.log("A");
console.log("N");
console.log("K");
console.log("I");
console.log("T");    
}

sayMyName()

function addTwoNum(number1,number2){//parameter
    console.log(number1+number2);   
}
addTwoNum(4,6)
addTwoNum("3",4)
addTwoNum(3,null)

const res = addTwoNum(3,5)
console.log("result",res);

function addFunction(number3,number4) {
    let result = number3+number4
    return result  
}
const result = addFunction(5,5)
console.log("result",result);

function loginUserMessage(username) {
    if(username === undefined){
        console.log("please enter a username");
        return   
    }
    return `${username} justlogged in `   
}
console.log(loginUserMessage("Ankit"));
console.log(loginUserMessage());


// more in function
function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(200,400,500));

function calculateCartPrice1(...num2) {//rest operator 
    return num2
}
console.log(calculateCartPrice1(200,400,500));

// object pssing in function
const user ={
    username:"ankit",
    price:200
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObject(user)
handleObject({
    username:"sam",
    price:899
})

// arrays passing in function

const myNewArray = [300,400,600,899] 

function returnfirstval(getArray){
    return getArray[0]
}

console.log(returnfirstval(myNewArray));
console.log(returnfirstval([300,400,600,899]));


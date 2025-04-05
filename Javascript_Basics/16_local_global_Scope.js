//let a = 10
//const b = 20 
var c = 30 
//console.log(a);
//console.log(b);
//console.log(c);
// global scope 
//{} -> scope
if (true){
let a = 10
const b = 20 
var c = 30 
} 
// block scope 
//console.log(a);
//console.log(b);
console.log(c);
let a = 300
if (true){
    let a = 20
    const b = 30 
    console.log("INNer scope ",a);

}
console.log(a);


// nested scope 
function one (){
    const username = "Ankit"

    function two (){
        const website="github"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
if (true){
    const username = "ankit"
    if(username === "ankit"){
        const website = "yt"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username)
//++++++*** Tricky things ***++++++++
addone(5)
function addone(num){
    return num  + 1
}
//addone(5)
console.log(addone(5));
// function AS wll as expression
addTwo(5)
const addTwo = function(num){
    return num +2
}
//addTwo(5)

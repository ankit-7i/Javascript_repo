const user = {
    username:"Ankit",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to course`); 
        console.log(this);
         
    }
}
user.welcomeMessage()
user.username="sam altman"
user.welcomeMessage()
console.log(this);
//note: in browser windows object and in node env empty object


function chai(){
    console.log(this);  
}
chai()

const one = function(){
    let name = "Amn"
    console.log(this.name)
}
one()

const op = () =>{
    let username ="Akt war"
    console.log(this);  
}
op()

//arrow function
//{}=>
    const me = (num1,num2) => {
        return num1 + num2
    }
    console.log(me(4,5));
// implicit arrow func

const us = (num3,num4) => num3+num4
console.log(us(3,5));


const you = (num5,num6) => (num5+num6)
console.log(you(8,9));


// if we use {} return statement must 

// in array 
//const myArray = [2,4,6,8,10]
//myArray.forEach(() =>())
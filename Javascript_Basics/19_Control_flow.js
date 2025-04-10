// if statement 
//if (condition- true){
// execution sucees 
//}
//if (condition -false){execution failed }

if (2=="2"){
    console.log("execution success");
}

if( 2!= 3){
    console.log("logged ");
    
}
const temp = 42
if(temp < 50){
    console.log("Less than 50");
    
}
console.log("temp is greater than 50 ");



// <,>,<=,>=,==,!=,===
// else key word 
const res = 34
if(res === 24){
    console.log("passed");
}
else{
    console.log("failed");
}



//ex 
const score = 199
if(score >100){
    let Power = "fly"
    console.log(`User Power:${Power}`);
} 
//console.log(`User Power:${power}`); not possible  due to const but using var it can accessible out side 
//ex
const bal = 1000
//if (bal >500)console.log("test"),console.log("test 2"); bad practice
if (bal < 500){
    console.log("less than 500 ");
} else if (bal < 750){
    console.log("less than 750");
}
else if (bal < 999){
    console.log("less than 999");
}
else{
    console.log("less than 1500");
}

// real life use 
const userLoggedIn =  true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 1 == 1){
    console.log("Allow to purchase course");   
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ");
}



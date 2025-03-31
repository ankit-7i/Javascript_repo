// singleton
// object literals
const mySym = Symbol("key1")

const Jsuser = {
    name:"Ankit",
    "fullname":"Ankit Rout",
    mySym:"MyKey",
    [mySym]:"keysuper",
    age:23,
    location:"Bhubaneswar",
    email:"2370056@kiit.ac.in",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["fullname"]);
console.log(Jsuser.mySym);
console.log(typeof Jsuser.mySym);
console.log(Jsuser[mySym]);

Jsuser.email = "ankit513151979@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email="ank07@gmail.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello Jsuser");    
}

Jsuser.greeting2 = function(){
    console.log(`javascript dev,${this.name}`);

}
console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());










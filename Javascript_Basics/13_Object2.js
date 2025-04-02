//const fbUser = new Object()//singleton object 
const fbUser = {}// non singleton object
 fbUser.id="123abc"
 fbUser.name="Akt"
 fbUser.isLoggedin = false
console.log(fbUser);

const regUser = {
    email:"akt07@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ankit",
            lastname:"Rout"
        }
    }
}
console.log(regUser.fullname);
console.log(regUser.fullname.userfullname);
console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {4:"e",5:"f"}
const obj4 = {obj1, obj2}
const obj5 = Object.assign({},obj1,obj2,obj3)//(object,souce) 
const obj6 = {...obj1, ...obj2}
console.log(obj4);
console.log(obj5);
console.log(obj6);

const users = [
    {},{},{}
]
users[1].email
console.log(fbUser);

console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));
console.log(fbUser.hasOwnProperty('isLoggedin'));










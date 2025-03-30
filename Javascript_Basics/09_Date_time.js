// Dates 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,1,2)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDate1 =new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-03-2024")
console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//`$`

newDate.toLocaleString('default',{
    weekday:"long",
})

















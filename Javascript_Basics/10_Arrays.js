// Array

const myArr=[0,1,2,3,4,5]
const myHeros=["Shaktiman","Nagraj","me"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

console.log(myArr[0]);
console.log(myArr[2]);
console.log(myHeros);

// Arrays methods 
myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

//myArr.unshift(8)// bad thing
//myArr.shift()
//console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(13));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice and Splice 

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);

console.log(myn1);
console.log(myn2);























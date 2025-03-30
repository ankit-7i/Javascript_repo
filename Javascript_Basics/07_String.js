const name = "Ankit"
const repoCount=4
// console.log(name + repoCount +"Value"); outdated 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Aktwarrior')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "    Ankit    "
console.log(newStringone);
console.log(newStringone.trim());



const url="https://ankitwebsite.com/ankit%45rout07"
console.log(url.replace('%45','_'));

console.log(url.includes('suspect'));


console.log(gameName.split('_'));










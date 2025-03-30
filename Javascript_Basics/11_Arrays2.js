const marvel_heros =["thor","loki","Ironman"]
const dc_heros=["superman","batman","flash"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[2][1]);
// push  adds new arrays elements into existing array 
// concat creates new array using both array elements 
const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,4,5,6,[7,8,9],[10,11,[12,13,15]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ankit"))
console.log(Array.from("Ankit"))
console.log(Array.from({name:"Ankit"}))// interview topic 


let score1 = 188
let score2 = 192
let score3 = 287
console.log(Array.of(score1,score2,score3));




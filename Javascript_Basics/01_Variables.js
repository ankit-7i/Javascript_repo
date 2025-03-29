const account_Id = 102234 //can't be changeble 
let account_Email = "ankit07@google.com"//changeble 
var account_Password ="3456"// changeble 
account_City="Bhubaneswar"

let account_state;
//account_Id = 2235 // not allowed
account_Email="akt@gmail.com"
account_Password="0077" 
account_City = "Chennai"

console.log(account_Id);
console.table([account_Id,account_Email,account_Password,account_City])
console.table([account_Id,account_state])

/* 
prefer not to use var :-
Because of issue in block scope and functional scope 


we can create var without declaring let,var & const but it a bad practice of coding.

If we create a var without assigning value it will mark it as undefined 
*/
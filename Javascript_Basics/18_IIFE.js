// Immediately Invoked Function Expressions (IIFE)
function coffee(){
    console.log(`DB CONNECTION`);
}
//coffee()
(function faluda(){
    // named FE
    console.log(`faluda order successful`);
    
})();
// to reduce global scope polllution we use FE
((name) =>{
    //simple FE with parameter
    console.log(`Hi bro i am ${name}`);
    
})('ankit');


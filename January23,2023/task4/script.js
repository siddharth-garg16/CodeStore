//var are globally or functional scoped according to how they are defined
var tester = "hey hi";
    
function newFunction() {
    var hello = "hello";
}
console.log(tester); //prints: hey hi
console.log(hello); // error: hello is not defined


//var variable can be updated and re-declared
var greeter = "hey hi";
greeter = "say Hello instead";


//var variables are hoisted at the top of their scope and assigned the value of undefined.
console.log (greet);
var greet = "hoisting"


//var are not block scoped while let are
var greeting = "hey";
var times = 4;
if (times > 3) {
    var greeting = "say Hello instead"; 
}
console.log(greeting) // "say Hello instead"

let time = 4;
if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined



//let can be updated but not re-declared.
let msg = "say Hi";
// let msg = "say Hello instead"; // error: Identifier 'msg' has already been declared



//const cannot be updated or re-declared
const gt = "say Hi";
gt = "say Hello instead";// error: Assignment to constant variable.
//arrays
// can store different datatypes like lists in python--multidimensional too
// let books = []; empty array

// let books = ["Maths", "Physics"];
// console.log(books);
// console.log(typeof books);
 


// let books = new Array(); //empty array

// let books = new Array("Maths", "Physics");
// console.log(books);
// console.log(typeof books);
// console.log(books[1]);


// ------------------------------------------operations on array-----------------------
let subjects = ["DSA", "CN", "DBMS", "OS"];
console.log(subjects.length); //elements in array
console.log(subjects);
console.log(Array.isArray(subjects)); //tells if it is array..typeof returns object as it object of array class

//push() add element at the end
subjects.push("SE");
console.log(subjects);

//unshift() add element at the start
subjects.unshift("Compiler");
console.log(subjects);

//pop() remove element from the end
subjects.pop();
console.log(subjects);

//shift() removes element from the start
subjects.shift();
console.log(subjects);

//splice() removes element from certain index and upto how much
subjects.splice(1, 2); //removes CN and DBMS
console.log(subjects);

// empting the entire array
// subjects = []; first method
// subjects.length = 0;
// console.log(subjects); --> []

// indexOf() find the first occurence of the element(index) else -1
console.log(subjects.indexOf("OS")); 

// split()
let text = "This is written in JS";
let wordarr = text.split("X");
console.log(wordarr);

// join()
let words = ["hello", "there"];
let sentence = words.join("X");
console.log(sentence);

// concat()
let arr1 = ["random1", "random2"];
let arr2 = ["randomX", "randomY"];
console.log(arr1.concat(arr2));

//-------------------looping through array---------------------
let myarr = ["element1", "element2", "element3", "element4"];

// normal for
for(let i=0; i<myarr.length; i++){
    console.log(`Element ${i} is ${myarr[i]}`);
}

//foreach (it is a function)
myarr.forEach(myfunc);
function myfunc(value){
    console.log(value);
}

//for of
for(val of myarr){
    console.log(val);
}


//------------------------------------------------------------------------------------------------------------------------------


//objects

//object

let person = {
    name:"Siddharth Garg",
    age: 21
};
console.log(person);

console.log(person.name); //accessing using dot notation --useful to set value
console.log(person['age']); //using property name itself --useful to get value
console.log(person.height); //--> undefined

person.age = 22; //modified value
console.log(person.age);

person.weight = 80; //added new property
console.log(person);

delete person.weight; //delete the property

//check if it has that property
console.log('height' in person); //returns booleans

//for in loop
for(let key in person){
    console.log(key + " " + ":" + " " + person[key]);
}

//method --any function associated with object is called method

//1st way of making method--anonymous function assigned to sayHello which is assigned to that object
person.sayHello = function(){
    console.log("Hello from sayHello");
}
person.sayHello();

//2nd way --normal function and then assigned to the object
function greetFunc(){
    console.log("Hello from greet");
}
person.greet = greetFunc();

//3rd way --anonymous function inside object
let person2 = {
    name:"Random",
    age: 23,
    sayHello: function(){
        console.log("Hello");
    }
};
person2.sayHello();

//4th way--introduced in ES6
let person3 = {
    name:"Random",
    age: 23,
    sayHello(){
        console.log("Hello! My name is "+ this.name +" and I have a" + " " + car.model);
    }
};

//this keyword
let car = {
    brand:"Tata",
    model:"Harrier"
};
person3.sayHello();
// const Character ='luisa';
// console.log(Character);
// const input = document.querySelectorAll('input');
// console.log(input);
// input.forEach(input => {
//     console.log(input)
// })
var Character = 'mario';
var age = 30;
var isBlackBelt = false;
// if you hiv er on that you will see the type and it cannot be changed later on
//Character = 30; // error
//age ='name' // error
Character = "admin"; // it will work
age = 50; // it will work
// use of fun 
var circ = function (diameter) {
    return diameter * 2;
};
console.log(circ(20));
console.log(circ('Hello')); // alows to compile ans will be not a number nana
// defining the type to safe from error
var circs = function (diameter) {
    return diameter * 2;
};
console.log(circs(20));
//console.log(circs('Hello'));// will throw error on compli time as diameter is defined
// TypeScript Tutorial #4 - Objects & Arrays
var names = ['sandeep', 'rawat', 'yoshi'];
names.push('todu');
//names.push(10);// argument of type number is not assignable to parameter of string
// use hower on names it wil show you it is a array of strings       
var mixed = ['nsamdee', 19, false];
// now it is a array which can have nimber sting or boolean
// declare at start and use 
// object 
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// so now the object is defined as name and belt will be string and age will be number in object ninja
ninja.age = 40; // allowed as age in number
ninja.name = 'rohan'; // allowed as it is string
// we already defiuned it so we cannot add addional properties
//ninja.skill = 'figh'// error
// note : structure cant be changes once screated object.e no addition of variables nor deletion no type chnage 
// jo karna hai inital obj me hi karo
// Typestric is quite strict so we can get neet and clean code down the line
//TypeScript Tutorial #5 - Explicit Types
////// explicit type
//initilising the value with type so only a type can be assigned
var character;
character = 'sandeep';
console.log(character);
////// arrays
//let managers: string[];
//but we cannot use push method here so instead of this use this (console error)
var managers = [];
managers.push('sandeep');
/////union types (to make mi array)
var mixedArray = [];
mixedArray.push(1); //will work
mixedArray.push('sandeep'); // will work
//mixedArray.push(false) // compile error
//for variable
var HumanName; // no need to use paranthesis
///// objects
//how to declare a pre-intialised object 
var ninjaOn;
ninjaOn = { name: 'sandeep', age: 30 };
ninjaOn = { name: 'sandeep', age: 30, skill: "runner" };
var ninjaTwo;
//ninjaTwo = {name:'sandeep', age:30} // error
ninjaTwo = { name: 'sandeep', age: 30, skill: "runner" };

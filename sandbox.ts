// const Character ='luisa';
// console.log(Character);

// const input = document.querySelectorAll('input');
// console.log(input);

// input.forEach(input => {
//     console.log(input)
// })

let Character = 'mario';
let age = 30;
let isBlackBelt = false;

// if you hiv er on that you will see the type and it cannot be changed later on
//Character = 30; // error
//age ='name' // error
Character = "admin" // it will work
age =50 // it will work



// use of fun 
const circ = (diameter)=>{
    return diameter*2;
}

console.log(circ(20));
console.log(circ('Hello')); // alows to compile ans will be not a number nana

// defining the type to safe from error
const circs = (diameter:number)=>{
    return diameter*2;
}

console.log(circs(20));
//console.log(circs('Hello'));// will throw error on compli time as diameter is defined


// TypeScript Tutorial #4 - Objects & Arrays
let names = ['sandeep','rawat','yoshi']
names.push('todu')
//names.push(10);// argument of type number is not assignable to parameter of string
// use hower on names it wil show you it is a array of strings       

let mixed = ['nsamdee',19,false];
// now it is a array which can have nimber sting or boolean
// declare at start and use 


// object 
let ninja ={
    name:'mario',
    belt:'black',
    age:30
}
// so now the object is defined as name and belt will be string and age will be number in object ninja

ninja.age = 40 // allowed as age in number
ninja.name = 'rohan'// allowed as it is string

// we already defiuned it so we cannot add addional properties
//ninja.skill = 'figh'// error


// note : structure cant be changes once screated object.e no addition of variables nor deletion no type chnage 
// jo karna hai inital obj me hi karo
// Typestric is quite strict so we can get neet and clean code down the line



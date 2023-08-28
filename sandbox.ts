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



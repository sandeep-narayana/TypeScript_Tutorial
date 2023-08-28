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
const circ = (run:number)=>{
    return run*2;
}

console.log(circ(20));
//console.log(circ('Hello')); // alows to compile ans will be not a number nana

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



//TypeScript Tutorial #5 - Explicit Types
////// explicit type
//initilising the value with type so only a type can be assigned
let character:string;
character = 'sandeep'
console.log(character);


////// arrays
//let managers: string[];
//but we cannot use push method here so instead of this use this (console error)
let managers: string[] = [];
managers.push('sandeep');
/////union types (to make mi array)
let mixedArray: (string|number)[]=[];
mixedArray.push(1) //will work
mixedArray.push('sandeep') // will work
//mixedArray.push(false) // compile error

//for variable
let HumanName:string|number; // no need to use paranthesis


///// objects
//how to declare a pre-intialised object 
let ninjaOn:object;
ninjaOn = {name:'sandeep', age:30}
ninjaOn = {name:'sandeep', age:30, skill:"runner"}

let ninjaTwo:{
    name:string,
    age:number,
    skill:string
}
//ninjaTwo = {name:'sandeep', age:30} // error

ninjaTwo = {name:'sandeep', age:30, skill:"runner"}


// TypeScript Tutorial #6 - Dynamic (any) Types
let humanAge : any;
humanAge = 25; // number
humanAge ='sandeep'; // string
humanAge = {name:"sandeep"}; // object


let mixedArrays :any[]=[]; // now add anything of anytype
let mixedArrays2 :{
    name:any,
    age:any
}; // only two specific variable with anytype


// TypeScript Tutorial #8 - Function Basics
let greet = ()=>{
console.log("Hello");
}

let greets:Function;
greets=()=>{
    console.log("Hell");
}
greets=(a:number, b:number)=>{
    console.log(a+b);

}

greets(5,10);

// op[tional parameter]
greets=(a:number, b:number, c?:number)=>{
    console.log(a+b);
    console.log(c);
}

// with default value if not gioven value
greets=(a:number, b:number, c:number|string = 10)=>{
    console.log(a+b);
    console.log(c);
}

//return type
greets=(a:number, b:number, c?:number)=>{
   return a+b;
}

//autometically ther return type is number
let res = greets(10,11);
// res is of number type it refer the greets

// explicit saying that it will return number
greets=(a:number, b:number, c?:number): number=>{
    return a+b;
 }

//  in case of console the return value is void



// TypeScript Tutorial #9 Type Aliases
type StringORNum = string|number;
let myVariable:StringORNum;  //now it can be string or number

// TypeScript Tutorial #10 - Function Signatures
// to spicify the type of function 

//function with signature and retun type
//let greetings:Function

//with signature
let greetings:(a:string, b:string)=>void;  // this is function dec with signature
//use
greetings = (name:string,says:string)=>{
console.log(`${name} says ${says}`);
}

greetings("Sandeep",'Hello');



// TypeScript Tutorial #12 - Classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    // to initialise use constructor otherwise it will give you one error
    constructor(c:string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount =a;
    }

    // method
    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

// now use construct initilise variable and obj will be made
let inovoice1 = new Invoice("Mario", "goods", 10000);
console.log(inovoice1);
console.log(inovoice1.format());

// array of invoices
let arraysOFInvoices: Invoice[]=[]; // once Invoice object can be added



// TypeScript Tutorial #12 - Classes  
//public  variables or methods   = can be acees by anybody
//privete variables or methods  = we cant access from only inside the class through method from outside the class
//readonly variables or methods = read but cant change it (matabla obj bante time ji assign hua vahi dikhega and change nahi hoga)

//use chatgpt for more details


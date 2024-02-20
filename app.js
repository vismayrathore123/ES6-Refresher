
// //let and const

// var myName2="Vismay";
// cName="Shanu";
// console.log(myName2);

// var cName="Amit";
// function f(){
//      var cNames="Uday";
//     console.log(cNames);
// }
// f();
// console.log(cName);

// const myName="Dipesh";
// const myName1="Keju bahi";
// console.log(myName);

// const myNames="Vismay";
// console.log(myNames);


// //arrow function 
// //before arrowfunction=>
// hello=function(){
//     return "hello world";
    
// }
// // with ArrowFunction=>
// hello=()=>{
//     return "hello world";
// }
// // Arrow function without parameter=>
// const gfg=()=>{
//     console.log("Hello world");
// }
// gfg();

// //arrow function with parameter=>
// const gfg1=(x,y,z)=>{
//     console.log(x+y+z);
// }
// gfg1(1,2,3);

// //arrow function with default parameter=>
// const gfg2=(x,y,z=10)=>{
//     console.log(x+y+z);
// }
// gfg2(10,20);

// export and import(modules)
// import { hello } from "./sell.js";
// hello();
// import { data  as da} from "./sell.js";
// console.log(da);
//or
// import {hello,data as da} from "./sell.js"
// hello();
// console.log(da);
//or
// import * as bundle from "./sell.js"
// bundle.hello();
// console.log(bundle.data);

// import person from "./customer.js";
// console.log(person)

// //class and objects
// class Customer{
//     constructor(n){
//         this.name=n;
//     }
//     Buy(){
//         console.log(this.name);
//     }
// }
// class GuestCustomer extends Customer{
//     hello(){
//         console.log("bird")
//     }
// }
// let customer1=new Customer("vismay");
// console.log(customer1);
// customer1.Buy();

//spread and rest operator

let list=["Audi","BMW","TESLA","Feerari"];
let newList=[...list,"BMW","Bugati","Bolero"];
console.log(newList);

function hello (... all){
    console.log(all);
}
hello();
hello(1,2)


//primitive and reference type 
// primitive type =number, string 
// referene type =object, array 

let num1=2;
let num2=num1;
console.log(num1);
console.log(num2);
num2=50;
console.log(num2);


let person={
    name:"vismay"
}
let person2=person;
console.log(person2);


//map function
let array1=[2,5,6,8];
let array2=array1.map(function(x){
    return x*2;
});
console.log(array2)
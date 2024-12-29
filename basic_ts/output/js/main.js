"use strict";
// void 💚
// const ageCal = (name: string = 'ibrahim', age: number= 27): void=>{
//     console.log(name);
// }
// // never 💚
// const info = (name: string = 'ibrahim', age: number= 27): never=>{
//     throw new Error;
// }
// aArray typed💚💚💚
// const food: (string | number | boolean)[] = ['potato', 'orange', 'banana', 22, true];
// food.push(33)
// console.log(food);
// const userInfo = ['ibrahim', 22, false];
// userInfo.pop();
// userInfo.push('ohid')
// console.log(userInfo);
// Object type 💚💚💚
// const info = {
//     name: 'ibrahim',
//     age: 27,
//     isOk : true
// }
// info.name = 'ohid';
// info.age = 33
// const userInfo: {name: string, age: number, skills: boolean} = {
//     name: 'ibrahim',
//     age: 33,
//     skills: false
// }
// const Info: {name: string, age: number, skills?: boolean} = {
//     name: 'ibrahim',
//     age: 33,
//     skills: false
// }
// const Info: {readonly name: string, age: number, skills?: boolean} = {
//     name: 'ibrahim',
//     age: 33,
//     skills: false
// }
// type user = {
//     name: string,
//     age: number,
//     skills?: boolean
// }
// const devs:user ={
//     name: 'ohid',
//     age: 33,
// }
//enum💚💚💚
// enum skills {
//     mern = 'mern stack',
//     laravel = 'php with laravel',
//     ios = 'flutter / native'
// }
// const skill = skills.laravel;
// console.log(skill);
//class 💚💚💚
// class Student {
//     name: string;
//     age: number;
//     skills: boolean;
//     constructor(name: string, age: number, skills: boolean){
//         this.name = name,
//         this.age = age,
//         this.skills = skills
//     }
// }
// const student = new Student('Ibrahim', 20, true);
// console.log(student.name);
//function 💚💚💚
// const myFun = (a: number, b: number)=>{
//     return a + b;
// }
// myFun(3, 5)
//type 💚💚💚
// const userDetails = (id: string | number, user: {name: string, age: number})=>{
//     console.log(`User id is ${id} name is ${user.name} and age is ${user.age}`);
// }
// const sayHello = (user:{name: string, age: number})=>{
//     console.log(`hello ${user.age > 50 ? 'Sir' : 'Mr'} ${user.name}`);
// }
// simple type way 💛💛💛
// type stringToNum = string | number;
// type userInfo = {name: string, age: number}
// const userDetails = (id: stringToNum, user: userInfo)=>{
//     console.log(`User id is ${id} name is ${user.name} and age is ${user.age}`);
// }
// const sayHello = (user:userInfo)=>{
//     console.log(`hello ${user.age > 50 ? 'Sir' : 'Mr'} ${user.name}`);
// }
// function signature 💚💚💚
// let add: (x: number, y: number) => number;
// add = (a: number, b: number)=>{
//     return a + b;
// }
// console.log(add(3, 6));
// let calculate : (x: number, y: number, z: string) => number;
// calculate = (a: number, b: number, c: string)=>{
//     if(c === 'add'){
//         return a + b;
//     }
//     else{
//         return a - b;
//     }
// }
// console.log(calculate(10, 5, 'add'));
// class 💚💚💚
// class userInfo{
//     name: string;
//     age: number;
//     country: string
//     constructor(n: string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){
//         console.log(`i am ${this.name}. i am ${this.age} old. i live in ${this.country}`);
//     }
// }
// const ibrahim = new userInfo('ibraim', 27, 'bangladesh');
// console.log(ibrahim);
// console.log(ibrahim.age);
// const ohid = new userInfo('ohid', 22, 'bangladesh');
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        return `i am ${this.name}. i am ${this.age} years old. i live in ${this.country}`;
    }
}
const rahim = new player('Rahim', 22, 'BD');
//console.log(rahim);
const Rafi = new player('Rafi', 33, 'AFN');
//console.log(Rafi.age);
const Player = [];
Player.push(rahim);
console.log(Player);

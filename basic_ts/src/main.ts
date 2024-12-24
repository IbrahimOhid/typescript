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


type user = {
    name: string,
    age: number,
    skills?: boolean
}

const devs:user ={
    name: 'ohid',
    age: 33,
}
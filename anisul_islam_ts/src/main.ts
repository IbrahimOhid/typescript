// built-in-data-type: string, number, boolean, void, null, undefined  💚💚💚💛

// let userId: number;
// let firstName: string;
// let lastName: string;
// let fullName: string;
// let isSkilled: boolean;

// userId = 101;
// firstName = 'Mohammad';
// lastName = ' Ibrahim';
// isSkilled = true;

// fullName = firstName.concat( lastName);
// console.log(fullName);
// console.log(`My name is ${fullName}`);
// console.log(fullName.split(' '));

// union-data-type: string | number | boolean  💚💚💚💛

// let userInfo: (string | number | boolean);
// userInfo = 'ohid';
// userInfo = 27;
// userInfo = true;

// function person(userId:string | number){
//     console.log(userId);
// }
// person('101');
// person(2);

// array type  💚💚💚💛

// let userName: string[];
// userName = ['ibrahim', 'ohid'];
// console.log(userName);

// let firstName: Array<string>;
// firstName = ['Mohammad Ibrahim'];
// console.log(firstName);

// let multipleType: (string | number | boolean)[];
// multipleType = ['mohammad', 27, true];

// let allUser: string[];
// allUser = ['mohammad', 'rahim', 'abir', 'karim', 'babu'];
// console.log(allUser.sort());

// tuple type 💚💛💚💚

// let user: [number, string];
// user = [101, 'ibrahim']
// console.log(user);

// let allUser: [string, number, boolean]
// allUser = ['ohid', 27, true]
// console.log(allUser);
// allUser.push( 22, false, 'ohid');
// console.log(allUser);

// enums type: numeric, string, heterogenous 💚💛💚💚

// numeric enum 💛💛💛

// enum requestType {
//     receiveData,
//     saveData,
//     deleteData
// }

// console.log(requestType);
// console.log(requestType.saveData);

// enum userInfo{
//     firstId = 1,
//     secondId = 3,
//     thirdId
// }
// console.log(userInfo);
// console.log(userInfo.thirdId);
// console.log(userInfo.firstId);

// string enum 💛💛💛

// enum userName {
//     firstName = 'Mohammad',
//     lastName = 'Ibrahim'
// }
// console.log(userName);
// console.log(userName.lastName);


// heterogenous enum 💛💛💛

// enum userInfo{
//     name = 'Ohid',
//     age = 27,
//     isSkilled = 'true'
// }
// console.log(userInfo);
// console.log(userInfo.isSkilled);

// object data type 💚💛💚💚

// let user1: {userName: string, id: number};
// user1 = {userName : 'ibrahim', id : 101};
// console.log(user1);

// let user2: {userName: string, id?: number};
// user2 = {userName: 'rahim'};
// console.log(user2);

// let users: object[];
// users = [];

// let user1: {userName: string, id: number};
// user1 = {userName: 'Mohammad', id: 103};
// users.push(user1);
// console.log(users);

// let user2: {userName: string, id: number};
// user2 = {userName: 'Ibrahim', id: 101};
// users.push(user2);
// console.log(users);

// create custom data type 💚💛💚💚

// type userInfo = {userName: string, age: number};

// let users: userInfo[];
// users = [];

// let user1: userInfo;
// user1 = {userName:'Ibrahim', age: 27}
// users.push(user1);

// let user2: userInfo;
// user2 = {userName: 'Ohid', age: 25};
// users.push(user2)

// let user3: userInfo;
// user3 = {userName: 'Rafiya', age: 22};
// users.push(user3);

// console.log(users);

// type requestType = 'GET' | 'POST';

// let getRequest: requestType;
// getRequest = 'GET';
// console.log(getRequest);


// type RequestType = 'POST' | 'GET';

// function handelRequest(requestType: RequestType){
//     if(requestType === 'GET'){
//         alert('YES')
//     }
// }
// handelRequest('GET')


// class & Object 💚💛💚💚  : properties, methods, constructor & class object

// class userInfo{
//     // properties
//     userName: string;
//     age: number;

//     // constructor
//     constructor(u: string, a: number){
//         this.userName = u;
//         this.age = a;
//     }

//     // methods
//     displayUser(): void{
//         console.log(`UserName: ${this.userName}, Age: ${this.age}`);
//     }
// }

// let user1 = new userInfo('Ibrahim', 27);
// user1.displayUser();

// let user2 = new userInfo('Ohid', 22);
// user2.displayUser();


// class newUser{
//     name: string;
//     roll: number

//     constructor(n: string, r: number){
//         this.name = n;
//         this.roll = r;
//     }

//     showUser():void{
//         console.log(`Name: ${this.name}. Roll: ${this.roll}`);
//     }
// }

// let userOne = new newUser('Rafiay', 1);
// userOne.showUser();

// let userTwo = new newUser('Kawser', 2);
// userTwo.showUser()

// inheritance 💚💛💚💚

// class user{
//     userName: string;
//     age: number;

//     constructor(u: string, a: number){
//         this.userName = u;
//         this.age = a;
//     }

//     displayUser(): void{
//         console.log(`UserName: ${this.userName}. Age: ${this.age}`);
//     }
// }

// class NewStudent extends user{
//     studentId: number;

//     constructor(u: string, a: number, s: number){
//         super(u, a);
//         this.studentId = s;
//     }
    
//     displayStudent():void{
//         console.log(`userName: ${this.userName}, age: ${this.age} & StudentId: ${this.studentId}`);
//     }
// }

// let newStudent = new NewStudent('Mohammad', 28, 101);
// newStudent.displayStudent();


// function signature 💚💚💚💚💚
//💛💛💛
// let user1: () => void;
// user1 = () =>{
//     console.log('I love TS');
// }
// user1();
//💛💛💛
// let user2: (name: string)=> void;
// user2 = (n: string)=>{
//     console.log(`I am ${n}.`);
// }
// user2('Ibrahim');
//💛💛💛
// let user3: (userName: string, age: number)=> string;
// user3 = (uN: string, a: number)=>{
//     return(`${uN} is ${a} Years Old.`)
// }
// console.log(user3('Ohid', 27));

//interface as types 💚💚💚

// interface InputInfo{
//     id: number,
//     name: string,
//     age: number
// }

// let usersInfo: InputInfo[] = [];

// let user1: InputInfo = {
//     id: 23,
//     name: 'Ohid',
//     age: 27
// }
// usersInfo.push(user1);


// let user2: InputInfo = {
//     id: 25,
//     name: 'rafiya',
//     age: 22
// }
// usersInfo.push(user2);
// console.log(usersInfo);

// class implementing interface 💚💚💚

// interface allUser {
//     allInfo: ()=> string
// }

// class user implements allUser{
//     constructor(private name: string, private age: number){}
//     allInfo = ()=>{
//         return `I am ${this.name}. I am ${this.age} Years Old`
//     }
// }

// let user1 = new user('Mohammad', 27);
// console.log(user1.allInfo());


// interface allInfo {
//     userInfo : ()=> string;
// }

// class user implements allInfo{
//     constructor(private name: string, private age: number){}

//     userInfo = ()=>{
//         return `Name: ${this.name}, Age: ${this.age}`
//     }
// }

// let user1 = new user('Potato', 22);
// console.log(user1.userInfo());

// Generics 💚💚💚💚

const printFunction = <X, Y, Z> (name: X, age: Y, user: Z)=>{
    return `${name}, ${age}, ${user}`
}

printFunction('Ibrahim', 22, true)
printFunction(23, 'ohid', true)
printFunction(true, 22, 'ibrahim')
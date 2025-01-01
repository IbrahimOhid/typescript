"use strict";
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
var userInfo;
(function (userInfo) {
    userInfo["name"] = "Ohid";
    userInfo[userInfo["age"] = 27] = "age";
    userInfo["isSkilled"] = "true";
})(userInfo || (userInfo = {}));
console.log(userInfo);
console.log(userInfo.isSkilled);

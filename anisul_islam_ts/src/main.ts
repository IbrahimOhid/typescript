// built-in-data-type: string, number, boolean, void, null, undefined

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isSkilled: boolean;

userId = 101;
firstName = 'Mohammad';
lastName = ' Ibrahim';
isSkilled = true;

fullName = firstName.concat( lastName);
console.log(fullName);
console.log(`My name is ${fullName}`);
console.log(fullName.split(' '));
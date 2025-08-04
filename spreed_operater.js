// Spread operator for objects

let user1 = {
    name : 'Jack',
    age: 22
};
let user2 = {...user1,course: 'JUaascript'};
user2.name = 'Mary';
console.log(user1);
console.log(user2);
// Given an array of JSON. Each JSON has the field name marks1,marks2, and marks3.
// Create an array of JSON with each JSON having the field name, marks1,
// marks2, marks3 and totalMarks. Note that if any of the marks  is missing in the original JSON , take it to be 0.
//  Use spread operator and object destructuring.

const arr = [
    {name: 'Mary',marks1:25,marks2:30,marks3:40},
    {name: 'Bob',marks2:22,marks3:33},
    {name: 'Dave',marks3:19},
    {name: 'Tim',marks1:11},
    {name: 'Jack'},
];

const arr1 = arr.map(st=>{
    let {marks1=0,marks2=0,marks3=0} = st;
    let totMarks = marks1+marks2+marks3;
    let obj = {...st,totalMarks:totMarks};
    return obj;
})

console.log(arr1)
console.log(arr)

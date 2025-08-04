// Define a function to multiply 5 numbers . 
// It takes 5 parameters n1,n2,n3,n4 and n5 and returns
// their product. Give default values to the parameters 
// so the same function can be used to multiply 2,3,4 or 5
// numbers.

function multiply(n1,n2=1,n3=1,n4=1,n5=1){
    console.log(n1,n2,n3,n4,n5);
    return n1*n2*n3*n4*n5;
}
console.log(multiply(1,2,3,4,5));
console.log(multiply(1,2,3,4));
console.log(multiply(1,2,3));
console.log(multiply(1,2));
console.log(multiply(1));

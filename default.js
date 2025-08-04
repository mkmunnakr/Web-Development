// Define a function which takes 4 parameters, target ,
// s1, s2 and s3 and return true if the sum of s1,s2,and s3 is 
// greater than the target . 
// It is known that s1,s2 and s3 will not be provided
// always. Given appropriate default values.

let check = (target,s1=0,s2=0,s3=0) => {
    let total = s1+s2+s3 ;
    console.log(total);
    return total > target;
}

console.log(check(22,2,5));
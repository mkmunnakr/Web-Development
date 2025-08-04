// Given a json with fields as product, 
// price and quantity. 
// Create another JSON with product , price and quantity,
// along with discount and finalAmount. If quantity is 
// less than 8, discount is 10% otherwise it is 15%. 
// Use spread operator and object destructuring.

let obj = {product: 'PR01',price:10,quantity:5};
//discount , finalAmount
let {price,quantity} = obj;
let discPercent = quantity > 8 ? 0.15 : 0.10;
let discount = discPercent * price * quantity;
let finalAmount = price*quantity - discount;
let obj1 = {...obj,discount:discount,finalAmount:finalAmount};
console.log(obj);
console.log(obj1);
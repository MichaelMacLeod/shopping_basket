var shopper = require('./basket');
var assert = require('assert');

describe("TShopping Basket", function(){
  
//1. find total cost of basket: 
// var totalCost = 0
// for(index in shopper.items){
//   console.log(shopper.items[index]);
//   totalCost += shopper.items[index]['price'];
// // }

//THIS WORKS: for (var i = 0; i < shopper.items.length; i++) {
//   totalCost = totalCost + shopper.items[i].price;
// };
// console.log(totalCost);

});


//move total cost function to basket. 

//3. should get 10% discount off a basket worth over £20: 

//4. Certain items are buy one get on free, this should be considered. 

//5. If the customer has a valid discount card then they get and additional 5% off. 


// Test drive your objects.
// Commit after every passing test. 
//Three for price of two. 
//Refactor. Pull out discounter. 
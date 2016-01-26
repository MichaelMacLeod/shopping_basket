var shopper = require('./basket');
var assert = require('assert');

//1. find total cost of basket: 

describe("Shopping Basket", function(){
  it('should tell us the total is ', function(){
  shopper.totalCost();
  assert.equal(570, shopper.cost);
  });



});


//move total cost function to basket. 

//3. should get 10% discount off a basket worth over £20: 

//4. Certain items are buy one get on free, this should be considered. 

//5. If the customer has a valid discount card then they get and additional 5% off. 


// Test drive your objects.
// Commit after every passing test. 
//Three for price of two. 
//Refactor. Pull out discounter. 
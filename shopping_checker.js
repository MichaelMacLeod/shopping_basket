var shopper = require('./basket');
var assert = require('assert');

//1. find total cost of basket: 

describe("Shopping Basket", function(){
  it('should tell us the total is ', function(){
    shopper.totalCost();
    assert.equal(570, shopper.cost);
  });


  //2. should get 10% discount off a basket worth over £20: 
  it('should reduce the total cost by 10% if the basket is worth over £20', function(){
    shopper.discount();
    assert.equal(564.3, shopper.discount)
  });

  });




//3. Certain items are buy one get one free, this should be considered. 



//4. If the customer has a valid discount card then they get and additional 5% off. 



// Test drive your objects.
// Commit after every passing test. 
//Three for price of two. 
//Refactor. Pull out discounter. 




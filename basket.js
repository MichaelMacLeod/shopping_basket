var myBasket = {
  cost: 0,
  items:[
  {
    name:'bread',
    price: 150, 
    bogof: false
  },

  {
    name:'jam',
    price: 90,
    bogof: true
  },

  {
    name:'beer' ,
    price: 200, 
    bogof: false
  },

  {
    name:'crisps', 
    price: 70, 
    bogof: true
  },

  {
    name:'apples', 
    price: 60, 
    bogof: true
  }],

};
  totalCost: function(){
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      var price = item.price;
      this.cost = this.cost + price;
    }
  },

  discount: function(){
    var totalCost = 

    if totalCost >= 20){
  discount = true;
}
}
}






module.exports = myBasket;




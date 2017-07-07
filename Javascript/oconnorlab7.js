var pizza = {
  name: 'pizza',
  price: 9.20
}

var gophers = {
  name:'gophers',
  price: 14.50
}

var grahamcrackers ={
  name: 'graham crackers',
  price: 3.40
}

var applesauce = {
  name: 'applesauce',
  price: 3.75
}

var macaroons = {
  name: 'macaroons',
  price: 12.50
}

var yogurt = {
  name: 'yogurt',
  price: 2.50
}

var cheese = {
  name: 'cheese',
  price: 4.65
}



var shoppingList = [];

shoppingList.splice(0,0, pizza, gophers, grahamcrackers, applesauce, macaroons, yogurt,cheese);



var total = 0;



function add(item){
  shoppingList.push(item);

}

add({name: 'strawberries', price: 4.00})




function remove(index, amountToRemove){
  shoppingList.splice(index, amountToRemove);
}

remove();


shoppingList.forEach(function(x){
  console.log((x.name) + ' - $' + (x.price).toFixed(2))
});
for(var i = 0; i < shoppingList.length; i++){
  total=(shoppingList[i].price + total) * 1.06;
} console.log('total price - $' + total.toFixed(2))

let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';
for (var i = 0; i < groceries.length; i++){
  if (i>=1){
    shoppingList += ', ';
  }
  shoppingList += groceries[i];
}
console.log(shoppingList)
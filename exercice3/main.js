var input = document.getElementById("input");
var addItem = document.getElementById("addItem");
var shoppingList = document.getElementById("shoppingList");

function newproducts(course) {
    // add to products 
  var products = document.createElement("products");
  products.innerHTML = course;
    //add prodcts to shoppinglist
  shoppingList.appendChild(products);
}

addItem.onclick = function() {
    //function to save in var course the input after press button 
  var course = input.value;
    //verify lenght input if is not null save it
  if(course.length > 0) {
    newproducts(course);
  }
};

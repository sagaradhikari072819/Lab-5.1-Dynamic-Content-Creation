//1. Add Products:
// Test adding products with different names and prices.
// Ensure each product appears in the list with the correct price.

//2. Remove Products:
// Test removing products from the cart.
// Verify that the total price updates accurately after removing items.

//3. Edge Cases:
// Attempt to add products with empty names or invalid prices and ensure the application handles these cases gracefully.

//4. Enhance the App (Optional):
// Allow users to update the quantity of products in the cart and recalculate the total price.

const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
cart.addEventListener('click', removeItem)
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}



addProductButton.addEventListener('click', (event)=>{
  const inputText = productNameInput.value
const inputPrice = productPriceInput.value
if (inputText === "" || inputPrice === ""){
alert('Please enter the product and price.')
return
}
if (inputPrice <= 0){
  alert ('Please enter the valied price.')
  return
}

console.log(inputText)
let li = document.createElement('li')
li.textContent = inputText
li.dataset.price = inputPrice
const removeButton = document.createElement('button')
removeButton.textContent = 'Remove'
li.appendChild(removeButton)
cart.appendChild(li)
console.log(Number(inputPrice))
updateTotalPrice(Number(inputPrice))
})

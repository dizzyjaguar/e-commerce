import morningGlories from '../data/morning-glories.js';
import renderLineItems from './render-line-items.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const tableBody = document.getElementById('the-table-body');
const orderTotalCell = document.getElementById('grand-total');

// making a variable that stores our localstorage object known as cart
const json = localStorage.getItem('cart');
let cart;
// if that data exists then parse it so we can manipulate it in our for loop and add it dynamically into our table
if (json) {
    cart = JSON.parse(json);
// otherwize our cart is an empty array
} else {
    cart = [];
}
// loop through our shopping cart data that was parsed from local storage so now we can manipulate it and add it dynamically to our table
for (let i = 0; i < cart.length; i++) {
    let currentLineItem = cart[i];
    const flower = findById(currentLineItem.id, morningGlories);
    const renderedProduct = renderLineItems(currentLineItem, flower);

    tableBody.appendChild(renderedProduct);
}

const orderGrandTotal = calcOrderTotal(cart, morningGlories);
orderTotalCell.textContent = 'Grand Total: ' + '$' + orderGrandTotal;

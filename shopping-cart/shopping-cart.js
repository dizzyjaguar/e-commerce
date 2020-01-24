import morningGlories from '../data/morning-glories.js';
import renderLineItems from './render-line-items.js';
import { findById, calcOrderTotal } from '../common/utils.js';

const tableBody = document.getElementById('the-table-body');
const orderTotalCell = document.getElementById('grand-total');

const json = localStorage.getItem('cart');
let cart;
if (json) {
    cart = JSON.parse(json);
} else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    let currentLineItem = cart[i];
    const flower = findById(currentLineItem.id, morningGlories);
    const renderedProduct = renderLineItems(currentLineItem, flower);

    tableBody.appendChild(renderedProduct);
}

const orderGrandTotal = calcOrderTotal(cart, morningGlories);
orderTotalCell.textContent = 'Grand Total: ' + '$' + orderGrandTotal;

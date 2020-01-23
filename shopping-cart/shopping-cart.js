import morningGlories from '../data/morning-glories.js';
import cart from '../data/cart.js';
import renderLineItems from './render-line-items.js';
import { findById, calcLineItem } from '../common/utils.js';

const tableBody = document.getElementById('the-table-body');

for (let i = 0; i < cart.length; i++) {
    let currentLineItem = cart[i];
    const flower = findById(currentLineItem.id, morningGlories);
    const renderedProduct = renderLineItems(currentLineItem, flower);

    tableBody.appendChild(renderedProduct);
}
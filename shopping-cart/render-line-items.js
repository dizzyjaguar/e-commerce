const renderLineItems = (cartLineItem, product) => {
    const tableRow = document.createElement('tr');

    const qtyCell = document.createElement('td');
    qtyCell.textContent = cartLineItem.quantity;
    tableRow.appendChild(qtyCell);
    
    
    const productCell = document.createElement('td');
    productCell.textContent = product.name;
    tableRow.appendChild(productCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = product.price.toFixed(2);
    tableRow.appendChild(priceCell);

    const totalPriceCell = document.createElement('td');
    const totalOfThisLine = cartLineItem.quantity * product.price;
    totalPriceCell.textContent = totalOfThisLine.toFixed(2);
    tableRow.appendChild(totalPriceCell);

    return tableRow;
};

export default renderLineItems;
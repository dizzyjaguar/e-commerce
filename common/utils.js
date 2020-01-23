export const findById = (someId, someArray) => {
    for (let i = 0; i < someArray.length; i++){
        const item = someArray[i];
        if (item.id === someId){
            return item;
        }
    }
};

export const calcLineItem = (quantity, amount) => {
    const totalLineItem = quantity * amount;
    return (totalLineItem);
};

export const calcOrderTotal = (cartArray, productsArray) => {
    let orderTotal = 0;
    
    for (let i = 0; i < cartArray.length; i++) {
        const lineItem = cartArray[i];
        const flower = findById(lineItem.id, productsArray);
        const lineItemTotal = calcLineItem(lineItem.quantity, flower.price);
        orderTotal += lineItemTotal;
    }
    return (orderTotal);
};
import morningGlories from '../data/morning-glories.js';

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

const FLOWER_KEY = '__flowers';

const populateProductsLocalStorage = () => {
    const flowersAlreadyExist = localStorage.getItem(FLOWER_KEY);

    if (!flowersAlreadyExist) {
        const stringyFlowers = JSON.stringify(morningGlories);
        localStorage.setItem(FLOWER_KEY, stringyFlowers);
    }
};

export const getProducts = () => {
    populateProductsLocalStorage();

    const products = localStorage.getItem(FLOWER_KEY);
    const parsedProducts = JSON.parse(products);

    return parsedProducts;
}
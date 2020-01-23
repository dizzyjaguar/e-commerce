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

import morningGlories from '../data/morning-glories.js';
import renderProduct from './render-product.js';

//const flowers = getProducts();

const flowerList = document.getElementById('flowers-list');
const addButton = document.getElementById('add-product');


addButton.addEventListener('click', (_eventObject) => {
    _eventObject.preventDefault();

    const theForm = document.querySelector('form');
    
    const data = new FormData(theForm);
    
    const newFlower = {
        id: data.get('id'),
        name: data.get('name'),
        photo: data.get('photo'),
        price: data.get('price')
    };   

    console.log(newFlower);
    //flowerList.push(newFlower);

    const stringyFlowers = JSON.stringify(flowerList);
    localStorage.setItem('_flowers', stringyFlowers);

    const element = renderProduct(newFlower);

    element.querySelector('button').remove();

    flowerList.appendChild(element);  

});


    


for (let i = 0; i < morningGlories.length; i++) {
    const flower = morningGlories[i];
    const theDom = renderProduct(flower);
    theDom.querySelector('button').remove();

    flowerList.appendChild(theDom);
}
import morningGlories from '../data/morning-glories.js';
import renderProduct from './render-product.js';

const flowerList = document.getElementById('flowers-list');

for (let i = 0; i < morningGlories.length; i++) {
    const flower = morningGlories[i];
    const theDom = renderProduct(flower);
    flowerList.appendChild(theDom);
}

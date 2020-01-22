import renderProduct from '../products/render-product.js';

const test = QUnit.test;

QUnit.module('Render Morning Glory Product');

test('render a Morning Glory product', function(assert) {
    const knowliansBlack = {
        id: 'knowlians black',
        name: 'Knowlians Black',
        image: 'https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFMOR137-1_medium.jpg',
        genera: 'Ipomoea-Purpurea',
        color: 'dark-red, black',
        price: 3.50,
    };

    const knowliansBlackListItem = renderProduct(knowliansBlack);

    const theRealHTML = knowliansBlackListItem.outerHTML;

    console.log(knowliansBlackListItem);
    const expectedHTML = '<li class="Ipomoea-Purpurea"><div class="product-card"><img class="product-image" src="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFMOR137-1_medium.jpg"><div class="product-description-div"><p class="product-description">Knowlians Black</p><p class="product-price">$3.50</p><button class="product-button" value="knowlians black">Add</button></div></div></li>';
  
    assert.equal(theRealHTML, expectedHTML);
});

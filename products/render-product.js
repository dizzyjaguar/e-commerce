const renderProduct = (flower) => {
    const listItem = document.createElement('li');
    listItem.className = flower.genera;

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    listItem.appendChild(productCard);

    const image = document.createElement('img');
    image.src = '../assets/' + flower.image;
    productCard.appendChild(image);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'product-description-div';
    productCard.appendChild(descriptionDiv);

    const productDescription = document.createElement('p');
    productDescription.className = 'product-description';
    descriptionDiv.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    descriptionDiv.appendChild(productPrice);

    const usd = flower.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    productPrice.textContent = usd;

    const productButton = document.createElement('button');
    productButton.className = 'product-button';
    productButton.textContent = 'Add';
    productButton.value = flower.id;
    descriptionDiv.appendChild(productButton);

    return listItem;
};

export default renderProduct;
import { findById } from '../common/utils.js';

const renderProduct = (flower) => {
    const listItem = document.createElement('li');
    listItem.className = flower.genera;

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    listItem.appendChild(productCard);

    const image = document.createElement('img');
    image.className = 'product-image';
    image.src = flower.image;
    productCard.appendChild(image);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'product-description-div';
    productCard.appendChild(descriptionDiv);

    const productDescription = document.createElement('p');
    productDescription.className = 'product-description';
    productDescription.textContent = flower.name;
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
    // making it so the button actual sends data to the local storage for the shopping cart
    productButton.addEventListener('click', () => {
        // looking for cart in local storage 
        let json = localStorage.getItem('cart');
        // initializing the cart
        let cart;
        // if the cart exists in JSON then take it out of JSON through it into an array so we can manipulate it later
        // parse takes it from JSON and turns it into an array so that we can manipulate it
        if (json) {
            cart = JSON.parse(json);
        }
        // if its not existing make array anyway
        else {
            cart = [];
        }
        // checking if an item is already in the cart and if not its still setting the item as a varaible
        let someSpecificItem = findById(flower.id, cart);
        // if the added item does NOT exist already in the cart array then, create an object for the item with its ID and a starting quantity of 1
        if (!someSpecificItem) {
            someSpecificItem = {
                id: flower.id,
                quantity: 1
            };
            // then add that item into our shopping cart array
            cart.push(someSpecificItem);
            // otherwize if that item already exists than just add another point onto that items quantity property within the cart array
        } else {
            someSpecificItem.quantity++;
        }
        // now we turn our cart array back into a string so that we can throw it into the local storage, which local storage 
        json = JSON.stringify(cart);
        // literally putting the cart into local storage with the .setItem() method
        localStorage.setItem('cart', json);
        
        alert('Added 1 ' + flower.name + 'to your cart');
    });


    descriptionDiv.appendChild(productButton);

    return listItem;
};

export default renderProduct;
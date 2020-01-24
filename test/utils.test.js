import morningGlories from '../data/morning-glories.js';
import cart from '../data/cart.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;

test('find a product by its ID', function(assert) {
    const id = 'heavenly blue';
    const expected = 'Heavenly Blue';

    //Act 
    const iFoundAFlower = findById(id, morningGlories);

    //Assert

    // Make assertions about what is expected valid result
    assert.ok(iFoundAFlower);
    assert.equal(iFoundAFlower.name, expected);
});

test('calculate an item quantity and amount', function(assert) {
    const qty = 5;
    const amt = 2.50;
    const expected = 12.50;

    const lineTotal = calcLineItem(qty, amt);

    assert.equal(lineTotal, expected);
});

test(' calculate grand total of the order', function(assert) {
    const expected = 69.25;

    const theGrandTotal = calcOrderTotal(cart, morningGlories);

    assert.equal(theGrandTotal, expected);
})
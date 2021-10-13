// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderShirt } from '../render-products.js';
import { shirts } from '../data/shirts.js';
import { addItem, calcOrderTotal, findById, getCart, clearCart } from '../utils.js';
import { cart } from '../data/cat-data.js';
import { renderLineItem } from '../render-line-items.js';

const test = QUnit.test;

test('renderShirt should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="shirt-card"><h2>Gold Arm</h2><img src="./assets/shirt.webp"><h3>Gold sleeve on black shirt.</h3><h4>UFC</h4><p>100</p><button id="1" class="add-button">Add</button></div>`;
    const shirt1 = shirts [0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShirt(shirt1).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing renderLineItem', (expect) => {
    const expected = '<tr><td>Gold Arm</td><td>$100.00</td><td>2</td><td>$200.00</td></tr>';
    const cartItem = cart[0];
    const shirtData = shirts[0];
    const actual = renderLineItem(cartItem, shirtData).outerHTML;
    expect.equal(actual, expected);
});

test('findById should return the item matching the ID', (expect) => {
    const expected = {
        id: '4',
        name: 'Red Flowers', 
        img: './assets/shirt4.jpg', 
        description: 'Red flowers on see through black shirt',
        category: 'Party',
        price: 80,
    };

    const actual = findById('4', shirts);
    expect.deepEqual(actual, expected);
});

test('test calOrderTotal should come back as a total', (expect) => {
    const expected = 440;
    
    const actual = calcOrderTotal(cart, shirts);
    expect.deepEqual(actual, expected);
});

test('getCart should return the cart if it exist', (expect) => {
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '4', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    const cart = getCart();
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty if the cart does not exist', (expect) =>{
    localStorage.removeItem('CART');
    const cart = getCart();
    expect.deepEqual(cart, []);
});

test('addItem will increment the quantity', (expect) => {
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '4', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 3 },
        { id: '4', qty: 3 }
    ];

    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its empty', (expect) => {
    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();

    expect.deepEqual(cart, expected);

});

test('clearCart Empties out the cart', (expect) => {
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '4', qty: 3 }
    ];
    
    localStorage.addItem('CART', JSON.stringify(fakeCart));
    localStorage.removeItem('CART');
    const expected = [];
    const actual = localStorage.getCart('CART');
    expect.deepEqual(actual, expected);
});
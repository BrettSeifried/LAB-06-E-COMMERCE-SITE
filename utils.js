import { shirts } from './data/shirts.js';

export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calcOrderTotal(cart, shirts) {
    let orderTotal = 0;
    for (let item of cart){
        const shirt = findById(item.id, shirts);
        orderTotal = orderTotal + shirt.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function clearCart(){
    localStorage.removeItem('CART');
    window.location.replace('..');
}

export function getProducts(){
    //get products
    let lsShirts = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(lsShirts);
    // if no noproducts, seed the data
    if (!products){
        const shirtsString = JSON.stringify(shirts);
        localStorage.setItem('PRODUCTS', shirtsString);
    }
    return products || shirts;
}

export function addProduct(newShirt){
    //get
    let lsShirts = getProducts();
    //modify
    lsShirts.push(newShirt);
    //set
    let shirtsString = JSON.stringify(lsShirts);
    localStorage.setItem('PRODUCTS', shirtsString);
}

// export function removeProduct(oldShirt){
//     //get shirt by ID
//     let lsShirts = localStorage.getItem('PRODUCTS');
//     const products = JSON.parse(lsShirts);
//     const id = products.indexOf();
//     const removeShirt = products.splice(id, 1);
//     // remove it from array

//     // send back
// }
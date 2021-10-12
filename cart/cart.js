import { shirts } from '../data/shirts.js';
import { cart } from '../data/cat-data.js';
import { findById } from '../utils.js';
import { renderLineItem } from '../render-line-items.js';
// import { calcOrderTotal } from '../utils.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const shirtData = findById(cartItem.id, shirts);
    // const tr = document.createElement('tr');

    // const tdName = document.createElement('td');
    // tdName.textContent = shirtData.name;

    // const tdPrice = document.createElement('td');
    // tdPrice.textContent = `$${shirtData.price}`;

    // const tdQty = document.createElement('td');
    // tdQty.textContent = cartItem.qty;

    // const tdTotal = document.createElement('td');
    // tdTotal.textContent = `$${cartItem.qty * shirtData.price}`;

    const tr = renderLineItem(cartItem, shirtData);

    // tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}

// const tfoot = document.getElementById('tfoot');
// for (let sumCart of ){
//     const tdSum = calcOrderTotal('tdTotal');
//     tdSum.textContent = tdSum;
// }
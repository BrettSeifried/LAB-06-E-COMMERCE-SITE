import { toUSD } from './utils.js';

export function renderLineItem(cartItem, shirtData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = shirtData.name;

    const tdPrice = document.createElement('td');
    const price = shirtData.price;
    tdPrice.textContent = toUSD(price);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    const total = cartItem.qty * shirtData.price;
    tdTotal.textContent = toUSD(total);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}
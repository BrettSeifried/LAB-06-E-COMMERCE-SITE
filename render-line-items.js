export function renderLineItem(cartItem, shirtData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = shirtData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${shirtData.price}`;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = `$${cartItem.qty * shirtData.price}`;

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}
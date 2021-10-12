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
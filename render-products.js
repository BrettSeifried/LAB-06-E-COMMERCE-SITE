export function renderShirt(shirt){
    const shirtCard = document.createElement('div');
    shirtCard.classList.add('shirt-card');

    const shirtHeader = document.createElement('h2');
    shirtHeader.textContent = shirt.name;

    const img = document.createElement('img');
    img.src = shirt.img;

    const shirtDescrip = document.createElement('h3');
    shirtDescrip.textContent = shirt.description;

    const shirtCat = document.createElement('h4');
    shirtCat.textContent = shirt.category;

    const shirtPrice = document.createElement('p');
    shirtPrice.textContent = shirt.price;

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.id = shirt.id;
    addBtn.classList.add('add-button');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.id = shirt.id;
    removeBtn.classList.add('remove-button');

    shirtCard.append(shirtHeader, img, shirtDescrip, shirtCat, shirtPrice, addBtn, removeBtn);
    return shirtCard;
}
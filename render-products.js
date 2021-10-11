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

    const button = document.createElement('add')

    shirtCard.append(shirtHeader, img, shirtDescrip, shirtCat, shirtPrice);
    return shirtCard;
}
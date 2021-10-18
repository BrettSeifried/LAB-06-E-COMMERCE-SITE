// import functions and grab DOM elements
import { renderShirt } from './render-products.js';
// import { shirts } from './data/shirts.js';
import { addItem, getProducts } from './utils.js';

// initialize global state
const shirtList = document.getElementById('shirt-list');
// const removeList = document.getElementById('remove-list'); //not working remove
const shirts = getProducts();

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let shirt of shirts){
    const shirtCard = renderShirt(shirt);
    shirtList.append(shirtCard);
}

const addBtns = document.querySelectorAll('.add-button');
for (let addButton of addBtns){
    addButton.addEventListener('click', ()=>{
        addItem(addButton.id);
    });
}

//remove button on admin page - NOT working
// for (let shirt of shirts){
//     const removeCard = renderRemoveShirt(shirt);
//     removeList.append(removeCard);
// }
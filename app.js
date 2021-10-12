// import functions and grab DOM elements
import { renderShirt } from './render-products.js';
import { shirts } from './data/shirts.js';

// initialize global state
const shirtList = document.getElementById('shirt-list');

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let shirt of shirts){
    const shirtCard = renderShirt(shirt);
    shirtList.append(shirtCard);
}
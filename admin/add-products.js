import { addProduct } from '../utils.js';

const form = document.getElementById('shirt-admin');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const newShirt = {
        id: data.get('id'),
        name: data.get('name'), 
        img: data.get('img'),
        description: data.get('descrip'),
        category: data.get('catagory'),
        price: Number(data.get('price')),
    };
    addProduct(newShirt);
    alert('new shirt added!');
    form.reset();
});
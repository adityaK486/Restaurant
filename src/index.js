import home from './home.js';
import  menu from './menu.js'

const content = document.getElementById('content');
const homebtn = document.querySelector('.homebtn');
const menubtn = document.querySelector('.menubtn');
const contactbtn = document.querySelector('.contactbtn');

content.appendChild(home);

homebtn.addEventListener('click',()=>{
    content.removeChild(menu);
    content.appendChild(home);
});


menubtn.addEventListener('click',()=>{
    content.removeChild(home);
    content.appendChild(menu);
});
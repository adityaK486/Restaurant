import home    from './home.js';
import menu    from './menu.js'
import contact from './contact.js';

const content    = document.getElementById('content');
const homebtn    = document.querySelector('.homebtn');
const menubtn    = document.querySelector('.menubtn');
const contactbtn = document.querySelector('.contactbtn');

content.appendChild(home);

let h=1,m=0,c=0;

homebtn.classList.add('active');

homebtn.addEventListener('click',()=>{
    homebtn.classList.add('active');
    menubtn.classList.remove('active');
    contactbtn.classList.remove('active');
    if(m!=0){
        content.removeChild(menu);
    }
    if(c!=0){
        content.removeChild(contact);
    }
    if(h!=0){
        content.removeChild(home);
    }
    content.appendChild(home);
    h++,m=0,c=0;
});


menubtn.addEventListener('click',()=>{
    homebtn.classList.remove('active');
    menubtn.classList.add('active');
    contactbtn.classList.remove('active');
    if(m!=0){
        content.removeChild(menu);
    }
    if(c!=0){
        content.removeChild(contact);
    }
    if(h!=0){
        content.removeChild(home);
    }
    content.appendChild(menu);
    h=0,m++,c=0;
});

contactbtn.addEventListener('click',()=>{
    homebtn.classList.remove('active');
    menubtn.classList.remove('active');
    contactbtn.classList.add('active');
    if(m!=0){
        content.removeChild(menu);
    }
    if(c!=0){
        content.removeChild(contact);
    }
    if(h!=0){
        content.removeChild(home);
    }
    content.appendChild(contact);
    h=0,m=0,c++;
});
import './style.css';

//div for contact 
const contact = document.createElement('div');

//h1 of chef
const chefs = document.createElement('h1');
chefs.classList.add('chefs');
chefs.textContent = "Chefs";

//all chef div
const cards = document.createElement('div');
cards.classList.add('cards');

//chef1 div
const card1 = document.createElement('div');
card1.classList.add('card');

//chef1 image
const card1img = document.createElement('img');
card1img.classList.add('image');
card1img.setAttribute('src','../src/images/Zeff.webp');
card1img.setAttribute('alt','Zeff pic');

//chef1 name
const card1p1 = document.createElement('p');
card1p1.classList.add('name');
card1p1.textContent = "Zeff";

//chef1 designation
const card1p2 = document.createElement('p');
card1p2.classList.add('name');
card1p2.textContent = "(Head Chef and Owner)";

//chef2 div
const card2 = document.createElement('div');
card2.classList.add('card');

//chef2 image
const card2img = document.createElement('img');
card2img.classList.add('image');
card2img.setAttribute('src','../src/images/sanji2.jpeg');
card2img.setAttribute('alt','Sanji pic');

//chef2 name
const card2p1 = document.createElement('p');
card2p1.classList.add('name');
card2p1.textContent = "Sanji";

//chef2 designation
const card2p2 = document.createElement('p');
card2p2.classList.add('name');
card2p2.textContent = "(Sous Chef)";

//chef3 div
const card3 = document.createElement('div');
card3.classList.add('card');

//chef3 image
const card3img = document.createElement('img');
card3img.classList.add('image');
card3img.setAttribute('src','../src/images/Patty.webp');
card3img.setAttribute('alt','Patty pic');

//chef3 name
const card3p1 = document.createElement('p');
card3p1.classList.add('name');
card3p1.textContent = "Patty";

//chef3 designation
const card3p2 = document.createElement('p');
card3p2.classList.add('name');
card3p2.textContent = "(Patisserie)";

//chef4 div
const card4 = document.createElement('div');
card4.classList.add('card');

//chef4 image
const card4img = document.createElement('img');
card4img.classList.add('image');
card4img.setAttribute('src','../src/images/Carne.webp');
card4img.setAttribute('alt','Carne pic');

//chef4 name
const card4p1 = document.createElement('p');
card4p1.classList.add('name');
card4p1.textContent = "Carne";

//chef4 designation
const card4p2 = document.createElement('p');
card4p2.classList.add('name');
card4p2.textContent = "(Meat Master)";

//h1 of Location
const location = document.createElement('h1');
location.classList.add('location');
location.textContent = "Location";

//location p
const lp = document.createElement('p');
lp.classList.add('para');
lp.textContent = 'Baratie is an ocean-going restaurant that is run by Zeff. It is located in the Sambas Region of East Blue. It is quite close to the entrance of the Grand Line. The Baratie is a large ship in an oval shape, it has normal masts and a fish as its front piece. The Baratie also has a round bottom. They also have some cannons on the side which can be used in battle. The Baratie has four levels. The lower deck is where the main restaurant is, the middle deck has the main kitchen, and the upper deck is the place where the cooks reside. The fins that are folded from underneath are used to stabilize the restaurant during harsh weather. It is also used to prevent the restaurant from getting any collateral damage.';

contact.appendChild(chefs);
contact.appendChild(cards);

cards.appendChild(card1);
card1.appendChild(card1img);
card1.appendChild(card1p1);
card1.appendChild(card1p2);

cards.appendChild(card2);
card2.appendChild(card2img);
card2.appendChild(card2p1);
card2.appendChild(card2p2);

cards.appendChild(card3);
card3.appendChild(card3img);
card3.appendChild(card3p1);
card3.appendChild(card3p2);

cards.appendChild(card4);
card4.appendChild(card4img);
card4.appendChild(card4p1);
card4.appendChild(card4p2);

contact.appendChild(location);
contact.appendChild(lp);

export default contact;
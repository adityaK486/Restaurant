import './style.css';
import d1 from '../src/images/d1.png';
import d2 from '../src/images/d2.png';
import d3 from '../src/images/d3.png';
import d4 from '../src/images/d4.png';
import d5 from '../src/images/d5.jpg';
import dess1 from '../src/images/dess1.png';
import dess2 from '../src/images/dess2.png';
import dess3 from '../src/images/dess3.png';
import drink1 from '../src/images/drink1.png';
import drink2 from '../src/images/drink2.png';
import drink3 from '../src/images/drink3.png';
import drink4 from '../src/images/drink4.png';
import drink5 from '../src/images/drink5.png';

//div of menu
const menu = document.createElement('div');

//div of lunch and dinner
const dish = document.createElement('div');
dish.classList.add('dish');

//heading of dish type
const main = document.createElement('h1');
main.classList.add('mainh1');
main.textContent = "Lunch and Dinner";

//card1
const card1 = document.createElement('div');
card1.classList.add('card1');

//1st dish
const main1 = document.createElement('div');
main1.classList.add('main');

const d1img = document.createElement('img');
d1img.classList.add('fpic');
d1img.setAttribute('src',d1);

const d1p = document.createElement('p');
d1p.classList.add('fname');
d1p.textContent = "In Order to Save My Friends: The Vow with Shanks";
//2nd dish
const main2 = document.createElement('div');
main2.classList.add('main');

const d2img = document.createElement('img');
d2img.classList.add('fpic');
d2img.setAttribute('src',d2);

const d2p = document.createElement('p');
d2p.classList.add('fname');
d2p.textContent = "'In the Name of Absolute Justice': The Birth of a Man Becoming a Marine Officer";

//3rd dish
const main3 = document.createElement('div');
main3.classList.add('main');

const d3img = document.createElement('img');
d3img.classList.add('fpic');
d3img.setAttribute('src',d3);

const d3p = document.createElement('p');
d3p.classList.add('fname');
d3p.textContent = "'Honorable Liar': Proud Warrior's Departure";

//4th dish
const main4 = document.createElement('div');
main4.classList.add('main');

const d4img = document.createElement('img');
d4img.classList.add('fpic');
d4img.setAttribute('src',d4);

const d4p = document.createElement('p');
d4p.classList.add('fname');
d4p.textContent = "The Fighting Cook who Had the Same Dream: The Pirate and the Little Eggplant";

//5th dish
const main5 = document.createElement('div');
main5.classList.add('main');

const d5img = document.createElement('img');
d5img.classList.add('fpic');
d5img.setAttribute('src',d5);

const d5p = document.createElement('p');
d5p.classList.add('fname');
d5p.textContent = "Aiming to be the Best Swordsman in the World: Battle of the 'Strong Man'";

//div of Dessert
const dessert = document.createElement('div');
dessert.classList.add('dessert');

//heading of dessert
const desrt = document.createElement('h1');
desrt.classList.add('desrth1');
desrt.textContent = "Dessert";

//card2
const card2 = document.createElement('div');
card2.classList.add('card2');

//1st dessert
const desrt1 = document.createElement('div');
desrt1.classList.add('desrt');

const desrt1img = document.createElement('img');
desrt1img.classList.add('fpic');
desrt1img.setAttribute('src',dess1);

const desrt1p = document.createElement('p');
desrt1p.classList.add('fname');
desrt1p.textContent = "Beautiful Lady: Glossy and Smooth Creme Brulee";

//2nd dessert
const desrt2 = document.createElement('div');
desrt2.classList.add('desrt');

const desrt2img = document.createElement('img');
desrt2img.classList.add('fpic');
desrt2img.setAttribute('src',dess2);

const desrt2p = document.createElement('p');
desrt2p.classList.add('fname');
desrt2p.textContent = "A Gentleman's Taste: Apology Panna Cotta and Macedonia Combination with Orange Sauce";

//3rd dessert
const desrt3 = document.createElement('div');
desrt3.classList.add('desrt');

const desrt3img = document.createElement('img');
desrt3img.classList.add('fpic');
desrt3img.setAttribute('src',dess3);

const desrt3p = document.createElement('p');
desrt3p.classList.add('fname');
desrt3p.textContent = "Nami's Orange Jelly";

//div of drink
const drink = document.createElement('div');
drink.classList.add('drink');

//heading of drink
const dr = document.createElement('h1');
dr.classList.add('drh1');
dr.textContent = "Drink";

//card3
const card3 = document.createElement('card3');
card3.classList.add('card3');

//1st drink
const dr1 = document.createElement('div');
dr1.classList.add('dr');

const dr1img = document.createElement('img');
dr1img.classList.add('fpic');
dr1img.setAttribute('src',drink1);

const dr1p = document.createElement('p');
dr1p.classList.add('fname');
dr1p.textContent = "Luffy: 'I'm going to become King of the Pirates!' Berry Berry Squash";

//2nd drink
const dr2 = document.createElement('div');
dr2.classList.add('dr');

const dr2img = document.createElement('img');
dr2img.classList.add('fpic');
dr2img.setAttribute('src',drink2);

const dr2p = document.createElement('p');
dr2p.classList.add('fname');
dr2p.textContent = "Zoro: 'Thank you. I can still become stronger.' Kiwi Lassi";

//3rd drink
const dr3 = document.createElement('div');
dr3.classList.add('dr');

const dr3img = document.createElement('img');
dr3img.classList.add('fpic');
dr3img.setAttribute('src',drink3);

const dr3p = document.createElement('p');
dr3p.classList.add('fname');
dr3p.textContent = "Sanji: 'Do you know All Blue?' Blue Ocean";

//4th drink
const dr4 = document.createElement('div');
dr4.classList.add('dr');

const dr4img = document.createElement('img');
dr4img.classList.add('fpic');
dr4img.setAttribute('src',drink4);

const dr4p = document.createElement('p');
dr4p.classList.add('fname');
dr4p.textContent = "Cocoyasi Village: 'Never forget the strength to continue laughing.' Bellemere's Orange Juice";

//5th drink
const dr5 = document.createElement('div');
dr5.classList.add('dr');

const dr5img = document.createElement('img');
dr5img.classList.add('fpic');
dr5img.setAttribute('src',drink5);

const dr5p = document.createElement('p');
dr5p.classList.add('fname');
dr5p.textContent = "Scurvy: 'Almost had him!' Lime Juice to Save Yosaku";

menu.appendChild(dish);
dish.appendChild(main);

dish.appendChild(card1);

card1.appendChild(main1);
main1.appendChild(d1img);
main1.appendChild(d1p);

card1.appendChild(main2);
main2.appendChild(d2img);
main2.appendChild(d2p);

card1.appendChild(main3);
main3.appendChild(d3img);
main3.appendChild(d3p);

card1.appendChild(main4);
main4.appendChild(d4img);
main4.appendChild(d4p);

card1.appendChild(main5);
main5.appendChild(d5img);
main5.appendChild(d5p);

menu.appendChild(dessert);
dessert.appendChild(desrt);

dessert.appendChild(card2);

card2.appendChild(desrt1);
desrt1.appendChild(desrt1img);
desrt1.appendChild(desrt1p);

card2.appendChild(desrt2);
desrt2.appendChild(desrt2img);
desrt2.appendChild(desrt2p);

card2.appendChild(desrt3);
desrt3.appendChild(desrt3img);
desrt3.appendChild(desrt3p);

menu.appendChild(drink);
drink.appendChild(dr);

drink.appendChild(card3);

card3.appendChild(dr1);
dr1.appendChild(dr1img);
dr1.appendChild(dr1p);

card3.appendChild(dr2);
dr2.appendChild(dr2img);
dr2.appendChild(dr2p);

card3.appendChild(dr3);
dr3.appendChild(dr3img);
dr3.appendChild(dr3p);

card3.appendChild(dr4);
dr4.appendChild(dr4img);
dr4.appendChild(dr4p);

card3.appendChild(dr5);
dr5.appendChild(dr5img);
dr5.appendChild(dr5p);

export default menu;
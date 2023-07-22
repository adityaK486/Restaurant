import './style.css';

const home = document.createElement("div");

//info
const info = document.createElement('div');
info.classList.add('info');


const data = document.createElement('p');
data.classList.add('data');
data.textContent = "The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region(サンバス海域, Sanbasu Kaiiki?) of the East Blue, close to the entrance of the Grand Line." ;

const data1 = document.createElement('p');
data1.classList.add('data');
data1.textContent = "Zeff founded the Baratie with Sanji's help and support. After the Cook Pirates attacked the Orbit, both Zeff and a 9-year-old Sanji were stranded on a rock for 85 days. During this time, Zeff discussed with Sanji the idea of starting a restaurant floating on the sea, and Sanji promised that if they survived, he would help Zeff achieve that goal. After they were rescued on the 85th day, Zeff sold all the treasure he had and purchased the Baratie. As the restaurant's new head chef, he told Sanji (the new sous chef) that all customers would be welcome, no matter how villainous they were.";

const data2 = document.createElement('p');
data2.classList.add('data');
data2.textContent = "The Baratie staff is noted for being a staff of outcasts, exiles and pirate types. Its owner is a renowned former pirate captain, and Sanji himself came to help co-found the restaurant after being exiled from his family. Most of the chefs (including Patty and Carne) also joined up after being chased out of other restaurants and responding to Zeff's adverts for 'damn cooks'. When the restaurant came under attack by the Krieg Pirates, the cooking staff decided to defend it because it was the one place that had accepted them. The staff mostly fights with oversized cutlery such as forks and knives unlike Zeff and Sanji.";

home.appendChild(info);
info.appendChild(data);
info.appendChild(data1);
info.appendChild(data2);

export default home;
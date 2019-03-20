'use strict';

let hours = ['6am', '7am', '8am', '9am','10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


let Store = function(location, min, max, avg){
  this.location = location;
  this.min_cust = min;
  this.max_cust = max;
  this.avg_cookie_sale = avg;
  this.customers_per_hour = [];
  this.cookies_sold_per_hour = [];
};

Store.prototype.calcCustomersPerHour = function(){
  for(let i = 0 ; i < hours.length ; i++){ 
    this.customers_per_hour.push(random(this.min_cust, this.max_cust));
  }
};
Store.prototype.calcCookiesPerHour = function(){
  this.calcCustomersPerHour();
  for (let i = 0 ; i < this.customers_per_hour.length; i++){
    this.cookies_sold_per_hour.push(Math.floor(this.customers_per_hour[i] * this.avg_cookie_sale));
  }
};
Store.prototype.render = function(){
  let section = document.getElementById('salesSection');
  let h3 = document.createElement('h3');
  let ul = document.createElement('ul');
  this.calcCookiesPerHour();
  
  h3.textContent = this.location;
  section.appendChild(h3);
  section.appendChild(ul);
  
  for (let i = 0; i < hours.length; i++){
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookies_sold_per_hour[i]} cookies`;
    ul.appendChild(li);
  }

  let li = document.createElement('li');
  li.textContent = `Total: ${this.cookies_sold_per_hour.reduce((sum, curr) => {return sum+curr;})} cookies`;
  ul.appendChild(li);
};

function random(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function createTitle(){
  let section = document.getElementById('salesSection');
  let h1 = document.createElement('h1');
  let img = document.createElement('img');
  h1.textContent = 'Salmon Cookie Sales For All Locations';
  img.setAttribute('src', './.img/salmon.png');
  section.appendChild(h1);
  section.appendChild(img);
}

createTitle();

let oldmill = new Store('Old Mill', 12, 45, 4.5);
let firstpike = new Store('First and Pike', 23, 65, 6.3);
let seatac = new Store('Seatac Airport', 3, 24, 1.2);
let seacenter = new Store('Seattle Center', 11, 38, 3.7);
let caphill = new Store('Capitol Hill', 20, 38, 2.3);
let alki = new Store('alki', 2, 16, 4.6);

oldmill.render();
firstpike.render();
seatac.render();
seacenter.render();
caphill.render();
alki.render();

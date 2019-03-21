'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am','10:00am', '11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

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

  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let tbody = document.getElementById('tbodySec');
  // console.log(table);
  this.calcCookiesPerHour();
  tbody.appendChild(tr);
  td.textContent = this.location;
  tr.appendChild(td);
  for (let i = 0; i < this.cookies_sold_per_hour.length; i++){
    let td = document.createElement('td');
    // console.log(this.cookies_sold_per_hour[i]);
    td.textContent = this.cookies_sold_per_hour[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = this.cookies_sold_per_hour.reduce((sum, curr) => {return sum+curr;});
  tr.appendChild(td);
};

function random(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function createTitle(){
  let section = document.getElementById('salesSection');
  let sectionAfterPic = document.getElementById('afterPic');
  let h1 = document.createElement('h1');
  let img = document.createElement('img');
  let table = document.createElement('table');
  let th = document.createElement('th');
  let td = document.createElement('td');
  let tbody = document.createElement('tbody');
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let ths = document.createElement('th');

  h1.textContent = 'Salmon Cookie Sales For All Locations';
  img.setAttribute('src', './.img/salmon.png');
  section.appendChild(h1);
  section.appendChild(img);
  //partition
  sectionAfterPic.appendChild(table);
  table.setAttribute('id', 'salesTable');
  table.appendChild(thead);
  thead.appendChild(tr);

  ths.textContent = 'Sales Table';
  tr.appendChild(ths);
  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th.textContent = 'Daily Totals';
  tr.appendChild(th);
  table.appendChild(tbody);
  tbody.setAttribute('id', 'tbodySec');
}

function createTotalLine(){


  //    let li = document.createElement('li');
  // li.textContent = `Total: ${this.cookies_sold_per_hour.reduce((sum, curr) => {return sum+curr;})} cookies`;
  
}

createTitle();
// TODO: create an array of locations and generate these

let arrStores = [];

function createAllStores(location, min, max, avg){
  const newstore = new Store(location, min, max, avg);
  arrStores.push(newstore);
}
createAllStores('Old Mill', 12, 45, 4.5);
createAllStores('First and Pike', 23, 65, 6.3);
createAllStores('Seatac Airport', 3, 24, 1.2);
createAllStores('Seattle Center', 11, 38, 3.7);
createAllStores('Capitol Hill', 20, 38, 2.3);
createAllStores('alki', 2, 16, 4.6);

arrStores.map((item) => item.render());

// Event Handlers
let addStoreForm = document.getElementById('addStore');
const handleClick = function(e){
  //handle my click
  e.preventDefault();
  alert('submit handled');
};

addStoreForm.addEventListener('submit', handleClick);

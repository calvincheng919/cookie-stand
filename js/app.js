'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am','10:00am', '11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
let pageTotal = [];

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
  pageTotal.push(td.textContent);
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
  tbody.setAttribute('id', 'tbody');
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

createTitle();

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

function createTotalLine(){
  // console.log('hey');
  let colCookieNums = [];
  let colTotals = [];
  let table = document.getElementById('salesTable');
  let tfoot = document.createElement('tfoot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  

  for (let i = 0; i < hours.length; i++){
    colCookieNums[i] = [];
    for (let h = 0; h < arrStores.length; h++){
      colCookieNums[i].push(arrStores[h].cookies_sold_per_hour[i]);
    }
  }
  
  colTotals = colCookieNums.map((item) => {
    return item.reduce((sum,curr) => {
      return sum+curr;
    });
  });

  table.appendChild(tfoot);
  tfoot.appendChild(tr);
  td.textContent = 'Stores Total';
  tr.appendChild(td);
  colTotals.map(item => {
    td = document.createElement('td');
    td.textContent = item;
    return tr.appendChild(td);
  });
  console.log(pageTotal);
  td = document.createElement('td');
  td.textContent = pageTotal.reduce((sum,curr) => parseInt(sum)+parseInt(curr));
  tr.appendChild(td);
}

arrStores.map((item) => item.render());
console.log('debugger1');

// console.log('before hey');
createTotalLine();

// Event Handlers
let addStoreForm = document.getElementById('addStore');
const handleClick = function(e){
  //handle my click
  e.preventDefault();
  alert('submit handled');
};

addStoreForm.addEventListener('submit', handleClick);

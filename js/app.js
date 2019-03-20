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
// Store.prototype.render = function(){
//   let section = document.getElementById('salesSection');
//   let h3 = document.createElement('h3');
//   let ul = document.createElement('ul');
//   this.calcCookiesPerHour();
  
//   h3.textContent = this.location;
//   section.appendChild(h3);
//   section.appendChild(ul);
  
//   for (let i = 0; i < hours.length; i++){
//     let li = document.createElement('li');
//     li.textContent = `${hours[i]}: ${this.cookies_sold_per_hour[i]} cookies`;
//     ul.appendChild(li);
//   }

//   let li = document.createElement('li');
//   li.textContent = `Total: ${this.cookies_sold_per_hour.reduce((sum, curr) => {return sum+curr;})} cookies`;
//   ul.appendChild(li);
// };

Store.prototype.render = function(){
  // let section = document.getElementById('salesSection');

  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let table = document.getElementById('salesTable');
  // console.log(table);
  this.calcCookiesPerHour();
  table.appendChild(tr);
  td.textContent = this.location;
  tr.appendChild(td);
  for (let i = 0; i < this.cookies_sold_per_hour.length; i++){
    let td = document.createElement('td');
    console.log(this.cookies_sold_per_hour[i]);
    td.textContent = this.cookies_sold_per_hour[i];
    tr.appendChild(td);
  }
  

};

function random(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function createTitle(){
  let section = document.getElementById('salesSection');
  let h1 = document.createElement('h1');
  let img = document.createElement('img');
  let table = document.createElement('table');
  let th = document.createElement('th');
  let td = document.createElement('td');
  h1.textContent = 'Salmon Cookie Sales For All Locations';
  img.setAttribute('src', './.img/salmon.png');
  section.appendChild(h1);
  section.appendChild(img);
  section.appendChild(table);
  table.setAttribute('id', 'salesTable');
  table.appendChild(th);
  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    th.appendChild(td);
  }
  td.textContent = 'Daily Totals';
  th.appendChild(td);
}

createTitle();

let oldmill = new Store('Old Mill', 12, 45, 4.5);
let firstpike = new Store('First and Pike', 23, 65, 6.3);
let seatac = new Store('Seatac Airport', 3, 24, 1.2);
let seacenter = new Store('Seattle Center', 11, 38, 3.7);
let caphill = new Store('Capitol Hill', 20, 38, 2.3);
let alki = new Store('alki', 2, 16, 4.6);

// console.log(oldmill.render());
oldmill.render();
firstpike.render();
seatac.render();
seacenter.render();
caphill.render();
alki.render();



{/* <table>
<th>
  <td>6:00am</td>
  <td>7:00am</td>
  <td>8:00am</td>
  <td>9:00am</td>
  <td>10:00am</td>
  <td>Daily Totals</td>
</th>
<tr>
  <td>First and Pike</td>
  <td>123</td>
  <td>333</td>
  <td>232</td>
  <td>34</td>
  <td>154</td>
</tr>

</table> */}




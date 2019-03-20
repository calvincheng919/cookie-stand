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

let oldmill = new Store('Old Mill', 12, 45, 4.5);
// oldmill.calcCookiesPerHour();
// console.log(`${oldmill.location}: ${oldmill.cookies_sold_per_hour}`);
oldmill.render();


//Fist and Pike oject
let first_n_pike = {
  location: '1st and Pike',
  min_cust: 23,
  max_cust: 65,
  avg_cookie_sale: 6.3,
  customers_per_hour: [],
  cookies_sold_per_hour: [],
  calcCustomersPerHour: function(){
    for(let i = 0 ; i < hours.length ; i++){ 
      this.customers_per_hour.push(random(this.min_cust, this.max_cust));
    }
  },
  calcCookiesPerHour: function(){
    //calculate customers per hour by invoking method calcCustomersPerHour
    //use customers_per_hour array result multiplied by avg cookie sale per hour to get cookies sold per hour
    this.calcCustomersPerHour();
    for (let i = 0 ; i < this.customers_per_hour.length; i++){
      this.cookies_sold_per_hour.push(Math.floor(this.customers_per_hour[i] * this.avg_cookie_sale));
    }
  },
  createStore: function(){
    let section = document.getElementById('salesSection');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    this.calcCookiesPerHour();
    
    h3.textContent = '1st and Pike';
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
  }
};


//Seatac Airport object

let seatac_airport = {
  location: 'Seatac Airport',
  min_cust: 3,
  max_cust: 24,
  avg_cookie_sale: 1.2,
  customers_per_hour: [],
  cookies_sold_per_hour: [],
  calcCustomersPerHour: function(){
    for(let i = 0 ; i < hours.length ; i++){ 
      this.customers_per_hour.push(random(this.min_cust, this.max_cust));
    }
  },
  calcCookiesPerHour: function(){
    //calculate customers per hour by invoking method calcCustomersPerHour
    //use customers_per_hour array result multiplied by avg cookie sale per hour to get cookies sold per hour
    this.calcCustomersPerHour();
    for (let i = 0 ; i < this.customers_per_hour.length; i++){
      this.cookies_sold_per_hour.push(Math.floor(this.customers_per_hour[i] * this.avg_cookie_sale));
    }
  },
  createStore: function(){
    let section = document.getElementById('salesSection');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    this.calcCookiesPerHour();
    
    h3.textContent = 'Seatac Airport';
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
  }

};


let seattle_center = {
  location: 'Seattle Center',
  min_cust: 11,
  max_cust: 38,
  avg_cookie_sale: 3.7,
  customers_per_hour: [],
  cookies_sold_per_hour: [],
  calcCustomersPerHour: function(){
    for(let i = 0 ; i < hours.length ; i++){ 
      this.customers_per_hour.push(random(this.min_cust, this.max_cust));
    }
  },
  calcCookiesPerHour: function(){
    //calculate customers per hour by invoking method calcCustomersPerHour
    //use customers_per_hour array result multiplied by avg cookie sale per hour to get cookies sold per hour
    this.calcCustomersPerHour();
    for (let i = 0 ; i < this.customers_per_hour.length; i++){
      this.cookies_sold_per_hour.push(Math.floor(this.customers_per_hour[i] * this.avg_cookie_sale));
    }
  },
  createStore: function(){
    let section = document.getElementById('salesSection');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    this.calcCookiesPerHour();
    
    h3.textContent = 'Seattle Center';
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
  }
};

let capital_hill = {
  location: 'Capital Hill',
  min_cust: 20,
  max_cust: 38,
  avg_cookie_sale: 2.3,
  customers_per_hour: [],
  cookies_sold_per_hour: [],
  calcCustomersPerHour: function(){
    for(let i = 0 ; i < hours.length ; i++){ 
      this.customers_per_hour.push(random(this.min_cust, this.max_cust));
    }
  },
  calcCookiesPerHour: function(){
    //calculate customers per hour by invoking method calcCustomersPerHour
    //use customers_per_hour array result multiplied by avg cookie sale per hour to get cookies sold per hour
    this.calcCustomersPerHour();
    for (let i = 0 ; i < this.customers_per_hour.length; i++){
      this.cookies_sold_per_hour.push(Math.floor(this.customers_per_hour[i] * this.avg_cookie_sale));
    }
  },
  createStore: function(){
    let section = document.getElementById('salesSection');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    this.calcCookiesPerHour();
    
    h3.textContent = 'Capital Hill';
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
  }
};

let alki = {
  location: 'Alki',
  min_cust: 2,
  max_cust: 16,
  avg_cookie_sale: 4.6,
  customers_per_hour: [],
  cookies_sold_per_hour: [],
  calcCustomersPerHour: function(){
    for(let i = 0 ; i < hours.length ; i++){ 
      this.customers_per_hour.push(random(this.min_cust, this.max_cust));
    }
  },
  calcCookiesPerHour: function(){
    //calculate customers per hour by invoking method calcCustomersPerHour
    //use customers_per_hour array result multiplied by avg cookie sale per hour to get cookies sold per hour
    this.calcCustomersPerHour();
    for (let i = 0 ; i < this.customers_per_hour.length; i++){
      this.cookies_sold_per_hour.push(Math.floor(this.customers_per_hour[i] * this.avg_cookie_sale));
    }
  },
  createStore: function(){
    let section = document.getElementById('salesSection');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    this.calcCookiesPerHour();
    
    h3.textContent = 'Alki';
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
  }
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
//create all shops and display them on webpage
first_n_pike.createStore();
seatac_airport.createStore();
seattle_center.createStore();
capital_hill.createStore();
alki.createStore();
// createStore();

'use strict'


var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;


function Store(name, minCustomerPerHour, maxCustomerPerHour, averageCookierPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookierPerPerson = averageCookierPerPerson;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
}

Store.prototype.calcCustomersEachHour = function(){

  for(var i=0; i<hours.length; i++){
    var customerThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);

    this.customersEachHour.push(customerThisHour);
  }
}

Store.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour(); 

  for(var i=0; i<this.customersEachHour.length; i++){
    var totalCookies = Math.ceil(this.averageCookierPerPerson * this.customersEachHour[i]);

    this.cookiesSoldEachHour.push(totalCookies);
  }
}

Store.prototype.cookiesForTheDay = function(){
  this.calcCookiesSoldEachHour();
  
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesForTheDay += this.cookiesSoldEachHour[i];
    
  }
}
var parentElement = document.getElementById('table');

Store.prototype.render = function(){
  this.cookiesForTheDay();


  var tableRow = document.createElement('tr');
  var tableheader = document.createElement('th');
  tableheader.textContent = this.name;
  tableRow.appendChild(tableheader);

  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);
  }

  
  tableData = document.createElement('td');
  tableData.textContent = this.totalCookiesForTheDay;
  tableRow.appendChild(tableData);

  parentElement.appendChild(tableRow);
}

// Random NUm Function Global

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

var seattle = new Store('seattle', 23, 65, 6.3);
var tokyo = new Store('tokyo', 3, 24, 1.2);
var dubai = new Store('dubai', 11, 38, 3.7);
var paris = new Store('paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();












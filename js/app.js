'use strict'

var parentElement = document.getElementById('container');
var tableEl = document.createElement('table');
parentElement.appendChild(tableEl);

var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;
var shops =[ ];

function Store(name, minCustomerPerHour, maxCustomerPerHour, averageCookierPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookierPerPerson = averageCookierPerPerson;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  shops.push(this);
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
// var parentElement = document.getElementById('container');
function headerRender(){
  var trEl =document.createElement('tr');
  tableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl); 
  thEl.textContent = ' ' ;

    for(var i=0; i<hours.length ; i++){
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];


  }
}
headerRender();

function footerRender(){
  var trEl =document.createElement('tr');
  tableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl); 
  thEl.textContent = 'Total' ;

}
footerRender();


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



// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

for(var i=0 ; i<shops.length ; i++){
  shops[i].render();
}



var storeLocations = [];

// EVENT MAKE


var form = document.getElementById('Store-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
  var name = event.target.storeName.value  ;
  console.log(name);
  var minCust = event.target.minumumCustomers.value  ;
  var maxCust = event.target.maximumCustomers.value  ;
  var avgCookies = event.target.averageSales.value   ;
 
  if (minCust > maxCust){
    var tmp = minCust;
    minCust = maxCust;
    maxCust = tmp; }

  var newCookies = new Store(name, minCust, maxCust, avgCookies);

  storeLocations.push(newCookies);
}) ;





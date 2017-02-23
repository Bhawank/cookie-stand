//'use strict'



var storeArrays = [];

function cookieShop(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name; //Loaction
  this.minCustomers = minCustomers; //Min # of customers
  this.maxCustomers = maxCustomers; //Max
  this.avgCookiesSold = avgCookiesSold; //avg Cokkies sold
  this.cookiesPerHour = []; //sales
  this.total = 0;

  storeArrays.push(this);

}

// Hourly sales
cookieShop.prototype.hourlyCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};


cookieShop.prototype.generateCookies = function() {
  for (var i = 0; i < 8; i++){
    var rand = this.avgCookiesSold * this.hourlyCustomers();
    this.cookiesPerHour.push(Math.round(rand));
    this.total += rand;
  }
};


//table
cookieShop.prototype.renderCookies = function(){
  this.generateCookies();

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);

  for( var i = 0; i < this.cookiesPerHour.length; i++){
    var td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    trElement.appendChild(td);
  };

  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.total;
  trElement.appendChild(totalTdEl);

  document.getElementById('body').appendChild(trElement);

};

// //new
var pikePlace = new cookieShop ('pikePlace', 17, 88, 5.2);
pikePlace.renderCookies();

// //new
var seatacAriportCafe = new cookieShop ('seatacAirportCafe', 6, 24, 1.2);
seatacAriportCafe.renderCookies();

//new
var southCenter = new cookieShop ('southCenter', 11, 38, 1.9);
southCenter.renderCookies();

//new
var bellevue = new cookieShop ('bellevue', 20, 48, 3.3)
bellevue.renderCookies();

//new
var alki = new cookieShop('alki', 3, 24, 2.6);
alki.renderCookies();

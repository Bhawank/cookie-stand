//'use strict'



var storeArrays = [];

function cookieShop(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name; //Loaction
  this.minCustomers = minCustomers; //Min # of customers
  this.maxCustomers = maxCustomers; //Max
  this.avgCookiesSold = avgCookiesSold; //avg Cokkies sold
  this.cookiesPerHour = []; //sales
  this.total = 0;
  // this.renderCookies();
  storeArrays.push(this);
  // this.timeOfDay = ['Ten.am:', 'Eleven.am:', 'Twelve.pm:', 'One.pm:', 'Two.pm:', 'Three.pm:', 'Four.pm:', 'Five.pm:'];
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



// this.renderCookies = function() {
//   this.generateCookies();
//   var parent = document.getElementById(name);
//
//   var total = 0;
//   for (var i = 0; i < 8; i++) {
//     var child = document.createElement('td');
//     child.appendChild(document.createTextNode(this.timeOfDay[i] + ' ' +this.cookiesPerHour[i]));
//     parent.appendChild(child);
//
//   }
//   var child2 = document.createElement('td')
//   child2 = (document.createTextNode('total: ' + Math.floor(this.total)));
//   parent.appendChild(child2);
// };

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

//t


// //new
// new cookieShop('pikePlace', 17, 88, 5.2);
// new cookieShop('seatacAirportCafe', 6, 24, 1.2);
// new cookieShop('southCenter', 11, 38, 1.9);
// new cookieShop('bellevue', 20, 48, 3.3);
// new cookieShop('alki', 3, 24, 2.6);

//render
// pikePlace.renderCookies();
// seatacAriportCafe.renderCookies();
// southCenter.renderCookies();
// bellevue.renderCookies();
// alki.renderCookies();


// function cookieShop(name, minCustomers, maxCustomers, avgCookiesSold) {
//   this.name = name;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookiesSold = avgCookiesSold;
//   this.cookiesPerHour = [];
//   this.total = 0;
//   this.timeOfDay = ['Ten.am:', 'Eleven.am:', 'Twelve.pm:', 'One.pm:', 'Two.pm:', 'Three.pm:', 'Four.pm:', 'Five.pm:'];
//
//   this.hourlyCustomers = function() {
//     return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
//   };
//
//   this.generateCookies = function() {
//     for (var i = 0; i < 8; i++){
//       var rand = this.avgCookiesSold * this.hourlyCustomers();
//       this.cookiesPerHour.push(Math.round(rand));
//       this.total += rand;
//     }
//   };
//
//
//
//   this.renderCookiesPerHour = function() {
//     this.generateCookies();
//     var parent = document.getElementById(name);
//     // var parent = document.getElementById('seatacAirportCafe');
//
//     var total = 0;
//     for (var i = 0; i < 8; i++) {
//       var child = document.createElement('li');
//       child.appendChild(document.createTextNode(this.timeOfDay[i] + ' ' +this.cookiesPerHour[i]));
//       parent.appendChild(child);
//       // if (i < 2){
//       //   child.textContent= ( (10+i) + ' am:' + ' ' + this.cookiesPerHour[i] + ' cookies');
//       // }else  if (i===2){
//       //   child.textContent= ( '12 pm:' + ' ' + this.cookiesPerHour[i] + ' cookies');
//       // }else{
//       //   child.textContent= ( (i-2) + ' pm:' + ' ' + this.cookiesPerHour[i] + ' cookies');
//       // }
//       // total += pikePlace.cookiesPerHour[i];
//       // parent.appendChild(child);
//       // console.log(total);
//     }
//   var child2 = document.createElement('li')
//   child2 = (document.createTextNode('total: ' + Math.floor(this.total)));
//   parent.appendChild(child2);
//   }
// };
//
//
//pikePlace
// Adding total to the <ul>

// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);

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

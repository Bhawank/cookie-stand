//'use strict';


// 1.) stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2.) Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 3.) Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
// 4.) Store the results for each location in a separate array
// 5.) Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

var pikePlace = {
//propertyMinCust
  minCustomers: 17,
  maxCustomers: 88,
  avgCookiesSold: 5.2,
  cookiesPerHour: [],
  hourlyCustomers: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
    }
  },
};
//call functionto run pikePlace code
pikePlace.generateCookies();
//create <li> for pikePlace
var parent = document.getElementById('Pike-Place');
var child;
var total = 0;
for (var i = 0; i < 8; i++) {
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
  }else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
  }
  total += pikePlace.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
//pikePlace
// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);





var seatacAriportCafe = {
//propertyMinCust
  minCustomers: 6,
  maxCustomers: 24,
  avgCookiesSold: 1.2,
  cookiesPerHour: [],
  hourlyCustomers: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
    }
  },
};
//call functionto run seatacAriportCafe code
seatacAriportCafe.generateCookies();
//create <li> for seatacAriportCafe
var parent = document.getElementById('seatacAriportCafe');
var child;
var total = 0;
for (var i = 0; i < 8; i++) {
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + seatacAriportCafe.cookiesPerHour[i] + ' cookies');
  }else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + seatacAriportCafe.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + seatacAriportCafe.cookiesPerHour[i] + ' cookies');
  }
  total += seatacAriportCafe.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
//seatacAriportCafe
// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);




//location3
var southCenter = {
//propertyMinCust
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesSold: 1.9,
  cookiesPerHour: [],
  hourlyCustomers: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
    }
  },
};
//call functionto run southCenter code
southCenter.generateCookies();
//create <li> for southCenter
var parent = document.getElementById('southCenter');
var child;
var total = 0;
for (var i = 0; i < 8; i++) {
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }
  total += southCenter.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
//pikePlace
// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);
//end of southCenter location3

//location4 - Bellevue Square	20	48	3.3
var bellevue = {
//propertyMinCust
  minCustomers: 20,
  maxCustomers: 48,
  avgCookiesSold: 3.3,
  cookiesPerHour: [],
  hourlyCustomers: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
    }
  },
};
//call functionto run bellevue code
bellevue.generateCookies();
//create <li> for bellevue
var parent = document.getElementById('bellevue');
var child;
var total = 0;
for (var i = 0; i < 8; i++) {
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + bellevue.cookiesPerHour[i] + ' cookies');
  }else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + bellevue.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + bellevue.cookiesPerHour[i] + ' cookies');
  }
  total += bellevue.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
//bellevue
// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);



//Alki	3	24	2.6

var alki = {
//propertyMinCust
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesSold: 2.6,
  cookiesPerHour: [],
  hourlyCustomers: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
    }
  },
};
//call functionto run alki code
alki.generateCookies();
//create <li> for alki
var parent = document.getElementById('alki');
var child;
var total = 0;
for (var i = 0; i < 8; i++) {
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
  }else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
  }
  total += alki.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}
//alki
// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);

//end of lab6

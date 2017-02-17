//'use strict'

//building a construction function to have all locations call one fucntion to launch
function cookieShop(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.cookiesPerHour = [];
  this.total = 0;
  this.timeOfDay = ['Ten.am:', 'Eleven.am:', 'Twelve.pm:', 'One.pm:', 'Two.pm:', 'Three.pm:', 'Four.pm:', 'Five.pm:'];

  this.hourlyCustomers = function() {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
  };

  this.generateCookies = function() {
    for (var i = 0; i < 8; i++){
      var rand = this.avgCookiesSold * this.hourlyCustomers();
      this.cookiesPerHour.push(Math.round(rand));
      this.total += rand;
    }
  };



  this.renderCookiesPerHour = function() {
    this.generateCookies();
    var parent = document.getElementById(name);
    // var parent = document.getElementById('seatacAirportCafe');

    var total = 0;
    for (var i = 0; i < 8; i++) {
      var child = document.createElement('li');
      child.appendChild(document.createTextNode(this.timeOfDay[i] + ' ' +this.cookiesPerHour[i]));
      parent.appendChild(child);
      // if (i < 2){
      //   child.textContent= ( (10+i) + ' am:' + ' ' + this.cookiesPerHour[i] + ' cookies');
      // }else  if (i===2){
      //   child.textContent= ( '12 pm:' + ' ' + this.cookiesPerHour[i] + ' cookies');
      // }else{
      //   child.textContent= ( (i-2) + ' pm:' + ' ' + this.cookiesPerHour[i] + ' cookies');
      // }
      // total += pikePlace.cookiesPerHour[i];
      // parent.appendChild(child);
      // console.log(total);
    }
  var child2 = document.createElement('li')
  child2 = (document.createTextNode('total: ' + Math.floor(this.total)));
  parent.appendChild(child2);
  }
};


//pikePlace
// Adding total to the <ul>

// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);

// //new
var pikePlace = new cookieShop ('Pike-Place', 17, 88, 5.2);
pikePlace.renderCookiesPerHour();

// //new
var seatacAriportCafe = new cookieShop ('seatacAirportCafe', 6, 24, 1.2);
seatacAriportCafe.renderCookiesPerHour();

//new
var southCenter = new cookieShop ('southCenter', 11, 38, 1.9);
southCenter.renderCookiesPerHour();

//new
var bellevue = new cookieShop ('bellevue', 20, 48, 3.3)
bellevue.renderCookiesPerHour();

//new
var alki = new cookieShop('alki', 3, 24, 2.6);
alki.renderCookiesPerHour();
// //Alki	3	24	2.6











// // var pikePlace = {
// // function item(minCustomers, maxCustomers) {
// // //propertyMinCust
// //   minCustomers: 17,
// //   maxCustomers: 88,
// //   avgCookiesSold: 5.2,
// //   cookiesPerHour: [],
// // }
// // pikePlace.generateCookies();
// //   hourlyCustomers: function(minCustomers, maxCustomers) {
// //     return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
// //   },
// //   generateCookies: function() {
// //     for (var i = 0; i < 8; i++){
// //       this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
// //     }
// //   },
// // };
// //call functionto run pikePlace code
// // pikePlace.generateCookies();
// //create <li> for pikePlace
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var seatacAriportCafe = {
//   //propertyMinCust
//   minCustomers: 6,
//   maxCustomers: 24,
//   avgCookiesSold: 1.2,
//   cookiesPerHour: [],
//   hourlyCustomers: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
//   },
//   generateCookies: function() {
//     for (var i = 0; i < 8; i++){
//       this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
//     }
//   },
// };
// //call functionto run seatacAriportCafe code
// seatacAriportCafe.generateCookies();
// //create <li> for seatacAriportCafe
// var parent = document.getElementById('seatacAriportCafe');
// var child;
// var total = 0;
// for (var i = 0; i < 8; i++) {
//   child = document.createElement('li');
//   if (i < 2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + seatacAriportCafe.cookiesPerHour[i] + ' cookies');
//   }else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + seatacAriportCafe.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + seatacAriportCafe.cookiesPerHour[i] + ' cookies');
//   }
//   total += seatacAriportCafe.cookiesPerHour[i];
//   parent.appendChild(child);
//   console.log(total);
// }
// //seatacAriportCafe
// // Adding total to the <ul>
//
// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);
//
//
//
//
// //location3
// var southCenter = {
//   //propertyMinCust
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesSold: 1.9,
//   cookiesPerHour: [],
//   hourlyCustomers: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
//   },
//   generateCookies: function() {
//     for (var i = 0; i < 8; i++){
//       this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
//     }
//   },
// };
// //call functionto run southCenter code
// southCenter.generateCookies();
// //create <li> for southCenter
// var parent = document.getElementById('southCenter');
// var child;
// var total = 0;
// for (var i = 0; i < 8; i++) {
//   child = document.createElement('li');
//   if (i < 2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
//   }else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
//   }
//   total += southCenter.cookiesPerHour[i];
//   parent.appendChild(child);
//   console.log(total);
// }
// //pikePlace
// // Adding total to the <ul>
//
// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);
// //end of southCenter location3
//
// //location4 - Bellevue Square	20	48	3.3
// var bellevue = {
//   //propertyMinCust
//   minCustomers: 20,
//   maxCustomers: 48,
//   avgCookiesSold: 3.3,
//   cookiesPerHour: [],
//   hourlyCustomers: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
//   },
//   generateCookies: function() {
//     for (var i = 0; i < 8; i++){
//       this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
//     }
//   },
// };
// //call functionto run bellevue code
// bellevue.generateCookies();
// //create <li> for bellevue
// var parent = document.getElementById('bellevue');
// var child;
// var total = 0;
// for (var i = 0; i < 8; i++) {
//   child = document.createElement('li');
//   if (i < 2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + bellevue.cookiesPerHour[i] + ' cookies');
//   }else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + bellevue.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + bellevue.cookiesPerHour[i] + ' cookies');
//   }
//   total += bellevue.cookiesPerHour[i];
//   parent.appendChild(child);
//   console.log(total);
// }
// //bellevue
// // Adding total to the <ul>
//
// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);
//
//
//
// //Alki	3	24	2.6
//
// var alki = {
//   //propertyMinCust
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesSold: 2.6,
//   cookiesPerHour: [],
//   hourlyCustomers: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
//   },
//   generateCookies: function() {
//     for (var i = 0; i < 8; i++){
//       this.cookiesPerHour.push(Math.round(this.hourlyCustomers(this.minCustomers, this.maxCustomers) * this.avgCookiesSold));
//     }
//   },
// };
// //call functionto run alki code
// alki.generateCookies();
// //create <li> for alki
// var parent = document.getElementById('alki');
// var child;
// var total = 0;
// for (var i = 0; i < 8; i++) {
//   child = document.createElement('li');
//   if (i < 2){
//     child.textContent= ( (10+i) + ' am:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
//   }else  if (i===2){
//     child.textContent= ( '12 pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
//   }else{
//     child.textContent= ( (i-2) + ' pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
//   }
//   total += alki.cookiesPerHour[i];
//   parent.appendChild(child);
//   console.log(total);
// }
// //alki
// // Adding total to the <ul>
//
// child = document.createElement('li');
// child.textContent = ('Total: ' + total + ' cookies');
// parent.appendChild(child);
//
// //end of lab6

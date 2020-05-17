'use strict'

// store all hrs array
var hrs=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;

var seattle = {
    name: seattle,
    minCustPerHr:23,
    maxCustPerHr:65,
    agvCookieSold: 6.3,
    // method to generate rand num
    custEachHr: [],

    calcCustEachHR: function(){
        for (var i=0; i<hrs.length ; i++){
            var custAtThisHr = getRandomNumber(this.minCustPerHr,this.maxCustPerHr);
            this.custEachHr.push(custAtThisHr);
        }
    },

    cookieEachHr: [],
     totalCookieToday: 0,
    calcCookieEachHR: function(){
        for(var i=0; i<this.custEachHr.length;i++){
            var totalCookieSoldForHr= Math.ceil(this.custEachHr[i] * this.agvCookieSold);
            this.cookieEachHr.push(totalCookieSoldForHr);
            this.totalCookieToday = this.totalCookieToday + totalCookieSoldForHr ;
        }
    } , render: function(){
        seattle.calcCustEachHR();
        seattle.calcCookieEachHR();
        var seattleE = document.getElementById('seattle');

        var items = document.createElement('li');
         items.textContent = this.name;
         seattleE.appendChild(items);

    for(var i=0; i<hrs.length; i++){
        items = document.createElement('li');
        items.textContent = `${hrs[i]}: ${this.cookieEachHr[i]} cookies.`;
        seattleE.appendChild(items);
      }
      items = document.createElement('li');
    items.textContent = this.totalCookieToday;
    seattleE.appendChild(items);

    }

}

// RANDOM NUM FUNCT Global
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

seattle.render();

// TOKYO

var tokyo = {
    name: tokyo,
    minCustPerHr:3,
    maxCustPerHr:24,
    agvCookieSold: 1.2,
    // method to generate rand num
    custEachHr: [],

    calcCustEachHR: function(){
        for (var i=0; i<hrs.length ; i++){
            var custAtThisHr = getRandomNumber(this.minCustPerHr,this.maxCustPerHr);
            this.custEachHr.push(custAtThisHr);
        }
    },

    cookieEachHr: [],
     totalCookieToday: 0,
    calcCookieEachHR: function(){
        for(var i=0; i<this.custEachHr.length;i++){
            var totalCookieSoldForHr= Math.ceil(this.custEachHr[i] * this.agvCookieSold);
            this.cookieEachHr.push(totalCookieSoldForHr);
            this.totalCookieToday = this.totalCookieToday + totalCookieSoldForHr ;
        }
    } , render: function(){
        tokyo.calcCustEachHR();
        tokyo.calcCookieEachHR();
        var tokyoE = document.getElementById('tokyo');

        var items = document.createElement('li');
         items.textContent = this.name;
         tokyoE.appendChild(items);

    for(var i=0; i<hrs.length; i++){
        items = document.createElement('li');
        items.textContent = `${hrs[i]}: ${this.cookieEachHr[i]} cookies.`;
        tokyoE.appendChild(items);
      }
      items = document.createElement('li');
    items.textContent = this.totalCookieToday;
    tokyoE.appendChild(items);

    }

}

  tokyo.render();

  // Dubai

var dubai = {
    name: dubai,
    minCustPerHr:11,
    maxCustPerHr:38,
    agvCookieSold: 3.7,
    // method to generate rand num
    custEachHr: [],

    calcCustEachHR: function(){
        for (var i=0; i<hrs.length ; i++){
            var custAtThisHr = getRandomNumber(this.minCustPerHr,this.maxCustPerHr);
            this.custEachHr.push(custAtThisHr);
        }
    },

    cookieEachHr: [],
     totalCookieToday: 0,
    calcCookieEachHR: function(){
        for(var i=0; i<this.custEachHr.length;i++){
            var totalCookieSoldForHr= Math.ceil(this.custEachHr[i] * this.agvCookieSold);
            this.cookieEachHr.push(totalCookieSoldForHr);
            this.totalCookieToday = this.totalCookieToday + totalCookieSoldForHr ;
        }
    } , render: function(){
        dubai.calcCustEachHR();
        dubai.calcCookieEachHR();
        var dubaiE = document.getElementById('dubai');

        var items = document.createElement('li');
         items.textContent = this.name;
         dubaiE.appendChild(items);

    for(var i=0; i<hrs.length; i++){
        items = document.createElement('li');
        items.textContent = `${hrs[i]}: ${this.cookieEachHr[i]} cookies.`;
        dubaiE.appendChild(items);
      }
      items = document.createElement('li');
    items.textContent = this.totalCookieToday;
    dubaiE.appendChild(items);

    }

}

dubai.render();

// Paris

var paris = {
    name: paris,
    minCustPerHr:11,
    maxCustPerHr:38,
    agvCookieSold: 3.7,
    // method to generate rand num
    custEachHr: [],

    calcCustEachHR: function(){
        for (var i=0; i<hrs.length ; i++){
            var custAtThisHr = getRandomNumber(this.minCustPerHr,this.maxCustPerHr);
            this.custEachHr.push(custAtThisHr);
        }
    },

    cookieEachHr: [],
     totalCookieToday: 0,
    calcCookieEachHR: function(){
        for(var i=0; i<this.custEachHr.length;i++){
            var totalCookieSoldForHr= Math.ceil(this.custEachHr[i] * this.agvCookieSold);
            this.cookieEachHr.push(totalCookieSoldForHr);
            this.totalCookieToday = this.totalCookieToday + totalCookieSoldForHr ;
        }
    } , render: function(){
        paris.calcCustEachHR();
        paris.calcCookieEachHR();
        var parisE = document.getElementById('paris');

        var items = document.createElement('li');
         items.textContent = this.name;
         parisE.appendChild(items);

    for(var i=0; i<hrs.length; i++){
        items = document.createElement('li');
        items.textContent = `${hrs[i]}: ${this.cookieEachHr[i]} cookies.`;
        parisE.appendChild(items);
      }
      items = document.createElement('li');
    items.textContent = this.totalCookieToday;
    parisE.appendChild(items);

    }

}

paris.render();

// Lima

var lima = {
    name: lima,
    minCustPerHr:2,
    maxCustPerHr:16,
    agvCookieSold: 4.6,
    // method to generate rand num
    custEachHr: [],

    calcCustEachHR: function(){
        for (var i=0; i<hrs.length ; i++){
            var custAtThisHr = getRandomNumber(this.minCustPerHr,this.maxCustPerHr);
            this.custEachHr.push(custAtThisHr);
        }
    },

    cookieEachHr: [],
     totalCookieToday: 0,
    calcCookieEachHR: function(){
        for(var i=0; i<this.custEachHr.length;i++){
            var totalCookieSoldForHr= Math.ceil(this.custEachHr[i] * this.agvCookieSold);
            this.cookieEachHr.push(totalCookieSoldForHr);
            this.totalCookieToday = this.totalCookieToday + totalCookieSoldForHr ;
        }
    } , render: function(){
        lima.calcCustEachHR();
        lima.calcCookieEachHR();
        var limaE = document.getElementById('lima');

        var items = document.createElement('li');
         items.textContent = this.name;
         limaE.appendChild(items);

    for(var i=0; i<hrs.length; i++){
        items = document.createElement('li');
        items.textContent = `${hrs[i]}: ${this.cookieEachHr[i]} cookies.`;
        limaE.appendChild(items);
      }
      items = document.createElement('li');
    items.textContent = this.totalCookieToday;
    limaE.appendChild(items);

    }

}

lima.render();


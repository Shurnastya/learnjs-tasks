// 4 Задача
function sum(a) {

    return function(b) {
      return a + b;
    };
  
}

// 5 Задача
function inBetween(a, b) {

    return function(x) {
      return x >= a && x <= b;
    };

}

function inArray(arr) {

    return function(x) {
      return arr.includes(x);
    };

}

// 6 Задача
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

// 7 Задача
function makeArmy() {
    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() {
        alert( i );
      };
      shooters.push(shooter);
    }
  
    return shooters;
}
  
let army = makeArmy();
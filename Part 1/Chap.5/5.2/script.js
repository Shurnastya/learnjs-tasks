// 1 Задача
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

console.log( a + b );

// 3 Задача
function readNumber() {
    let number;
    
    do {
      number = prompt('Введите число', '');
      
      if (number === '' || number === null) return null;
    } while (!isFinite(number));
    
    return number;
}
  
alert( readNumber() );

// 5 Задача
function random(min, max) {
    return min + Math.random() * (max - min);
}

// 6 Задача
function randomInteger(min, max) {
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
}
console.log( randomInteger(1, 3) );
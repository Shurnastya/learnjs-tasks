// 2 Задача
//Правильно
function Obj(name) {
    this.name = name;
}
  
let obj = new Obj('Bla');
let obj2 = new user.constructor('Bla bla bla');

// Не правильно
function Obj(name) {
    this.name = name;
}
Obj.prototype = {}; // перезаписываем значение
  
let obj = new Obj('Bla');
let obj2 = new user.constructor('Bla bla bla');
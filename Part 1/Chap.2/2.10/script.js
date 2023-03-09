// 2 Задача
let js = prompt('Какое «официальное» название JavaScript?', '');

if (js == 'ECMAScript') {
  alert( 'Верно!' );
} else {
  alert( 'Не знаете? ECMAScript!' );
}

// 3 Задача
let num = prompt('Введите число...', '');

if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

// 4 Задача
let result = a + b < 4 ? 'Мало' : 'Много';

// 5 Задача
let message = (login == 'Сотрудник') ? 'Привет' : 
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина':
  '';
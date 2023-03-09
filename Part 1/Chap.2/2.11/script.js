// 6 Задача
if (age >= 14 && age <= 90);

// 7 Задача
if (age < 14 || age > 90);
if (!(age >= 14 && age <= 90));

// 9 Задача
let userName = prompt("Кто там?", '');
if (userName === 'Админ'){
    let password = prompt('Пароль?', '');
    if (password === 'Я тут главный!'){
        alert( 'Здравствуйте!' )
    } else if (password === null){
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }
} else if (userName === null){
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}
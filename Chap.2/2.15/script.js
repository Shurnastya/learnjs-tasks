// 2 Задача
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// 3 Задача
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

// 4 Задача
function pow(x, n) {
    let result;
    
    if (n >= 1) {
        result = x ** n;
    } else return `Степень ${n} не поддерживается`
    
    return result;
}

let x = prompt('Введите число');
let n = prompt('Введите степень');
alert(pow(x, n));
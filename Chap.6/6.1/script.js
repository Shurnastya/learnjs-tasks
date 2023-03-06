// 1 Задача
// Цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += 1;
    }
    return sum;
}
// Рекурия
function sumTo(n) {
    if (n == 1) {
        return 1
    } else {
        return n + sumTo(n - 1)
    }
}

// Формула
function sumTo(n) {
    return n * (n + 1) / 2;
}

// 2 Задача
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// 3 Задача
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

// 4 Задача
// Цикл
function printList(list) {

    while(list) {
      alert(list.value);
      list = list.next;
    }
  
}

// Рекурия
function printList(list) {
    console.log(list.value);
  
    if (list.next) {
      printList(list.next);
    }
  
} 
console.log(printList(list));

// 5 Задача
// Цикл
function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
}
  
console.log(printReverseList(list));

// Рекурия
function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
}
  
console.log(printReverseList(list));
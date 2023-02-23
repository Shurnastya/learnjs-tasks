// 4 Задача
for (let i = 2; i <= 10; i++) {

    if (i % 2 == 0) {
      alert(i);
    }
  
}

// 5 Задача
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// 6 Задача
let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// 7 Задача
let n = 10;

out: for (let i = 2; i <= n; i++) { 

    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue out; 
    }

  alert(i); 
}
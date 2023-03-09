// 1 Задача
function camelize(str) {
    return str
      .split('-')
      .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
      .join('');
}

// 2 Задача
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// 3 Задача
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}

// 4 Задача
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);


// 5 Задача
function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sort = copySorted(arr);

// 6 Задача
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

// 7 Задача
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

// 8 Задача
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersArr = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

// 9 Задача
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

// 10 Задача
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// 11 Задача
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// 12 Задача
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

// 13 Задача
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}
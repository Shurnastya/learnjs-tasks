// 1 Задача
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// 2 Задача
function isEmpty(obj) {

    for (let key in obj) {
      return false;
    }

    return true;
}

// 4 Задача
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
  
console.log(sum);

// 5 Задача
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric() {
    for (let key in obj) {

        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }

    }
    return obj;
}

multiplyNumeric(menu);
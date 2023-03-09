// 1 Задача
let user = {
    name: "Василий Иванович",
    age: 35
};
  
let userNew = JSON.parse(JSON.stringify(user));

// 2 Задача
function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}
// 1 Задача
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася"));

// 2 Задача 
function checkSpam(str) {
    let someStr = str.toLowerCase();
  
    return someStr.includes('viagra') || someStr.includes('xxx');
}
console.log(checkSpam('XXX'));

// 3 Задача 
function truncate(str, maxlength) {

    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "…";
    } else {
      return str;
    }
  
}

// 4 Задача 
function extractCurrencyValue(str) {
    return +str.slice(1);
}
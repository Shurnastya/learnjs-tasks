// 2 Задача
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(1, 1, 'Классика');
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);

// 4 Задача
function sumInput() {
    const arr = [];
  
    while (true) {
      const number = prompt('введите число: ', '');
      
      if (number === null || number === '' || isNaN(number)) break;
      
      arr.push(Number(number));
    }
    
    let sum = 0;
    for (const item of arr) {
      sum += item;
    }
    
    return sum;
}
  
alert(sumInput());

// 5 Задача
function getMaxSubSum(arr) {
    
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;

}
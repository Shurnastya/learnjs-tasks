// 1 Задача
function makeCounter() {
    let count = 0;
  
    function counter() {
        return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
}

// 2 Задача
function sum(a) {
    let sum = a;
  
    function func(b) {
        sum += b;
        return func;
    }
  
    func.toString = function() {
        return sum;
    };
  
    return func;
}
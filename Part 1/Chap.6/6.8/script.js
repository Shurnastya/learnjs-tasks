// 1 Задача
function printNumbers(from, to) {
    let current = from;
  
    let timer = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timer);
        }
        current++;
    }, 1000);
}

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function run() {
        console.log(current);
        if (current < to) {
            setTimeout(run, 1000);
        }
        current++;
    }, 1000);
}
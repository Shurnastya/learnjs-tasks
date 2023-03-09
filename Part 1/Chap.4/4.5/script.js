// 1 Задача
let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );

// 2 Задача
function Calculator() {
    this.read = function() {
        this.a = +prompt('Первое число?', 0);
        this.b = +prompt('Второе число?', 0);
    },

    this.sum = function() {
        return this.a + this.b;
    },

    this.mul = function() {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );

// 3 Задача
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Введите число?', 0);
    }

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
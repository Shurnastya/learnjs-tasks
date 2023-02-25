// 2 Задача
let calculator = {
    read() {
        this.a = +prompt('Первое число?', 0);
        this.b = +prompt('Второе число?', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 3 Задача
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
};
  
ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();
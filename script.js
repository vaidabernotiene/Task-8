/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), 
kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
a = 25;
b = 10;

function Calculator() {
  this.rezult;
}
Calculator.prototype.getSum = function (a, b) {
  console.log(`Sum: ${(this.rezult = a + b)}.`);
};
Calculator.prototype.getSub = function (a, b) {
  console.log(`Substraction: ${(this.rezult = a - b)}.`);
};
Calculator.prototype.getMult = function (a, b) {
  console.log(`Multiplication: ${(this.rezult = a * b)}.`);
};
Calculator.prototype.getDiv = function (a, b) {
  console.log(`Division: ${(this.rezult = a / b)}.`);
};

const calculator = new Calculator();
calculator.getSum(a, b);
calculator.getSub(a, b);
calculator.getMult(a, b);
calculator.getDiv(a, b);

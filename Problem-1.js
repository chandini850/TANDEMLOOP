class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(op) {
    switch (op) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) throw new Error("Cannot divide by zero");
        return this.a / this.b;
      default:
        throw new Error("Unknown operation: " + op);
    }
  }
}

const calc = new Calculator(12.5, 3.5);
console.log(calc.calculate("subtract"));

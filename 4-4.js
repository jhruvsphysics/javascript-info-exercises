// #2
// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    a: null,
    b: null,
    read() {
        this.a = window.prompt('a?')
        this.b = window.prompt('b?')
    },
    sum() {
        return Number(this.a) + Number(this.b)
    },
    mul() {
        return this.a * this.b
    }
}
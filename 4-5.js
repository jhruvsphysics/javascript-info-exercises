// #1
// Two functions – one object
// importance: 2
// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// If it is, then provide an example of their code.
let obj = {}
function A() {
    return obj
}


// #2
// Create new Calculator
// importance: 5
// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function() {
        this.a = +prompt('a?')
        this.b = +prompt('b?')
    }
    this.sum = function() {
        return this.a+this.b
    }
    this.mul = function() {
        return this.a*this.b
    }
}
* `Functions ` :

- A function is a reusable block of code designed to perform a specific task.
- Functions help:
    reduce repetition
    organize code
    improve readability
    make programs reusable

Ex:
----

function greet(name) {
  return "Hello " + name;
}
console.log(greet("Sam"));

* `Function Declaration` :

- A function declaration is a way to define a reusable block of code using the function keyword.

function functionName(parameters) {
    // code to execute
}

function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice"));    // Hello, Alice

- `Parts of a Function Declaration` :

function add(a, b) {
    return a + b;
}

function → keyword used to create a function
add → function name
(a, b) → parameters
{ } → function body
return → sends a value back

* `Function Expression` :

- A function expression is a function stored inside a variable.
- Instead of declaring a function directly, you assign the function to a variable.

const variableName = function(parameters) {
    // code to execute
};

Ex:
----

const greet = function(name) {
    return "Hello, " + name;
};
console.log(greet("Alice"));    // Hello, Alice

- `Parts of a Function Expression` :

const add = function(a, b) {
    return a + b;
};

const add → variable name
function(a, b) → function definition
a, b → parameters
return → gives back the result

- `Types of Function Expressions` :

1. `Anonymous Function Expression` : Function without a name.

const square = function(x) {
    return x * x;
};

2. Named Function Expression : Function with its own name.

const factorial = function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};

* `Difference Between Function Declaration and Function Expression` :

| Feature                 | Function Declaration | Function Expression |
| ----------------------- | -------------------- | ------------------- |
| Syntax                  | Declared directly    | Stored in variable  |
| Hoisting                | Fully hoisted        | Not fully hoisted   |
| Naming                  | Must have name       | Can be anonymous    |
| Usage before definition | Yes                  | No                  |


* `Arrow Functions` :

- Arrow functions are a shorter way to write functions in JavaScript.
They were introduced in ES6 (ECMAScript 2015).

Regular Function :

function add(a, b) {
    return a + b;
}

Arrow Function :

const add = (a, b) => {
    return a + b;
};

- `Syntax` :

- If the function has one statement, you can skip {} and return.

const square = x => x * x;
console.log(square(5));         // 25

- Multiple Parameters

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));    // 12

- No Parameters : Use empty parentheses.

const sayHello = () => "Hello!";
console.log(sayHello());       // Hello!

- Important Difference: this

- Arrow functions do not have their own this.
- They use this from the surrounding scope.

Regular Function :

const person = {
    name: "John",
    greet: function() {
        console.log(this.name);      // John
    }
};

person.greet();

Arrow Function :

const person = {
    name: "John",
    greet: () => {
        console.log(this.name);
    }
};

person.greet();      // undefined

- The arrow function may not work as expected because it does not bind its own this.

- Returning an Object : When returning an object directly, wrap it in parentheses:

const getUser = () => ({
  name: "Ravi",
  age: 25
});

- Without parentheses, JavaScript thinks {} is a function body.

* `Parameters and Arguments` :

- Functions can receive values to work with.
- These values are called parameters and arguments.

- Parameters : Parameters are variables listed in the function definition.

function greet(name) {
    console.log("Hello " + name);
}
Here: name is a parameter.

- Arguments : Arguments are the actual values passed to the function when calling it.

greet("Alice");
Here: "Alice" is an argument.

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));   // 8

a and b → parameters
5 and 3 → arguments

- Default Parameters : You can assign default values to parameters.

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();         // Hello Guest
greet("Alice");  // Hello Alice

- Rest Parameters : Rest parameters allow a function to accept multiple arguments.

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));    // 10

* `Return Values` :

- A return value is the value a function sends back after completing its task.
- JavaScript uses the return keyword to return a value from a function.

function functionName() {
    return value;
}

function add(a, b) {
    return a + b;
}
const result = add(5, 3);
console.log(result);     // 8

- Function Without Return :

function greet(name) {
    console.log("Hello " + name);
}
const result = greet("Alice");   // Hello Alice
console.log(result);     // undefined

* `Scope in Functions` :

- Scope means the area of your code where a variable can be accessed or used.
- In JavaScript functions, scope decides where variables are visible and where they are not.

- `🔹 Types of Scope in Functions` :

1. Global Scope :

- A variable declared outside a function is in global scope.
- It can be used anywhere in the program.

let name = "Alice";
function greet() {
    console.log(name);  // Alice
}
greet();
console.log(name);      // Alice

// ✔ Global variables are accessible inside functions and outside functions.

2. Local Scope (Function Scope) :

- A variable declared inside a function is local to that function.
- It can be used only inside that function.

function test() {
    let message = "Hello";
    console.log(message);
}
test();
console.log(message); // Error

Hello
ReferenceError: message is not defined

// ✔ Local variables cannot be accessed outside the function.

3. Block Scope (let and const) :

- Variables declared using let and const inside { } blocks are block-scoped.

if (true) {
    let age = 25;
    console.log(age);
}
console.log(age); // Error

25
ReferenceError: age is not defined

4. Function Scope vs Block Scope :

Function Scope (var)
Block Scope (let, const)

5. Lexical Scope (Important Concept) :

- A function can access variables from its outer (parent) scope.

function outer() {
    let message = "Hello from outer";
    function inner() {
        console.log(message);    // Hello from outer
    }
    inner();
}
outer();

// ✔ Inner functions can access outer variables.

6. Scope Chain

- If a variable is not found in the current scope, JavaScript looks upward:
    Local scope
    Outer function scope
    Global scope

let x = 100;
function outer() {
    let y = 50;
    function inner() {
        let z = 10;
        console.log(x + y + z);    // 160
    }
    inner();
}
outer();

🔑 `Key Points` :
Global scope → accessible everywhere
Function scope → accessible only inside function
Block scope → accessible only inside { }
Inner functions can access outer variables (lexical scope)
JavaScript uses a scope chain to find variables

* `Closures` :

- A closure is when a function remembers variables from its outer scope, even after the outer function has finished executing.
- A closure = a function + its surrounding “memory” (lexical environment)

function outer() {
    let message = "Hello from outer";
    function inner() {
        console.log(message);         // Hello from outer
    }
    return inner;
}
const fn = outer();
fn();

🔍 What is happening here?

- Step by step :
outer() runs
It creates a variable message
It defines inner() function
It returns inner function
outer() finishes execution
But fn() still remembers message

✔ This “remembering” is called a closure

🔹 Why Closures Work :

- JavaScript functions don’t lose their scope after execution if:
- An inner function still needs those variables
- So the function carries its lexical environment with it.

- 🔹 Another Simple Example :

function greet() {
    let name = "Alice";
    return function () {
        console.log("Hello " + name);   // Hello Alice
    };
}
const sayHello = greet();
sayHello();
// ✔ The inner function still remembers name

- 🔹 Where Closures Are Used :

1. Data Privacy (Encapsulation)

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const c = counter();
console.log(c());  // 1
console.log(c());  // 2
console.log(c());  // 3

✔ count is private and cannot be accessed directly

2. Callbacks :

function outer(name) {
    setTimeout(function () {
        console.log("Hello " + name);
    }, 1000);
}
outer("John");

✔ The callback still remembers name

* `Higher-Order Functions` :

- A Higher-Order Function (HOF) is a function that either:
- Takes another function as an argument, or
- Returns a function, or both

🔹 1. Function as an Argument :

function greet(name) {
    return "Hello " + name;
}
function processUser(fn, value) {
    console.log(fn(value));
}
processUser(greet, "Alice");     // Hello Alice
// greet is passed into processUser
// processUser is a Higher-Order Function

🔹 2. Function Returning a Function :

function multiplier(x) {
    return function (y) {
        return x * y;
    };
}
const double = multiplier(2);
console.log(double(5));  // 10
✔ multiplier returns another function → HOF

🔹 3. Both Together (Very Powerful) :

function operate(fn, a, b) {
    return fn(a, b);
}
function add(x, y) {
    return x + y;
}
console.log(operate(add, 3, 4));  // 7

- 🔹 Built-in Higher-Order Functions : 1. map() , 2. filter() , 3. reduce()

* `Callback Functions` :

- A callback function is a function that is passed as an argument to another function and is executed later (or at a specific time).

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
greet("Alice", sayBye);

✔ Here:
sayBye is the callback function
It is passed into greet
It is executed inside greet

🔹 Callback vs Higher-Order Function :

| Concept               | Meaning                                   |
| --------------------- | ----------------------------------------- |
| Callback Function     | Function passed into another function     |
| Higher-Order Function | Function that takes or returns a function |



Immediately Invoked Function Expression (IIFE)
Recursive Functions
this Keyword in Functions
call, apply, bind
Hoisting
Pure vs Impure Functions
First-Class Functions
Async Functions
Generator Functions
Factory Functions
Function Methods & Properties
Memoization
Functional Programming Concepts
    Immutability
    Composition
    Currying
    Partial application
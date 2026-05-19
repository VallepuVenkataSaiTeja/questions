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


* `Immediately Invoked Function Expression (IIFE)` :

- An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it is created.

(function() {
    // code
})();

or 

(() => {
    // code
})();

Ex:
----
🔹 Normal Function IIFE :

(function() {
    console.log("Hello, IIFE!");
})();       // Hello, IIFE!

🔹 Arrow Function IIFE :

(() => {
    console.log("Arrow IIFE running");
})();           // Arrow IIFE running

🔹 IIFE with Parameters :

(function(name) {
    console.log("Hello " + name);
})("Alice");      // Hello Alice

🔹 Why Use IIFE?

1. Avoid Global Variables :

(function() {
    let message = "Inside IIFE";
    console.log(message);
})();
console.log(message); // Error

✔ message is not accessible outside

2. Data Privacy (Encapsulation) :

const result = (function() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
})();
console.log(result());  // 1
console.log(result());  // 2

✔ count is hidden from outside access

3. One-Time Execution :

(function() {
    console.log("This runs only once");
})();

✔ Useful for setup or initialization code

* `Recursive Functions` :

- A recursive function is a function that calls itself until a condition is met.

* Every recursive function needs:
- Base Case → when to stop
- Recursive Case → function calling itself with a smaller problem
* Without a base case, recursion runs forever and causes:
  RangeError: Maximum call stack size exceeded

* Simple Example — Counting Down :

function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
countdown(5);

5
4
3
2
1
Done!

* Example 2: Factorial 

5! = 5 × 4 × 3 × 2 × 1
Recursive thinking:
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!

function factorial(n) {
    // Base case
    if (n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
console.log(factorial(5));    // 120

factorial(5)
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * 4 * 3 * 2 * 1
= 120

* Example 3 — Sum of array recursively

Loop version: 
const arr = [1, 2, 3, 4];
let sum = 0;
for (let num of arr) {
    sum += num;
}
console.log(sum);

Recursive version:
function sumArray(arr) {
    // Base case
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4]));

* Example 4 — Fibonacci : (0 1 1 2 3 5 8 13)

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

* `this Keyword in Functions` :

- this :

- In JavaScript, this refers to the current execution context — usually the object that is calling the function.
- The value of this changes depending on how the function is invoked.

Different behaviors of this :
There are mainly 5 important cases:

Global context
Regular function
Object method
Arrow function
Constructor function / class

1. this in Global Context : 
console.log(this);
In browser: window
In Node.js: does NOT equal global object directly.

2. this in Regular Function :
function test() {
    console.log(this);
}
test();
In Browser (non strict mode) : window

In Strict Mode :
"use strict";
function test() {
    console.log(this);
}
test();   // undefined

3. this in Object Methods :

const person = {
    name: "Anil",
    sayHi() {
        console.log(this.name);
    }
};
person.sayHi();   // Anil
Because caller is: person.sayHi() (so this === person)

Important confusion :

const person = {
    name: "Anil",
    sayHi() {
        console.log(this);
    }
};
person.sayHi();

Output :
{
  name: "Anil",
  sayHi: f
}
NOT the function itself.

- Losing this :

const user = {
    name: "Ravi",
    greet() {
        console.log(this.name);
    }
};
const fn = user.greet;
fn();      // undefined
- Because now function is called like: fn()
- No object before dot. So this is lost.

Fixing lost this : Use bind().

const boundFn = user.greet.bind(user);
boundFn();   // Ravi

4. this in Arrow Functions :

Arrow functions behave VERY differently.
They do NOT create their own this.
They inherit this from parent scope.
This is called: lexical this

const user = {
    name: "Ravi",
    greet: () => {
        console.log(this.name);
    }
};
user.greet();  // undefined

Because arrow function does NOT use user as this.
It takes this from surrounding scope.
In browser, surrounding scope is usually: window

Why arrow functions exist then?
They are useful when we WANT inherited this.
Especially inside callbacks.

- Problem with regular callback :

const user = {
    name: "Ravi",
    greet() {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};
user.greet();   // undefined
- Because callback function gets its own this.

Fix using arrow function :

const user = {
    name: "Ravi",
    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
user.greet();   // Ravi
- Arrow function inherited this from greet().

5. this in Constructor Functions :

function User(name) {
    this.name = name;
}
const u1 = new User("Ravi");
console.log(u1.name);  // Ravi

this === newly created object , because of new.

this in Classes :

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
}
const p = new Person("Kiran");
p.greet();   // Kiran

* `call, apply, bind` :

- These methods are used to manually control the value of this.
- They are available on all functions.

Normally: obj.method() sets: this === obj

But sometimes we want to:

borrow methods
fix lost this
reuse functions with different objects
control execution context manually

That’s where:

call()
apply()
bind()

come in.

- First understand the problem :

const user1 = {
    name: "Ravi"
};
const user2 = {
    name: "Anil"
};
function greet() {
    console.log("Hello", this.name);
}
- How do we use greet() for both users?

1. call() :
- call() immediately invokes the function.
- fn.call(thisArg, arg1, arg2, ...)

function greet(city) {
    console.log(this.name, city);
}
const user = {
    name: "Ravi"
};
greet.call(user, "Delhi");   // Ravi Delhi

- Multiple arguments with call() :

function intro(age, city) {
    console.log(this.name, age, city);
}
const person = {
    name: "Kiran"
};
intro.call(person, 25, "Mumbai");   // Kiran 25 Mumbai

2. apply() :
apply() is almost same as call().

Difference:
apply() takes arguments as ARRAY

Syntax:
fn.apply(thisArg, [argsArray])

function intro(age, city) {
    console.log(this.name, age, city);
}
const person = {
    name: "Ravi"
};
intro.apply(person, [22, "Hyderabad"]);

- Difference between call and apply :
| Method    | Arguments           |
| --------- | ------------------- |
| `call()`  | separated by commas |
| `apply()` | array               |

3. bind() :
bind() is VERY important.
Unlike call() and apply():
bind() does NOT execute immediately.
It returns a NEW function.

const newFn = fn.bind(thisArg);

function greet() {
    console.log(this.name);
}
const user = {
    name: "Ravi"
};
const boundFn = greet.bind(user);
boundFn();   // Ravi

- bind() permanently fixes this : const fn = greet.bind(user);
No matter how function is later called:
fn();
fn.call(otherObj);
- this remains user.

- Important Interview Difference :
| Feature               | call            | apply             | bind                   |
| --------------------- | --------------- | ----------------- | ---------------------- |
| Executes immediately? | Yes             | Yes               | No                     |
| Returns new function? | No              | No                | Yes                    |
| Arguments             | comma separated | array             | comma separated        |
| Main use              | invoke now      | invoke with array | fix `this` permanently |

* `Hoisting` :
- Hoisting means JavaScript moves declarations to the top of their scope before execution.
- Before code runs, JavaScript scans declarations and allocates memory for them.

console.log(a);
var a = 10;   // undefined

JavaScript internally treats it like:

var a;
console.log(a);
a = 10;
- The declaration is hoisted, but the value assignment is not.

1. Hoisting with var :
var x is hoisted
initialized with undefined

console.log(x);
var x = 5;

2. Hoisting with let :

console.log(a);
let a = 10;   // ReferenceError
- let is hoisted too, but it stays in the: Temporal Dead Zone (TDZ) until initialization.

3. Hoisting with const :

console.log(pi);
const pi = 3.14;  // ReferenceError
- Same reason: hoisted but inaccessible before declaration

- `Temporal Dead Zone (TDZ)` :
- The time between: start of scope until declaration line.

{
    console.log(x);
    let x = 10;
}
- x exists in memory. But it's inside TDZ until: let x = 10; is executed

- Function Hoisting : 

- Function Declarations :Function declarations are fully hoisted.

greet();
function greet() {
  console.log("Hello");   // Hello
}

- Function Expressions :

sayHi();
var sayHi = function () {
  console.log("Hi");      // TypeError
};

var sayHi;
sayHi(); // undefined()
sayHi = function () {
  console.log("Hi");    // undefined is not callable.
};

* `Pure vs Impure Functions` :

1. Pure Function

A pure function is a function that:
    Always returns the same output for the same input
    Does NOT change external variables
    Has no side effects (doesn’t modify anything outside itself)

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));

Output (always same):
5
5

2. Impure Function

- An impure function is a function that:
    Depends on or modifies external state
    Produces different output for same input
    Has side effects

Example 1: Using external variable

let count = 0;
function increase() {
  count++;
  return count;
}
console.log(increase());
console.log(increase());

1
2

-Why impure? Changes external variable (count)

Example 2: Using random values 

function getRandomNumber() {
  return Math.random();
}
console.log(getRandomNumber());
console.log(getRandomNumber());

0.45
0.88

- Why impure? Output is not predictable

Example 3: Modifying object

const user = { name: "Rahul" };
function changeName(obj) {
  obj.name = "Aman";
}
changeName(user);
console.log(user.name);  // Aman

- Why impure? Modifies external object

3. Key Differences :

| Feature        | Pure Function              | Impure Function  |
| -------------- | -------------------------- | ---------------- |
| Output         | Always same for same input | Can change       |
| Side effects   | No                         | Yes              |
| External data  | Not used                   | Used or modified |
| Predictability | High                       | Low              |


* `First-Class Functions` :

- In JavaScript, functions are treated like values. This is called:
First-Class Functions

It means functions can be:
stored in variables
passed as arguments
returned from other functions
stored in data structures (like arrays, objects)

1. Function as a Variable : 👉 Here, the function is stored in a variable.

const greet = function () {
  console.log("Hello!");
};
greet();

2. Function Passed as an Argument : 👉 Functions can be passed like numbers or strings.

function sayHello() {
  return "Hello";
}
function greet(fn) {
  console.log(fn());
}
greet(sayHello);  // Hello

3. Function Returning Another Function : 👉 A function can return another function.

function outer() {
  return function () {
    console.log("Inner function");
  };
}
const fn = outer();
fn();    // Inner function

4. Function Stored in Object : 👉 Functions can be properties of objects.

const obj = {
  greet: function () {
    console.log("Hi");
  }
};
obj.greet();

5. Function in Array :

const arr = [
  function () { console.log("A"); },
  function () { console.log("B"); }
];
arr[0]();  // A
arr[1]();  // B

* `Async Functions` :

- An async function is a function that allows you to write asynchronous code in a clean, synchronous-looking way using async and await.

1. What is an Async Function?
You define it using the async keyword:

async function greet() {
  return "Hello";
}
greet().then(console.log);  // Hello

- An async function always returns a Promise.

async function test() {
  return 10;
}

is equivalent to:

function test() {
  return Promise.resolve(10);
}

2. await Keyword :
- await is used inside async functions to pause execution until a Promise is resolved.

async function getData() {
  let result = await Promise.resolve("Data received");
  console.log(result);
}
getData();   // Data received

* `Generator Functions` :


Factory Functions
Function Methods & Properties
Memoization
Functional Programming Concepts
    Immutability
    Composition
    Currying
    Partial application
# JavaScript Roadmap (Most Important Topics)

# 1. JavaScript Basics

Must know perfectly.

Topics:

* Variables (`var`, `let`, `const`)
* Data types
* Operators
* Conditionals
* Loops
* Functions
* Arrays
* Objects
* Template literals
* Destructuring
* Spread/rest operators

Example concepts:

```js id="b1"
const user = { name: "John" };

const { name } = user;
```

---

# 2. Scope & Hoisting

VERY IMPORTANT for interviews.

Topics:

* Global scope
* Function scope
* Block scope
* Lexical scope
* Hoisting
* Temporal Dead Zone (TDZ)

Must understand:

```js id="s1"
var
let
const
```

differences deeply.

---

# 3. Execution Context & Call Stack

Core JS engine concepts.

Topics:

* Global Execution Context
* Function Execution Context
* Memory phase
* Execution phase
* Call stack
* Stack overflow

---

# 4. Closures

One of the MOST IMPORTANT concepts.

Topics:

* Inner functions
* Lexical environment
* Data privacy
* Function factories

Example:

```js id="c1"
function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}
```

---

# 5. `this` Keyword

Critical topic.

Must know:

* Global `this`
* Object method `this`
* Function `this`
* Arrow function `this`
* Event listener `this`
* `call`
* `apply`
* `bind`

---

# 6. Functions Deep Dive

Topics:

* Function declaration
* Function expression
* Arrow functions
* Higher-order functions
* Callback functions
* Pure functions
* IIFE
* First-class functions

---

# 7. Arrays & Array Methods

VERY heavily used.

Must know:

* `map`
* `filter`
* `reduce`
* `find`
* `some`
* `every`
* `forEach`
* `sort`
* `slice`
* `splice`

Especially:

```js id="arr1"
map()
filter()
reduce()
```

---

# 8. Objects

Topics:

* Object creation
* Object methods
* `this`
* Nested objects
* Object destructuring
* Object.keys()
* Object.values()
* Entries
* Freeze/seal

---

# 9. Asynchronous JavaScript

SUPER IMPORTANT.

Topics:

* Synchronous vs asynchronous
* Callback functions
* Callback hell
* Promises
* Promise chaining
* async/await
* Event loop
* Microtask queue
* Macrotask queue

Must deeply know:

```js id="async1"
Promise
async/await
event loop
```

---

# 10. DOM Manipulation

Required for frontend.

Topics:

* Selecting elements
* Changing content/styles
* Event listeners
* Forms
* Event bubbling
* Event delegation

Example:

```js id="dom1"
document.querySelector()
```

---

# 11. Event Loop

Very important advanced topic.

Must know:

* Call stack
* Web APIs
* Callback queue
* Microtask queue
* Promise priority

Example interview question:

```js id="dom2"
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

console.log(4);
```

---

# 12. Prototypes & Inheritance

Advanced but important.

Topics:

* Prototype chain
* `__proto__`
* Constructor functions
* Inheritance
* Prototype methods

---

# 13. Classes (ES6)

Topics:

* Class syntax
* Constructor
* Methods
* Inheritance
* `super`

---

# 14. Modules

Modern JS structure.

Topics:

* `export`
* `import`
* Default export
* Named export

---

# 15. Error Handling

Topics:

* `try`
* `catch`
* `finally`
* `throw`
* Custom errors

---

# 16. Memory Management

Important for advanced understanding.

Topics:

* Stack memory
* Heap memory
* Primitive vs reference
* Garbage collection
* Memory leaks

---

# 17. Advanced Concepts

These make you strong.

Topics:

* Debouncing
* Throttling
* Currying
* Memoization
* Polyfills
* Deep copy vs shallow copy
* Event delegation
* Generators
* Iterators

---

# 18. Browser APIs

Topics:

* Local storage
* Session storage
* Fetch API
* Geolocation
* Timers

---

# 19. ES6+ Features

Modern JS essentials.

Topics:

* Arrow functions
* Destructuring
* Template literals
* Optional chaining
* Nullish coalescing
* Spread/rest
* Modules

---

# 20. Interview-Focused Topics (VERY IMPORTANT)

These are asked constantly.

## Must master:

* Closures
* Hoisting
* Scope
* `this`
* Event loop
* Promises
* async/await
* Prototypes
* Debouncing/throttling
* Call/apply/bind
* map/filter/reduce

---

# Best Order to Learn

```text id="roadmap"
1. Basics
2. Scope + Hoisting
3. Functions
4. Arrays + Objects
5. this keyword
6. Closures
7. Execution Context + Call Stack
8. Async JS + Promises
9. Event Loop
10. DOM
11. Prototypes
12. Classes
13. Advanced concepts
```

---

# If You Want Job Readiness

After JavaScript:

Learn:

1. HTML/CSS
2. JavaScript deeply
3. React
4. Node.js
5. Databases
6. System design basics

---

# MOST IMPORTANT JS TOPICS (Top 10)

If short on time, prioritize these:

```text id="top10"
1. Scope
2. Hoisting
3. Closures
4. this keyword
5. Promises
6. async/await
7. Event loop
8. map/filter/reduce
9. Prototypes
10. DOM events
```

---

# One-line Summary

```text id="sum"
Core JS = Scope + Functions + Closures + Async + Event Loop
```

--------------------------------------------------------------------------
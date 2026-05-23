# Core Async JavaScript Topics

## 1. `Synchronous vs Asynchronous JavaScript`
- `Synchronous` : Code runs line by line, one task at a time.
- `Asynchronous` : JavaScript can start a task and continue executing other code without waiting.
( When the async task finishes, JavaScript handles the result later. )

console.log("A");
console.log("B");
console.log("C");  
- A B C

console.log("Start");
setTimeout(() => {
  console.log("Timer Done");
}, 2000);
console.log("End");
- Start End Timer Done

Understand:

* Blocking vs non-blocking code
* Single-threaded nature of JavaScript
* Why async programming exists

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Async");
}, 1000);

console.log("End");
```

---

## 2. `Callbacks`
- A function passed as an argument to another function, to be executed later.

The original async pattern in JS.

Learn:

* Callback functions
* Callback hell problem
* Error-first callbacks

Example:

```js
fs.readFile("file.txt", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
```

---

## 3. `Promises` (Very Important)
- An object representing the eventual completion or failure of an asynchronous operation.
- A Promise has 3 states: 
Pending  →  Fulfilled
         →  Rejected

// `creating a promise`
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

// `Consuming a Promise`
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  });


// `Promise Chaining` - Promises can return other Promises.

Promise.resolve(2)
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num * 3;
  })
  .then((result) => {
    console.log(result);
  });

// `Promise Static Methods`

1. `Promise.resolve()` - Creates an immediately resolved promise.
Promise.resolve("Hello")
  .then(console.log);

2. `Promise.reject()` - Creates an immediately rejected promise.
Promise.reject("Error")
  .catch(console.log);

3. `Promise.all()` - Waits for ALL promises to succeed.
- If even ONE fails: entire promise fails
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  });
// [10, 20, 30]

// If One Promise Fails :
const p1 = Promise.resolve("A");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// Error

4. `Promise.allSettled()` - Waits for ALL promises: success / failure ,Never rejects.
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2])
  .then((results) => {
    console.log(results);
  });
  
[
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Failed' }
]

| Feature        | `Promise.all()`  | `Promise.allSettled()`  |
| -------------- | ---------------- | ----------------------- |
| Fails fast     | Yes              | No                      |
| Waits for all  | Yes              | Yes                     |
| Ignores errors | No               | Yes                     |
| Result type    | Array of values  | Array of status objects |
| Use case       | All must succeed | Partial success OK      |


5. `Promise.race()` - Returns the FIRST settled promise. Could be: success,failure
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second"), 2000);
});

Promise.race([p1, p2])
  .then((result) => {
    console.log(result);
  });
// First

// 6. `Promise.any()` - Returns: First SUCCESSFUL promise ,Ignores rejected promises.
- Only fails if ALL promises fail.

const p1 = Promise.reject("Fail 1");

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 1000);
});

const p3 = Promise.reject("Fail 3");

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  });
// Success

- If All Fail : returns AggregateError
Promise.any([
  Promise.reject("A"),
  Promise.reject("B")
])
.catch(err => console.log(err));

| Feature             | `Promise.race()`    | `Promise.any()`       |
| ------------------- | ------------------- | --------------------- |
| Wins by             | First to finish     | First success         |
| Rejects count       | Included            | Ignored               |
| If first is failure | Rejects immediately | Keeps waiting         |
| If all fail         | Last error wins     | AggregateError        |
| Use case            | timeout, speed      | best available result |


A foundational modern async concept.

Must know:

* `new Promise()`
* `resolve`
* `reject`
* `.then()`
* `.catch()`
* `.finally()`

Example:

```js
const promise = new Promise((resolve, reject) => {
  resolve("Done");
});

promise.then(res => console.log(res));
```

---

## 4. `async / await` (Most Used)
- async/await is the modern way to work with asynchronous code in JavaScript.

Modern clean syntax over promises.

Must know:

* `async`   
- The async keyword makes a function asynchronous.
- An async function ALWAYS returns a promise.

async function test() {
  return "Hello";
}
console.log(test()); -> Promise { "Hello" }

* `await` 
- await pauses execution until a promise settles.
- only works inside async functions

const result = await promise;

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  console.log(users);
}
getUsers();

* Error handling with `try/catch`

try {
  const data = await fetchData();
} catch (err) {
  console.log(err);
}

Example:

```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

# Extremely Important Runtime Concepts

## 5. `Event Loop`
- The Event Loop is the mechanism that makes JavaScript asynchronous and non-blocking, even though JavaScript is single-threaded.

One of the most important JS interview topics.

Understand:

* Call stack
- Executes synchronous code
- Works in LIFO (Last In First Out)

* Web APIs
- Handles async tasks like: setTimeout ,fetch ,DOM events

* Callback queue (Macrotask Queue)
- Holds callbacks from: setTimeout ,setInterval ,events

* Microtask queue
- Higher priority queue
- Holds: Promises (.then, .catch) , queueMicrotask

* Event loop flow (Event Loop always keeps checking if call stack is empty)
1.Run synchronous code (Call Stack)
2.Send async tasks to Web APIs
3.When ready:
   Promises → Microtask Queue
   Timers → Callback Queue
4.Event Loop:
   First runs ALL microtasks
   Then runs ONE macrotask
5.Repeat

Key idea:
Promises execute before `setTimeout`.

1. What Happens When JS Runs Code?

// When JavaScript executes code:
- It creates an Execution Context
- Pushes it into the Call Stack
- Executes line by line
- Removes it after completion

`Execution Context` (A box containing everything needed to run code)
- An Execution Context is the environment where JavaScript code is executed.

// Types of Execution Context
| Type                       | Description                       |
| -------------------------- | --------------------------------- |
| Global Execution Context   | Created for global code           |
| Function Execution Context | Created for each function call    |
| Eval Execution Context     | Created by `eval()` (rarely used) |

// Execution Context Has 2 Phases
1. Memory Creation Phase (also called Hoisting Phase)
2. Execution Phase

// Phase 1: Memory Creation Phase - JS scans code and allocates memory.

var a = 10;
function greet() {
  console.log("Hi");
}
greet();

Internally:
a -> undefined
greet -> entire function definition

// Phase 2: Execution Phase - Now code runs line by line.

* `Call Stack` LIFO = Last In First Out
- The Call Stack tracks execution contexts.

function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.log("Hello");
}
one();

Call Stack:

-----------------
|   three()     |
-----------------
|    two()      |
-----------------
|    one()      |
-----------------
|      GEC      |
-----------------

// Infinite recursion causes: Stack Overflow

Example:

```js
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

console.log(4);
```

Output:

```txt
1
4
3
2
```

---

## 6. Microtasks vs Macrotasks

Must know for interviews.

### Microtasks

* Promise callbacks
* `queueMicrotask`

### Macrotasks

* `setTimeout`
* `setInterval`
* DOM events

| Feature    | Microtasks  | Macrotasks         |
| ---------- | ----------- | ------------------ |
| Priority   | High        | Low                |
| Runs after | Sync code   | Microtasks         |
| Examples   | Promises    | setTimeout         |
| Execution  | All at once | One per loop cycle |


---

## 7. Fetch API

Modern async HTTP requests.

- The Fetch API is the modern way in JavaScript to make HTTP requests (API calls)
- It is used to:
    get data from servers
    send data to servers
    interact with backend APIs
- Fetch returns a Response object, NOT JSON , later we will Convert Response to JSON

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

1.fetch() sends request
2.Server responds
3.Response object is returned (NOT JSON yet)
4. .json() converts it to usable JS object
5.Data is printed

// Fetch POST Request :
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "World",
    userId: 1
  })
})
  .then((res) => res.json())
  .then((data) => console.log(data));


| Method | Purpose             |
| ------ | ------------------- |
| GET    | Fetch data          |
| POST   | Create data         |
| PUT    | Update full data    |
| PATCH  | Update partial data |
| DELETE | Remove data         |

// Checking Response Status
| Property        | Meaning                |
| --------------- | ---------------------- |
| response.ok     | true if status 200–299 |
| response.status | HTTP status code       |

// Fetch vs Axios
| Feature         | Fetch  | Axios     |
| --------------- | ------ | --------- |
| Built-in        | Yes    | No        |
| JSON parsing    | Manual | Automatic |
| Error handling  | Manual | Automatic |
| Browser support | Native | Library   |

// Status Code :
- A 3-digit number returned by the server to indicate the result of a request.

| Range | Category      | Meaning               |
| ----- | ------------- | --------------------- |
| 1xx   | Informational | Request received      |
| 2xx   | Success       | Request successful    |
| 3xx   | Redirection   | Resource moved        |
| 4xx   | Client Error  | Your request is wrong |
| 5xx   | Server Error  | Server failed         |



Learn:

* `fetch`
* Request methods
* Headers
* JSON handling
* Error handling

Example:

```js
const res = await fetch("/api/users");
const users = await res.json();
```

---

# Advanced Promise Concepts

## 8. Promise Utility Methods

Very important in real projects.

Learn:

* `Promise.all()`
* `Promise.allSettled()`
* `Promise.race()`
* `Promise.any()`

Example:

```js
const results = await Promise.all([
  fetch("/a"),
  fetch("/b")
]);
```

---

## 9. Error Handling in Async Code

Must know:

* `try/catch`
* Promise rejection handling
* Unhandled promise rejection

---

## 10. Timers

Learn:

* `setTimeout`
* `setInterval`
* `clearTimeout`
* `clearInterval`

---

# Intermediate / Advanced Topics

## 11. Closures with Async

Very common interview area.

Example:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Why output is:

```txt
3
3
3
```

And how `let` fixes it.

---

## 12. Debouncing & Throttling

Important for frontend optimization.

Use cases:

* Search inputs
* Scroll events
* Resize handlers

---

## 13. Async Iteration

Learn:

* `for await...of`
* Async generators

Example:

```js
for await (const item of items) {
  console.log(item);
}
```

---

## 14. AbortController

Cancel async requests.

Example:

```js
const controller = new AbortController();

fetch(url, {
  signal: controller.signal
});

controller.abort();
```

---

## 15. Parallel vs Sequential Execution

Very important optimization concept.

Sequential:

```js
await a();
await b();
```

Parallel:

```js
await Promise.all([a(), b()]);
```

---

# Browser + Node.js Async APIs

## Browser APIs

* Fetch
* WebSockets
* IndexedDB
* Geolocation
* Web Workers

## Node.js APIs

* File system (`fs`)
* Streams
* Timers
* Process events

---

# Advanced Concepts (Optional but Valuable)

## 16. Web Workers

Background threading in browser.

---

## 17. Streams

Useful for:

* Large file processing
* Real-time data

---

## 18. Observables (RxJS)

Common in Angular and reactive systems.

---

# Best Learning Order

1. Sync vs Async
2. Callbacks
3. Promises
4. async/await
5. Event loop
6. Fetch API
7. Promise methods
8. Error handling
9. Debounce/throttle
10. Advanced async patterns

---

# Most Important Topics for Interviews

Focus heavily on:

* Event loop
* Promises
* async/await
* Promise.all
* Microtask vs macrotask
* Closure + async
* Error handling
* Debouncing/throttling

---

# If You Want Job-Ready Async JS

You should be comfortable building:

* API calls
* Parallel requests
* Retry mechanisms
* Loading states
* Polling
* Request cancellation
* Infinite scroll
* Real-time updates

---

# Recommended Practice

Build mini projects:

* Weather app
* GitHub user search
* Infinite scrolling feed
* Chat app
* Live search with debounce
* File upload progress


--------------------------------------------------------------------------


Here’s a practical list of **essential async JavaScript topics** to learn, ordered from fundamentals to advanced concepts.

---

# Core Async JavaScript Topics

## 1. Synchronous vs Asynchronous JavaScript
Understand:
- Blocking vs non-blocking code
- Single-threaded nature of JavaScript
- Why async programming exists

Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Async");
}, 1000);

console.log("End");
```

---

## 2. Callbacks
The original async pattern in JS.

Learn:
- Callback functions
- Callback hell problem
- Error-first callbacks

Example:
```js
fs.readFile("file.txt", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
```

---

## 3. Promises (Very Important)
A foundational modern async concept.

Must know:
- `new Promise()`
- `resolve`
- `reject`
- `.then()`
- `.catch()`
- `.finally()`

Example:
```js
const promise = new Promise((resolve, reject) => {
  resolve("Done");
});

promise.then(res => console.log(res));
```

---

## 4. async / await (Most Used)
Modern clean syntax over promises.

Must know:
- `async`
- `await`
- Error handling with `try/catch`

Example:
```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

---

# Extremely Important Runtime Concepts

## 5. Event Loop
One of the most important JS interview topics.

Understand:
- Call stack
- Web APIs
- Callback queue
- Microtask queue
- Event loop flow

Key idea:
Promises execute before `setTimeout`.

Example:
```js
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

console.log(4);
```

Output:
```txt
1
4
3
2
```

---

## 6. Microtasks vs Macrotasks
Must know for interviews.

### Microtasks
- Promise callbacks
- `queueMicrotask`

### Macrotasks
- `setTimeout`
- `setInterval`
- DOM events

---

## 7. Fetch API
Modern async HTTP requests.

Learn:
- `fetch`
- Request methods
- Headers
- JSON handling
- Error handling

Example:
```js
const res = await fetch("/api/users");
const users = await res.json();
```

---

# Advanced Promise Concepts

## 8. Promise Utility Methods
Very important in real projects.

Learn:
- `Promise.all()`
- `Promise.allSettled()`
- `Promise.race()`
- `Promise.any()`

Example:
```js
const results = await Promise.all([
  fetch("/a"),
  fetch("/b")
]);
```

---

## 9. Error Handling in Async Code
Must know:
- `try/catch`
- Promise rejection handling
- Unhandled promise rejection

---

## 10. Timers
Learn:
- `setTimeout`
- `setInterval`
- `clearTimeout`
- `clearInterval`

---

# Intermediate / Advanced Topics

## 11. Closures with Async
Very common interview area.

Example:
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Why output is:
```txt
3
3
3
```

And how `let` fixes it.

---

## 12. Debouncing & Throttling
Important for frontend optimization.

Use cases:
- Search inputs
- Scroll events
- Resize handlers

---

## 13. Async Iteration
Learn:
- `for await...of`
- Async generators

Example:
```js
for await (const item of items) {
  console.log(item);
}
```

---

## 14. AbortController
Cancel async requests.

Example:
```js
const controller = new AbortController();

fetch(url, {
  signal: controller.signal
});

controller.abort();
```

---

## 15. Parallel vs Sequential Execution
Very important optimization concept.

Sequential:
```js
await a();
await b();
```

Parallel:
```js
await Promise.all([a(), b()]);
```

---

# Browser + Node.js Async APIs

## Browser APIs
- Fetch
- WebSockets
- IndexedDB
- Geolocation
- Web Workers

## Node.js APIs
- File system (`fs`)
- Streams
- Timers
- Process events

---

# Advanced Concepts (Optional but Valuable)

## 16. Web Workers
Background threading in browser.

---

## 17. Streams
Useful for:
- Large file processing
- Real-time data

---

## 18. Observables (RxJS)
Common in Angular and reactive systems.

---

# Best Learning Order

1. Sync vs Async
2. Callbacks
3. Promises
4. async/await
5. Event loop
6. Fetch API
7. Promise methods
8. Error handling
9. Debounce/throttle
10. Advanced async patterns

---

# Most Important Topics for Interviews

Focus heavily on:
- Event loop
- Promises
- async/await
- Promise.all
- Microtask vs macrotask
- Closure + async
- Error handling
- Debouncing/throttling

---

# If You Want Job-Ready Async JS

You should be comfortable building:
- API calls
- Parallel requests
- Retry mechanisms
- Loading states
- Polling
- Request cancellation
- Infinite scroll
- Real-time updates

---

# Recommended Practice

Build mini projects:
- Weather app
- GitHub user search
- Infinite scrolling feed
- Chat app
- Live search with debounce
- File upload progress
# 1. First: JavaScript is single-threaded

JavaScript can do only **one thing at a time**.

That means:

```js id="a1"
console.log("A");
console.log("B");
console.log("C");
```

Runs in order:

```
A → B → C
```

No problem.

But what about this?

```js id="a2"
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```
A
C
B
```

Why? That’s the event loop.

---

# 2. The 4 main parts of JS runtime

To understand event loop, you need 4 components:

### 1. Call Stack

* Where functions run
* Last In, First Out (LIFO)

### 2. Web APIs (Browser / Node APIs)

* setTimeout
* fetch
* DOM events

### 3. Callback Queue (Task Queue)

* Holds ready-to-run callbacks

### 4. Event Loop

* Moves tasks from queue → call stack

---

# 3. Call Stack (execution place)

Example:

```js id="b1"
function a() {
  console.log("A");
}

function b() {
  a();
}

b();
```

Stack looks like:

```
b()
a()
console.log
```

Then it unwinds.

---

# 4. What happens with setTimeout

```js id="b2"
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Step-by-step:

### Step 1:

```
Call stack: console.log("A") → A printed
```

### Step 2:

```
setTimeout goes to Web API
(not executed immediately)
```

### Step 3:

```
console.log("C") runs → C printed
```

### Step 4:

After timer finishes:

```
Callback goes to queue: [console.log("B")]
```

### Step 5:

Event loop moves it to stack:

```
B printed
```

Final output:

```
A
C
B
```

---

# 5. Event Loop (core idea)

The event loop does this:

> “If call stack is empty, take next task from queue and push it to stack.”

Simple rule:

```
while (true) {
  if (callStack is empty) {
    move task from queue → call stack
  }
}
```

---

# 6. Microtasks vs Macrotasks (VERY important)

JavaScript has TWO queues:

---

## 1. Macrotask queue (Task queue)

Includes:

* setTimeout
* setInterval
* DOM events

---

## 2. Microtask queue (higher priority)

Includes:

* Promises (.then, .catch)
* queueMicrotask
* MutationObserver

---

# 7. Priority rule

> Microtasks ALWAYS run before macrotasks

---

# 8. Example with Promise

```js id="c1"
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Step-by-step:

### Synchronous:

```
A
D
```

### Microtask queue:

```
C
```

### Macrotask queue:

```
B
```

Final output:

```
A
D
C
B
```

---

# 9. Full event loop cycle

After every execution of a function:

1. Run all synchronous code (call stack)
2. Run ALL microtasks
3. Run ONE macrotask
4. Repeat

---

# 10. Visual model

```
CALL STACK
   ↑
EVENT LOOP
   ↓
MICROTASK QUEUE (Promises)
   ↓
MACROTASK QUEUE (setTimeout)
   ↓
WEB APIs (timers, fetch, events)
```

---

# 11. fetch example (real-world async)

```js id="d1"
console.log("Start");

fetch("https://api.example.com")
  .then(() => console.log("Response"));

console.log("End");
```

Output:

```
Start
End
Response
```

Why?

* fetch runs in Web API
* Promise callback goes to microtask queue

---

# 12. Common interview trap

```js id="e1"
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

Answer:

```
1
4
3
2
```

---

# 13. Why event loop exists

Without event loop:

* JS would freeze during async tasks
* UI would stop responding

With event loop:

* JS stays non-blocking
* Handles many tasks efficiently

---

# 14. Key mental model

Think:

> JavaScript runs one line at a time
> Async tasks are delegated
> Event loop brings results back when ready

---

# 15. Summary

* JS is single-threaded
* Call stack runs synchronous code
* Web APIs handle async tasks
* Callback queue holds macrotasks
* Microtask queue (Promises) has higher priority
* Event loop moves tasks to call stack when free

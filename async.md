# ✅ Must Know Concepts (Core)

## 1. Synchronous vs Asynchronous

### Synchronous (blocking)

```javascript id="as1"
console.log("A");
console.log("B");
console.log("C");
```

Output:

```
A
B
C
```

---

### Asynchronous (non-blocking)

```javascript id="as2"
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
```

Output:

```
A
C
B
```

---

# 2. setTimeout / setInterval

## setTimeout

Runs once after delay

```javascript id="as3"
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

---

## setInterval

Runs repeatedly

```javascript id="as4"
setInterval(() => {
    console.log("Hi");
}, 1000);
```

---

# 3. Callbacks

Function passed into another function

```javascript id="as5"
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("John", function () {
    console.log("Callback executed");
});
```

---

# ⚠️ Problem: Callback Hell

```javascript id="as6"
setTimeout(() => {
    console.log("1");

    setTimeout(() => {
        console.log("2");

        setTimeout(() => {
            console.log("3");
        }, 1000);

    }, 1000);

}, 1000);
```

👉 Hard to read → messy → leads to Promises

---

# 4. Promises (VERY IMPORTANT)

A Promise has 3 states:

* pending
* resolved
* rejected

---

## Example

```javascript id="as7"
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Done");
    } else {
        reject("Error");
    }
});

promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
```

---

# 5. Promise Example with Delay

```javascript id="as8"
function task() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 2000);
    });
}

task().then((res) => {
    console.log(res);
});
```

---

# 6. async / await (MODERN WAY)

Makes async code look synchronous

---

## Example

```javascript id="as9"
function task() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done");
        }, 2000);
    });
}

async function run() {
    let result = await task();
    console.log(result);
}

run();
```

---

# 7. Fetch API (VERY IMPORTANT)

Used for API calls

```javascript id="as10"
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
```

---

## async/await version

```javascript id="as11"
async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data);
}

getData();
```

---

# 8. Important Interview Questions

You MUST be able to explain:

## Core

* What is async JS?
* Difference between sync & async
* What is callback?
* What is callback hell?
* What is Promise?
* Promise states
* What is async/await?
* Difference between Promise vs async/await

---

# 🎯 What companies actually check

They don’t ask theory heavily.

They check:

* Can you use promises?
* Can you use async/await?
* Can you handle API calls?
* Can you avoid callback hell?

---

# ❌ Skip for now

* Event loop deep theory
* Microtask vs macrotask queue
* Memory model
* Internal engine working
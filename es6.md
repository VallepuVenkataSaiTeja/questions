# ✅ Must Know ES6 Features

## 1. let and const (block scope)

```javascript id="es1"
let a = 10;
const b = 20;
```

### Key idea:

* `let` → can be changed
* `const` → cannot be reassigned
* both are block scoped

---

## 2. Arrow Functions

```javascript id="es2"
function add(a, b) {
    return a + b;
}
```

### ES6 version:

```javascript id="es3"
const add = (a, b) => a + b;
```

---

## 3. Template Literals

```javascript id="es4"
let name = "John";

console.log(`Hello ${name}`);
```

---

## 4. Destructuring

### Array

```javascript id="es5"
let arr = [1, 2, 3];

let [a, b] = arr;

console.log(a, b); // 1 2
```

### Object

```javascript id="es6"
let obj = { name: "John", age: 25 };

let { name, age } = obj;

console.log(name, age);
```

---

## 5. Spread Operator (...)

### Arrays

```javascript id="es7"
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
```

### Objects

```javascript id="es8"
let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 };
```

---

## 6. Rest Operator (...)

```javascript id="es9"
function sum(...nums) {
    return nums;
}

console.log(sum(1, 2, 3));
```

---

## 7. Default Parameters

```javascript id="es10"
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
```

---

## 8. for...of loop

```javascript id="es11"
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
```

---

## 9. for...in loop (objects)

```javascript id="es12"
let obj = { a: 1, b: 2 };

for (let key in obj) {
    console.log(key, obj[key]);
}
```

---

## 10. Optional Chaining (?.)

```javascript id="es13"
let user = {};

console.log(user?.address?.city);
```

Prevents errors if value is undefined.

---

## 11. Nullish Coalescing (??)

```javascript id="es14"
let value = null;

console.log(value ?? "default");
```

Only checks null or undefined.

---

# 🔥 Must Practice ES6 Interview Questions

1. Difference between let, const, var
2. Arrow function vs normal function
3. Spread vs Rest operator
4. Destructuring objects and arrays
5. Template literals usage
6. Optional chaining use case
7. Default parameters
8. for...of vs for...in

---

# ❌ Skip for now

* Generators
* Symbols
* Proxy
* Reflect API
* Advanced module system deep internals
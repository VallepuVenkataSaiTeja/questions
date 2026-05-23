In JavaScript, **modules** are a way to split code into separate files and reuse functionality cleanly.

> A module is just a file that contains JavaScript code with its own scope and exports/imports.

They help you avoid “one giant file” and make code **organized, reusable, and maintainable**.

---

# 1. Why modules exist

Before modules:

```js id="m1"
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
```

All code is global → problems:

* naming conflicts
* hard to maintain
* no reuse structure

Modules solve this by isolating code.

---

# 2. Module basics (ES6 modules)

JavaScript introduced **ES Modules (ESM)**.

### Export (make code available)

```js id="m2"
// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14;
```

---

### Import (use code elsewhere)

```js id="m3"
// app.js
import { add, PI } from "./math.js";

console.log(add(2, 3)); // 5
console.log(PI);        // 3.14
```

---

# 3. Types of exports

## 1. Named exports

You export multiple things:

```js id="m4"
export const a = 10;
export const b = 20;
```

Import:

```js id="m5"
import { a, b } from "./file.js";
```

---

## 2. Default export (one per file)

```js id="m6"
export default function greet() {
  console.log("Hello");
}
```

Import:

```js id="m7"
import greet from "./greet.js";
```

No `{}` needed.

---

## 3. Mixed export

```js id="m8"
export const name = "JS";

export default function run() {
  console.log("running");
}
```

Import:

```js id="m9"
import run, { name } from "./file.js";
```

---

# 4. Module scope (VERY important)

Each module has its own scope.

```js id="m10"
// a.js
let x = 10;
```

```js id="m11"
// b.js
console.log(x); // ERROR (not global)
```

✔ Variables are NOT global anymore

---

# 5. How modules run (important concept)

Modules are:

* **strict mode by default**
* executed only once
* cached after first load

Example:

```js id="m12"
// counter.js
console.log("module loaded");

export const value = 1;
```

If imported multiple times:

* it still runs only ONCE

---

# 6. Module caching

```js id="m13"
import "./counter.js";
import "./counter.js";
```

Output:

```
module loaded   (only once)
```

Because JS caches modules.

---

# 7. Live bindings (unique feature)

Exports are NOT copies — they are **live references**.

```js id="m14"
// counter.js
export let count = 0;

export function inc() {
  count++;
}
```

```js id="m15"
// app.js
import { count, inc } from "./counter.js";

inc();
inc();

console.log(count); // 2
```

✔ `count` updates automatically

---

# 8. Renaming imports/exports

### Rename export:

```js id="m16"
export { add as sum };
```

### Rename import:

```js id="m17"
import { sum as addNumbers } from "./math.js";
```

---

# 9. Import everything

```js id="m18"
import * as math from "./math.js";

console.log(math.add(2, 3));
```

---

# 10. Dynamic imports

Modules can be loaded at runtime:

```js id="m19"
import("./math.js").then((math) => {
  console.log(math.add(2, 3));
});
```

Used for:

* code splitting
* lazy loading

---

# 11. CommonJS (older system)

Before ES Modules (Node.js originally used this):

```js id="m20"
// math.js
module.exports = {
  add: (a, b) => a + b
};
```

```js id="m21"
// app.js
const math = require("./math");
```

---

# 12. ES Modules vs CommonJS

| Feature         | ES Modules      | CommonJS                 |
| --------------- | --------------- | ------------------------ |
| Syntax          | `import/export` | `require/module.exports` |
| Loading         | static          | dynamic                  |
| Browser support | yes             | no                       |
| Tree-shaking    | yes             | no                       |

---

# 13. Module loading behavior

ES Modules:

* parsed before execution
* imports resolved first
* execution is top-down after linking

This enables:
✔ better optimization
✔ tree-shaking

---

# 14. Tree shaking (important in frontend)

Unused code can be removed:

```js id="m22"
import { add } from "./math.js";
```

If `multiply` is not used → bundlers remove it.

Used in:

* React
* Vite
* Webpack

---

# 15. Script vs Module in HTML

```html id="m23"
<script type="module" src="app.js"></script>
```

Modules automatically:

* run in strict mode
* have scoped variables
* support import/export

---

# 16. Mental model

Think:

> A module is a sealed box of code
> You choose what goes out (export)
> You choose what comes in (import)

---

# 17. Summary

* Modules split JS into files
* Use `export` and `import`
* Each module has its own scope
* Modules run once and are cached
* Exports are live bindings
* Support static structure + optimization
* Enable modern scalable applications

## ✅ Must Practice

These are the important array problems.

1. Find Largest Element in Array
2. Find Smallest Element in Array
3. Find Second Largest Element
4. Reverse an Array
5. Check if Array is Sorted
6. Find Sum of All Elements
7. Find Average of Array Elements
8. Find Duplicate Elements
9. Remove Duplicate Elements
10. Find Frequency of Elements
11. Find Maximum and Minimum Element
12. Sort an Array (Ascending / Descending)
13. Merge Two Arrays
14. Find Missing Number in Array
15. Find Even and Odd Numbers
16. Count Even and Odd Numbers
17. Find Common Elements Between Two Arrays
18. Rotate Array Left / Right
19. Find Intersection of Arrays
20. Find Union of Arrays
21. Find Pair With Given Sum
22. Find Largest Difference
23. Move All Zeros to End
24. Remove Falsy Values
25. Find Second Smallest Element

---

# ✅ After Completing Above

Then practice these:

26. Find Unique Elements
27. Find Consecutive Numbers
28. Find Longest Increasing Subarray
29. Find Maximum Subarray Sum (Kadane’s Algorithm)
30. Chunk Array into Smaller Arrays
31. Flatten Nested Array
32. Find Index of Element Manually
33. Insert Element at Specific Position
34. Delete Element from Specific Position
35. Copy Array Without Built-ins
36. Compare Two Arrays
37. Find Majority Element
38. Find Leaders in Array
39. Find Product of Array Except Self
40. Shift Negative Numbers to Left

---

# ❌ Skip for Now

* Dutch National Flag Algorithm
* Quick Sort / Merge Sort Implementation
* Heap Problems
* Advanced Sliding Window
* Monotonic Stack Problems
* Dynamic Programming Array Problems
* Advanced Prefix Sum Problems
* Matrix Spiral Traversal
* Trapping Rain Water
* Median of Two Sorted Arrays

----------------------------------------------------------------------------------------

# JavaScript Arrays Roadmap

## 1. Array Basics

Start with understanding what arrays are.

Topics:

* Creating arrays
* Accessing elements
* Updating elements
* Array length
* Indexing
* Nested arrays

Example:

```js
const arr = [10, 20, 30];

console.log(arr[0]); // 10
arr[1] = 50;
console.log(arr.length); // 3
```

---

## 2. Adding & Removing Elements

Learn how arrays change dynamically.

Methods:

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`

Example:

```js
const nums = [1, 2, 3];

nums.push(4);
nums.pop();
nums.unshift(0);
nums.shift();
```

---

## 3. Traversing Arrays

Essential for almost everything.

Topics:

* `for`
* `while`
* `for...of`
* `forEach()`

Example:

```js
const arr = [1, 2, 3];

for (const num of arr) {
  console.log(num);
}
```

---

## 4. Important Array Methods

Core methods every JS developer uses.

### Must Know:

* `map()`
* `filter()`
* `reduce()`
* `find()`
* `findIndex()`
* `some()`
* `every()`
* `includes()`

Example:

```js
const nums = [1, 2, 3, 4];

const doubled = nums.map(n => n * 2);
const even = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
```

---

## 5. Searching & Sorting

Very important for interviews.

Topics:

* `indexOf()`
* `lastIndexOf()`
* `find()`
* `sort()`
* Custom sorting
* `reverse()`

Example:

```js
const nums = [5, 2, 9];

nums.sort((a, b) => a - b);
```

---

## 6. Array Transformation

Learn how arrays can be reshaped.

Topics:

* `slice()`
* `splice()`
* `concat()`
* `flat()`
* `flatMap()`
* Spread operator (`...`)

Example:

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];
```

---

## 7. Destructuring & Spread

Modern JavaScript essentials.

Topics:

* Array destructuring
* Rest operator
* Swapping values

Example:

```js
const [a, b] = [10, 20];

let x = 1, y = 2;
[x, y] = [y, x];
```

---

## 8. Multi-Dimensional Arrays

Needed for matrix/grid problems.

Topics:

* 2D arrays
* Nested loops
* Matrix traversal

Example:

```js
const matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][0]); // 3
```

---

## 9. Time Complexity of Array Operations

Very important for interviews.

Know:

* Access → O(1)
* Search → O(n)
* Push/pop → O(1)
* Shift/unshift → O(n)
* Sort → O(n log n)

---

# 10. Advanced Array Concepts

Topics:

* Shallow vs deep copy
* Sparse arrays
* Array-like objects
* `Array.from()`
* `Array.isArray()`
* Optional chaining with arrays
* Chaining methods

Example:

```js
Array.from("hello");
```

---

# 11. Problem Solving Patterns

This is where real mastery happens.

Learn:

* Two pointers
* Sliding window
* Prefix sum
* Frequency counter
* Kadane’s algorithm
* Binary search on arrays

Practice problems:

* Remove duplicates
* Move zeroes
* Max subarray sum
* Rotate array
* Merge intervals

---

# 12. Advanced Interview-Level Topics

Topics:

* Immutable array updates
* Functional programming with arrays
* Memoization patterns
* Array buffering
* Typed arrays

---

# Recommended Learning Order (Simple Version)

```text
Basics
→ Add/Remove
→ Traversal
→ map/filter/reduce
→ Searching/Sorting
→ slice/splice
→ Destructuring
→ 2D arrays
→ Complexity
→ Problem solving
→ Advanced concepts
```

---

# Most Important Methods to Master First

Focus heavily on these:

```js
push
pop
map
filter
reduce
find
sort
slice
splice
forEach
```

---

# Best Practice Strategy

For each method:

1. Learn syntax
2. Understand return value
3. Modify vs non-modify behavior
4. Solve 3–5 problems using it

---

# Mini Project Ideas

To solidify arrays:

* Todo app
* Expense tracker
* Shopping cart
* Student marks analyzer
* Movie filtering app


---

## 1. Find Largest Element in Array
## 2. Find Smallest Element in Array

# 1. Find Largest Element in Array

### Using Built-in Method

```javascript
const arr = [10, 25, 5, 40, 15];

const largest = Math.max(...arr);

console.log(largest); // 40
```

### Without Built-in Method

```javascript
const arr = [10, 25, 5, 40, 15];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest); // 40
```

### Using `reduce()`

```javascript
const arr = [10, 25, 5, 40, 15];

const largest = arr.reduce((max, current) =>
    current > max ? current : max
);

console.log(largest); // 40
```

---

# 2. Find Smallest Element in Array

### Using Built-in Method

```javascript
const arr = [10, 25, 5, 40, 15];

const smallest = Math.min(...arr);

console.log(smallest); // 5
```

### Without Built-in Method

```javascript
const arr = [10, 25, 5, 40, 15];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest); // 5
```

### Using `reduce()`

```javascript
const arr = [10, 25, 5, 40, 15];

const smallest = arr.reduce((min, current) =>
    current < min ? current : min
);

console.log(smallest); // 5
```

---

# Find Both Largest and Smallest in One Loop

```javascript
const arr = [10, 25, 5, 40, 15];

let largest = arr[0];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }

    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log("Largest:", largest);   // 40
console.log("Smallest:", smallest); // 5
```

---

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

# 3. Find Second Largest Element

### Without Inbuilt `sort()`

```javascript
const arr = [10, 5, 20, 8, 15];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest); // 15
```

---

### With Inbuilt `sort()`

```javascript
const arr = [10, 5, 20, 8, 15];

arr.sort((a, b) => b - a);

console.log(arr[1]); // 15
```

**How it works:**

* `sort((a, b) => b - a)` sorts numbers in descending order.
* The largest number becomes `arr[0]`.
* The second largest becomes `arr[1]`.

---

### Simplest Interview Answer

```javascript
const arr = [10, 5, 20, 8, 15];

let max = Math.max(...arr);
let secondMax = Math.max(...arr.filter(num => num !== max));

console.log(secondMax); // 15
```

This is very easy to explain:

1. Find the largest number.
2. Remove it.
3. Find the largest among the remaining numbers.

---

# 4. Reverse an Array

#### 1. Using Inbuilt Method

```javascript
const arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr); // [5, 4, 3, 2, 1]
```

---

#### 2. Without Using Inbuilt Method

```javascript
const arr = [1, 2, 3, 4, 5];

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed); // [5, 4, 3, 2, 1]
```

---

#### 3. Reverse in Place (Interview Favorite)

```javascript
const arr = [1, 2, 3, 4, 5];

let start = 0;
let end = arr.length - 1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
}

console.log(arr); // [5, 4, 3, 2, 1]
```

---

# 5. Check if Array is Sorted

#### Simple Approach

```javascript id="5b0n8p"
const arr = [1, 2, 3, 4, 5];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}

console.log(isSorted); // true
```

**Output:**

* `[1, 2, 3, 4, 5]` → `true`
* `[1, 3, 2, 4, 5]` → `false`

---

### Using Inbuilt `every()`

```javascript id="lv0ew5"
const arr = [1, 2, 3, 4, 5];

const isSorted = arr.every((num, i) =>
    i === arr.length - 1 || num <= arr[i + 1]
);

console.log(isSorted); // true
```

---

### Interview-Friendly Version

```javascript id="t8cfwi"
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false
```

---

# 6. Find Sum of All Elements

#### Without Inbuilt Method

```javascript
const arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum); // 15
```

---

#### Using Inbuilt `reduce()`

```javascript
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((total, num) => total + num, 0);

console.log(sum); // 15
```

---

### Interview-Friendly Function

```javascript
function findSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(findSum([1, 2, 3, 4, 5])); // 15
```

---

## 7. Find Average of Array Elements

#### Without Inbuilt Method

```javascript
const arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum / arr.length;

console.log(average); // 30
```

---

#### Using `reduce()`

```javascript
const arr = [10, 20, 30, 40, 50];

const average =
    arr.reduce((sum, num) => sum + num, 0) / arr.length;

console.log(average); // 30
```

---

### Interview-Friendly Function

```javascript
function findAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(findAverage([10, 20, 30, 40, 50])); // 30
```

---

# 8. Find Duplicate Elements

#### Without Inbuilt Methods (Simple)

```javascript
const arr = [1, 2, 3, 2, 4, 5, 3];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}

console.log(duplicates); // [2, 3]
```

---

#### Using `Set`

```javascript
const arr = [1, 2, 3, 2, 4, 5, 3];

let seen = new Set();
let duplicates = new Set();

for (let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    } else {
        seen.add(num);
    }
}

console.log([...duplicates]); // [2, 3]
```

---

### Interview-Friendly Function

```javascript
function findDuplicates(arr) {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3])); // [2, 3]
```
---

# 9. Remove Duplicate Elements

#### Without Inbuilt Methods

```javascript
const arr = [1, 2, 3, 2, 4, 5, 3];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}

console.log(unique); // [1, 2, 3, 4, 5]
```

---

#### Using `Set`

```javascript
const arr = [1, 2, 3, 2, 4, 5, 3];

const unique = [...new Set(arr)];

console.log(unique); // [1, 2, 3, 4, 5]
```

---

### Interview-Friendly Function

```javascript
function removeDuplicates(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3]));
// [1, 2, 3, 4, 5]
```
---

# 10. Find Frequency of Elements

#### Simple Approach (Without fancy methods)

```javascript id="freq1"
const arr = [1, 2, 2, 3, 3, 3, 4];

let freq = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (!freq.includes(`${arr[i]}:${count}`)) {
        freq.push(`${arr[i]}:${count}`);
    }
}

console.log(freq);
// ["1:1", "2:2", "3:3", "4:1"]
```

---

### Better & Easy (Recommended)

```javascript id="freq2"
const arr = [1, 2, 2, 3, 3, 3, 4];

let freq = {};

for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
        freq[arr[i]]++;
    } else {
        freq[arr[i]] = 1;
    }
}

console.log(freq);
// { '1': 1, '2': 2, '3': 3, '4': 1 }
```

---

### Interview-Friendly Function

```javascript id="freq3"
function findFrequency(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    return freq;
}

console.log(findFrequency([1, 2, 2, 3, 3, 3, 4]));
```

---

# 11. Find Maximum and Minimum Element

## 1. Simple Approach (Without Inbuilt Methods)

```javascript id="minmax1"
const arr = [10, 5, 20, 8, 15];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Max:", max); // 20
console.log("Min:", min); // 5
```

---

## 2. Using Inbuilt Methods

```javascript id="minmax2"
const arr = [10, 5, 20, 8, 15];

console.log("Max:", Math.max(...arr)); // 20
console.log("Min:", Math.min(...arr)); // 5
```

---

## 3. Interview-Friendly Function

```javascript id="minmax3"
function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return { max, min };
}

console.log(findMinMax([10, 5, 20, 8, 15]));
// { max: 20, min: 5 }
```

---

# 12. Sort an Array (Ascending / Descending)

## 1. Using Inbuilt `sort()` (Important)

### Ascending Order

```javascript id="sort1"
const arr = [10, 5, 20, 8, 15];

arr.sort((a, b) => a - b);

console.log(arr); // [5, 8, 10, 15, 20]
```

---

### Descending Order

```javascript id="sort2"
const arr = [10, 5, 20, 8, 15];

arr.sort((a, b) => b - a);

console.log(arr); // [20, 15, 10, 8, 5]
```

---

## 2. Without Inbuilt `sort()` (Simple Bubble Sort)

### Ascending Order

```javascript id="sort3"
const arr = [10, 5, 20, 8, 15];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr); // [5, 8, 10, 15, 20]
```

---

## 3. Interview-Friendly Function

```javascript id="sort4"
function sortArray(arr, order = "asc") {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (order === "asc") {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }
    return arr;
}

console.log(sortArray([10, 5, 20, 8, 15], "asc"));
console.log(sortArray([10, 5, 20, 8, 15], "desc"));
```

---

# 13. Merge Two Arrays

## 1. Using Inbuilt Method (`concat`) — Easiest

```javascript id="merge1"
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = arr1.concat(arr2);

console.log(merged); // [1, 2, 3, 4, 5, 6]
```

---

## 2. Using Spread Operator (Very Common)

```javascript id="merge2"
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4, 5, 6]
```

---

## 3. Without Inbuilt Methods (Simple Loop)

```javascript id="merge3"
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let merged = [];

for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
}

console.log(merged); // [1, 2, 3, 4, 5, 6]
```

---

## Interview-Friendly Function

```javascript id="merge4"
function mergeArrays(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        result.push(a[i]);
    }

    for (let i = 0; i < b.length; i++) {
        result.push(b[i]);
    }

    return result;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
```
---



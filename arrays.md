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

# 14. Find Missing Number in Array

### Problem

Given an array containing numbers from `1` to `n`, with **one number missing**, find the missing number.

**Example:**

```javascript
const arr = [1, 2, 3, 5];
```

Output:

```javascript
4
```

---

## 1. Using Sum Formula (Most Common Interview Approach)

```javascript
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // 4
```

### Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 2. Using XOR (Interview Favorite)

```javascript
function findMissingNumber(arr, n) {
    let xor1 = 0;
    let xor2 = 0;

    for (let i = 1; i <= n; i++) {
        xor1 ^= i;
    }

    for (let i = 0; i < arr.length; i++) {
        xor2 ^= arr[i];
    }

    return xor1 ^ xor2;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // 4
```

### Complexity

* Time: **O(n)**
* Space: **O(1)**

---

## 3. Using Sorting

```javascript
function findMissingNumber(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }

    return arr.length + 1;
}

console.log(findMissingNumber([3, 1, 5, 2])); // 4
```

### Complexity

* Time: **O(n log n)**
* Space: **O(1)** (ignoring sort internals)

---

## 4. Using Set

```javascript
function findMissingNumber(arr, n) {
    const set = new Set(arr);

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // 4
```

### Complexity

* Time: **O(n)**
* Space: **O(n)**

---

## Interview-Friendly Answer

```javascript
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // 4
```

**Why this is preferred:**

* Simple to explain
* Optimal Time Complexity: **O(n)**
* Constant Space Complexity: **O(1)**
* Frequently asked in JavaScript interviews and coding rounds.

---

# 15. Find Even and Odd Numbers

## 1. Using `if` Condition (Simple Approach)

```javascript
const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] + " is Even");
    } else {
        console.log(arr[i] + " is Odd");
    }
}
```

### Output

```javascript
1 is Odd
2 is Even
3 is Odd
4 is Even
5 is Odd
6 is Even
```

---

## 2. Separate Even and Odd Numbers into Arrays

```javascript
const arr = [1, 2, 3, 4, 5, 6];

let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}

console.log("Even Numbers:", even);
console.log("Odd Numbers:", odd);
```

### Output

```javascript
Even Numbers: [2, 4, 6]
Odd Numbers: [1, 3, 5]
```

---

## 3. Using `filter()` Method

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const even = arr.filter(num => num % 2 === 0);
const odd = arr.filter(num => num % 2 !== 0);

console.log("Even Numbers:", even);
console.log("Odd Numbers:", odd);
```

### Output

```javascript
Even Numbers: [2, 4, 6]
Odd Numbers: [1, 3, 5]
```

---

## Interview-Friendly Function

```javascript
function findEvenOdd(arr) {
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return { even, odd };
}

console.log(findEvenOdd([1, 2, 3, 4, 5, 6]));
```

### Output

```javascript
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}
```

### Complexity

* **Time Complexity:** O(n)
* **Space Complexity:** O(n)

### Key Logic

A number is:

* **Even** if `number % 2 === 0`
* **Odd** if `number % 2 !== 0`

This is one of the most common beginner and interview questions for practicing array traversal and conditional logic.

---

# 16. Count Even and Odd Numbers

## 1. Using Simple Loop (Most Common)

```javascript id="count1"
const arr = [1, 2, 3, 4, 5, 6];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);
```

### Output

```javascript id="out1"
Even Count: 3
Odd Count: 3
```

---

## 2. Using `for...of` Loop

```javascript id="count2"
const arr = [1, 2, 3, 4, 5, 6];

let evenCount = 0;
let oddCount = 0;

for (const num of arr) {
    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);
```

---

## 3. Using `filter()` Method

```javascript id="count3"
const arr = [1, 2, 3, 4, 5, 6];

const evenCount = arr.filter(num => num % 2 === 0).length;
const oddCount = arr.filter(num => num % 2 !== 0).length;

console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);
```

---

## Interview-Friendly Function

```javascript id="count4"
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return {
        evenCount,
        oddCount
    };
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));
```

### Output

```javascript id="out2"
{
  evenCount: 3,
  oddCount: 3
}
```

---

## Complexity

* **Time Complexity:** O(n)
* **Space Complexity:** O(1)

---

## Key Logic

```javascript id="logic1"
if (num % 2 === 0) {
    evenCount++;
} else {
    oddCount++;
}
```

* Numbers divisible by `2` are **even**.
* Numbers not divisible by `2` are **odd**.

This is a very common interview question used to test array traversal, conditional statements, and counting logic.

---

# 17. Find Common Elements Between Two Arrays

## Problem

Given two arrays, find the elements that are present in **both arrays**.

### Example

```javascript id="example1"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
```

### Output

```javascript id="output1"
[3, 4, 5]
```

---

## 1. Using Nested Loops (Without Inbuilt Methods)

```javascript id="common1"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

let common = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            common.push(arr1[i]);
        }
    }
}

console.log(common);
```

### Output

```javascript id="output2"
[3, 4, 5]
```

### Complexity

* **Time Complexity:** O(n × m)
* **Space Complexity:** O(k)

---

## 2. Using `filter()` and `includes()`

```javascript id="common2"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const common = arr1.filter(num => arr2.includes(num));

console.log(common);
```

### Output

```javascript id="output3"
[3, 4, 5]
```

### Complexity

* **Time Complexity:** O(n × m)
* **Space Complexity:** O(k)

---

## 3. Using Set (Optimal Approach)

```javascript id="common3"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const set = new Set(arr2);
let common = [];

for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) {
        common.push(arr1[i]);
    }
}

console.log(common);
```

### Output

```javascript id="output4"
[3, 4, 5]
```

### Complexity

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(m)

---

## Interview-Friendly Function

```javascript id="common4"
function findCommonElements(arr1, arr2) {
    const set = new Set(arr2);
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

console.log(findCommonElements(
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7]
));
```

### Output

```javascript id="output5"
[3, 4, 5]
```

---

## Handling Duplicates (Unique Common Elements)

If the arrays can contain duplicates and you want only unique common values:

```javascript id="common5"
function findUniqueCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    let result = [];

    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(
    findUniqueCommonElements(
        [1, 2, 2, 3, 4],
        [2, 2, 4, 5]
    )
);
```

### Output

```javascript id="output6"
[2, 4]
```

### Best Interview Answer

```javascript id="best1"
function findCommonElements(arr1, arr2) {
    const set = new Set(arr2);

    return arr1.filter(num => set.has(num));
}
```

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(m)
* Efficient and easy to explain in interviews.

---

# 18. Rotate Array Left / Right

Array rotation means shifting elements either to the **left** or **right** by a given number of positions.

---

## Example

```javascript id="example1"
const arr = [1, 2, 3, 4, 5];
```

### Left Rotate by 1

```javascript id="out1"
[2, 3, 4, 5, 1]
```

### Right Rotate by 1

```javascript id="out2"
[5, 1, 2, 3, 4]
```

---

# 1. Left Rotate by One Position

```javascript id="left1"
const arr = [1, 2, 3, 4, 5];

const first = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}

arr[arr.length - 1] = first;

console.log(arr);
```

### Output

```javascript id="leftOut1"
[2, 3, 4, 5, 1]
```

### Complexity

* Time: **O(n)**
* Space: **O(1)**

---

# 2. Right Rotate by One Position

```javascript id="right1"
const arr = [1, 2, 3, 4, 5];

const last = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = last;

console.log(arr);
```

### Output

```javascript id="rightOut1"
[5, 1, 2, 3, 4]
```

---

# 3. Using Inbuilt Methods

## Left Rotate

```javascript id="left2"
const arr = [1, 2, 3, 4, 5];

arr.push(arr.shift());

console.log(arr);
```

### Output

```javascript id="leftOut2"
[2, 3, 4, 5, 1]
```

---

## Right Rotate

```javascript id="right2"
const arr = [1, 2, 3, 4, 5];

arr.unshift(arr.pop());

console.log(arr);
```

### Output

```javascript id="rightOut2"
[5, 1, 2, 3, 4]
```

---

# 4. Rotate by K Positions (Interview Favorite)

## Left Rotate by K

```javascript id="leftK"
function rotateLeft(arr, k) {
    k = k % arr.length;

    return [...arr.slice(k), ...arr.slice(0, k)];
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
```

### Output

```javascript id="leftKOut"
[3, 4, 5, 1, 2]
```

---

## Right Rotate by K

```javascript id="rightK"
function rotateRight(arr, k) {
    k = k % arr.length;

    return [
        ...arr.slice(-k),
        ...arr.slice(0, arr.length - k)
    ];
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
```

### Output

```javascript id="rightKOut"
[4, 5, 1, 2, 3]
```

---

# Interview-Friendly Function

```javascript id="bestRotate"
function rotateLeft(arr, k) {
    k = k % arr.length;

    let result = [];

    for (let i = k; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < k; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
```

### Output

```javascript id="bestOut"
[3, 4, 5, 1, 2]
```

### Complexity

* **Time Complexity:** O(n)
* **Space Complexity:** O(n)

---

## Best Interview Answer (Modern JavaScript)

```javascript id="bestModern"
function rotateRight(arr, k) {
    k %= arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}
```

* **Time Complexity:** O(n)
* **Space Complexity:** O(n)
* Clean, concise, and commonly accepted in JavaScript interviews.

---

# 19. Find Intersection of Arrays

The **intersection** of two arrays contains the elements that are present in **both arrays**.

---

## Example

```javascript id="example1"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
```

### Output

```javascript id="output1"
[4, 5]
```

---

# 1. Using Nested Loops (Without Inbuilt Methods)

```javascript id="intersection1"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

let intersection = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
        }
    }
}

console.log(intersection);
```

### Output

```javascript id="output2"
[4, 5]
```

### Complexity

* **Time Complexity:** O(n × m)
* **Space Complexity:** O(k)

---

# 2. Using `filter()` and `includes()`

```javascript id="intersection2"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const intersection = arr1.filter(num => arr2.includes(num));

console.log(intersection);
```

### Output

```javascript id="output3"
[4, 5]
```

### Complexity

* **Time Complexity:** O(n × m)
* **Space Complexity:** O(k)

---

# 3. Using Set (Optimal Approach)

```javascript id="intersection3"
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const set = new Set(arr2);

let intersection = [];

for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) {
        intersection.push(arr1[i]);
    }
}

console.log(intersection);
```

### Output

```javascript id="output4"
[4, 5]
```

### Complexity

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(m)

---

# 4. Intersection with Unique Values Only

If arrays contain duplicates and you want only unique common elements:

```javascript id="intersection4"
function intersectionUnique(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    let result = [];

    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(
    intersectionUnique(
        [1, 2, 2, 3, 4],
        [2, 2, 4, 5]
    )
);
```

### Output

```javascript id="output5"
[2, 4]
```

---

# Interview-Friendly Function

```javascript id="intersection5"
function findIntersection(arr1, arr2) {
    const set = new Set(arr2);

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

console.log(
    findIntersection(
        [1, 2, 3, 4, 5],
        [4, 5, 6, 7, 8]
    )
);
```

### Output

```javascript id="output6"
[4, 5]
```

---

## Best Interview Answer

```javascript id="best1"
function findIntersection(arr1, arr2) {
    const set = new Set(arr2);
    return arr1.filter(num => set.has(num));
}
```

### Complexity

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(m)

This is the most efficient and commonly preferred solution in JavaScript interviews because it combines the fast lookup of a `Set` with concise code.

---

# 20. Find Union of Arrays

The **union** of two arrays contains **all unique elements** from both arrays.

---

## Example

```javascript id="example1"
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
```

### Output

```javascript id="output1"
[1, 2, 3, 4, 5, 6]
```

---

# 1. Using Set (Best & Most Common)

```javascript id="union1"
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const union = [...new Set([...arr1, ...arr2])];

console.log(union);
```

### Output

```javascript id="output2"
[1, 2, 3, 4, 5, 6]
```

### Complexity

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(n + m)

---

# 2. Using Loops (Without Set)

```javascript id="union2"
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

let union = [];

for (let i = 0; i < arr1.length; i++) {
    if (!union.includes(arr1[i])) {
        union.push(arr1[i]);
    }
}

for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) {
        union.push(arr2[i]);
    }
}

console.log(union);
```

### Output

```javascript id="output3"
[1, 2, 3, 4, 5, 6]
```

### Complexity

* **Time Complexity:** O((n + m)²)
* **Space Complexity:** O(n + m)

---

# 3. Using `concat()` and `Set`

```javascript id="union3"
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const union = [...new Set(arr1.concat(arr2))];

console.log(union);
```

### Output

```javascript id="output4"
[1, 2, 3, 4, 5, 6]
```

---

# 4. Union Keeping Duplicates

If you simply want to combine arrays without removing duplicates:

```javascript id="union4"
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const union = [...arr1, ...arr2];

console.log(union);
```

### Output

```javascript id="output5"
[1, 2, 3, 4, 3, 4, 5, 6]
```

---

# Interview-Friendly Function

```javascript id="union5"
function findUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(
    findUnion(
        [1, 2, 3, 4],
        [3, 4, 5, 6]
    )
);
```

### Output

```javascript id="output6"
[1, 2, 3, 4, 5, 6]
```

---

## Without Using Set (Interview Logic)

```javascript id="union6"
function findUnion(arr1, arr2) {
    let result = [];

    for (let num of arr1) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    for (let num of arr2) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(findUnion([1, 2, 3], [3, 4, 5]));
```

### Output

```javascript id="output7"
[1, 2, 3, 4, 5]
```

---

## Best Interview Answer

```javascript id="best1"
function findUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
```

### Complexity

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(n + m)

### Why Preferred?

* Simple and readable
* Removes duplicates automatically
* Uses JavaScript's `Set` for efficient unique-value handling
* Frequently accepted in JavaScript interviews and coding rounds.

---

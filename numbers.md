# JavaScript Math, Numbers & Date Roadmap

This is the same style as your arrays roadmap:

* ordered by difficulty
* practical
* interview-focused
* JS-specific

---

# 1. Numbers in JavaScript

Start with understanding how numbers work in JS.

Topics:

* Integer vs float
* `Number`
* Type conversion
* `NaN`
* `Infinity`
* Parsing numbers

Example:

```js id="9b0z9j"
const num = 10;
const float = 10.5;

Number("123");
parseInt("50px");
parseFloat("10.25");
```

---

# 2. Important Number Methods

Must know methods:

```js id="3w5a9o"
toFixed()
toPrecision()
toString()
Number.isInteger()
Number.isNaN()
Number()
parseInt()
parseFloat()
```

Example:

```js id="l6z0j4"
const n = 12.456;

console.log(n.toFixed(2)); // 12.46
```

---

# 3. Math Object Basics

Learn the built-in `Math` object.

Must know:

```js id="n0t8zk"
Math.round()
Math.floor()
Math.ceil()
Math.trunc()
Math.abs()
Math.max()
Math.min()
Math.pow()
Math.sqrt()
Math.random()
```

Example:

```js id="fq4h3m"
Math.floor(4.9); // 4
Math.random(); // 0 to 1
```

---

# 4. Advanced Math Methods

Topics:

```js id="t4z6w1"
Math.cbrt()
Math.sign()
Math.log()
Math.log10()
Math.sin()
Math.cos()
Math.tan()
Math.PI
```

Useful for:

* geometry
* physics formulas
* game development
* charts

---

# 5. Random Number Generation

Very important.

Learn:

* random integer generation
* random range generation

Example:

```js id="6s2b0a"
const random = Math.floor(Math.random() * 10);
```

Random between min/max:

```js id="uh5f0x"
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

---

# 6. BigInt

For very large numbers.

Example:

```js id="6b7y4k"
const big = 12345678901234567890n;
```

Know:

* why BigInt exists
* limitations with normal numbers

---

# 7. Number System Concepts

Topics:

* Binary
* Decimal
* Hexadecimal
* Base conversion

Example:

```js id="8q4l2r"
(10).toString(2); // binary
parseInt("1010", 2);
```

---

# 8. Floating Point Precision

Important JS interview topic.

Problem:

```js id="1f6w7x"
0.1 + 0.2 !== 0.3
```

Learn:

* precision issues
* safe comparison

Example:

```js id="k0u4vl"
Math.abs(a - b) < Number.EPSILON
```

---

# 9. Date Basics

Understand the `Date` object.

Topics:

* current date
* timestamps
* creating dates

Example:

```js id="q7o3vn"
const now = new Date();

const custom = new Date("2025-01-01");
```

---

# 10. Important Date Methods

Must know:

```js id="m5g0xq"
getDate()
getDay()
getMonth()
getFullYear()
getHours()
getMinutes()
getSeconds()
getTime()
```

Setting values:

```js id="7s0p4f"
setDate()
setMonth()
setFullYear()
```

---

# 11. Date Formatting

Topics:

* local date formatting
* ISO format
* custom formatting

Example:

```js id="q4v8ln"
date.toDateString()
date.toISOString()
date.toLocaleDateString()
```

---

# 12. Time Calculations

Very important practical skill.

Topics:

* difference between dates
* converting milliseconds
* countdown logic

Example:

```js id="r8w1zc"
const diff = endDate - startDate;
```

Convert:

```js id="u0n4sj"
const days = diff / (1000 * 60 * 60 * 24);
```

---

# 13. Useful Real-World Date Topics

Learn:

* age calculator
* days remaining
* add/subtract days
* checking weekends
* comparing dates

---

# ✅ Must Practice (Numbers + Math)

## Easy

1. Find Largest Number
2. Find Smallest Number
3. Swap Two Numbers
4. Check Even or Odd
5. Find Prime Number
6. Find Factorial
7. Reverse a Number
8. Count Digits
9. Find Sum of Digits
10. Check Palindrome Number
11. Find Fibonacci Series
12. Find Power of Number
13. Find Square Root
14. Generate Random Number
15. Convert Celsius to Fahrenheit

---

# ✅ Intermediate Problems

16. Find Armstrong Number
17. Find Perfect Number
18. Find GCD/HCF
19. Find LCM
20. Decimal to Binary
21. Binary to Decimal
22. Find Missing Number
23. Count Frequency of Digits
24. Check Leap Year
25. Find Trailing Zeros in Factorial

---

# ✅ Advanced Practice

26. Sieve of Eratosthenes
27. Kadane with Numeric Arrays
28. Fast Exponentiation
29. Modular Arithmetic Basics
30. Number Pattern Problems

---

# ✅ Must Practice (Date)

## Easy

1. Get Current Date
2. Get Current Time
3. Find Current Day
4. Extract Month and Year
5. Format Date
6. Compare Two Dates
7. Add Days to Date
8. Subtract Days from Date

---

# ✅ Intermediate

9. Calculate Age
10. Days Between Two Dates
11. Countdown Timer Logic
12. Check Weekend
13. Find Leap Year
14. Convert Timestamp to Date
15. Digital Clock Logic

---

# ✅ Advanced

16. Build Calendar Logic
17. Timezone Conversion
18. Relative Time (“2 days ago”)
19. Stopwatch Logic
20. Recurring Date Calculations

---

# ❌ Skip for Now

## Numbers / Math

* Cryptography math
* Competitive programming number theory
* Matrix exponentiation
* Bit manipulation tricks
* Advanced modular arithmetic

## Dates

* Complex timezone internals
* International calendars
* DST edge cases
* Temporal API internals

---

# Most Important Methods to Master

## Numbers

```js id="q3n5yf"
parseInt
parseFloat
toFixed
Number.isNaN
Number.isInteger
```

---

## Math

```js id="h5l7za"
Math.floor
Math.ceil
Math.round
Math.random
Math.max
Math.min
Math.abs
Math.pow
Math.sqrt
```

---

## Date

```js id="7d4x1r"
new Date()
getDate()
getMonth()
getFullYear()
getTime()
toISOString()
toLocaleDateString()
```

---

# Best Learning Order

```text id="9x8m3o"
Numbers basics
↓
Math methods
↓
Random numbers
↓
Number problems
↓
Date basics
↓
Date formatting
↓
Date calculations
↓
Real-world projects
```

---

# Mini Projects

## Numbers / Math

* Calculator
* BMI calculator
* Random password generator
* Number guessing game

## Date

* Countdown timer
* Age calculator
* Digital clock
* Calendar app
* Pomodoro timer

---

# Most Important Interview Topics

Focus heavily on:

* Prime numbers
* Fibonacci
* Palindrome numbers
* Factorial
* Random number generation
* Date difference calculation
* Leap year logic
* Formatting dates cleanly

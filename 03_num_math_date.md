* `Numbers` : Numbers are used to store numeric values like integers, decimals, negatives, etc.

* `Types of Numbers ` :

| Type            | Example    |
| --------------- | ---------- |
| Integer         | `10`       |
| Floating Point  | `3.14`     |
| Negative Number | `-20`      |
| Exponential     | `2e3`      |
| Infinity        | `Infinity` |
| Not a Number    | `NaN`      |

let x = 100;
let y = 99.99;
let z = 2e3;

console.log(z); // 2000

* `Special Number Values ` :

| Value       | Meaning                |
| ----------- | ---------------------- |
| `Infinity`  | Very large number      |
| `-Infinity` | Very small negative    |
| `NaN`       | Invalid numeric result |

console.log(10 / 0);     // Infinity
console.log("abc" / 2);  // NaN

* `Number Methods ` : 

1. `toString()` : Converts number to string.

let num = 100;
console.log(num.toString()); // "100"

2. `toFixed()` : Rounds number to fixed decimal places.

let num = 5.6789;
console.log(num.toFixed(2)); // 5.68

3. `toPrecision()` : Formats number with total digits.

let num = 5.6789;
console.log(num.toPrecision(3)); // 5.68

4. `toExponential()` : Returns exponential notation.

let num = 5000;
console.log(num.toExponential(2));  // 5.00e+3

5. `valueOf()` : Returns primitive number value.

let num = 100;
console.log(num.valueOf());  // 100

* `Converting Values to Numbers ` :

6. `Number()` : Converts value to number.

console.log(Number("123")); // 123
console.log(Number(true));  // 1

7. `parseInt()` : Converts string to integer.

console.log(parseInt("100px")); // 100

8. `parseFloat()` : Converts string to decimal number.

console.log(parseFloat("99.99px"));  // 99.99

* `Checking Numbers` :

9. `isNaN()` : Checks if value is NaN.

console.log(isNaN("abc")); // true
console.log(isNaN(100));   // false

10. `Number.isNaN()` : Safer NaN checking.

console.log(Number.isNaN(NaN)); // true

11. `isFinite()` : Checks finite number.

console.log(isFinite(100));      // true
console.log(isFinite(Infinity)); // false

* `Number Properties` :

| Property                  | Meaning                  |
| ------------------------- | ------------------------ |
| `Number.MAX_VALUE`        | Largest possible number  |
| `Number.MIN_VALUE`        | Smallest positive number |
| `Number.MAX_SAFE_INTEGER` | Safe integer limit       |
| `Number.MIN_SAFE_INTEGER` | Minimum safe integer     |

* `Number vs BigInt` :

| Feature         | Number  | BigInt     |
| --------------- | ------- | ---------- |
| Decimal support | Yes     | No         |
| Large integers  | Limited | Very large |
| Syntax          | `100`   | `100n`     |

- `Floating Point Precision Problem` :

console.log(0.1 + 0.2); // 0.30000000000000004
( 👉 Due to binary floating-point calculations. )


* `Math Object ` : The Math object provides mathematical operations.

Common Math Methods :

| Method          | Purpose               |
| --------------- | --------------------- |
| `Math.round()`  | Round nearest integer |
| `Math.floor()`  | Round down            |
| `Math.ceil()`   | Round up              |
| `Math.trunc()`  | Remove decimal        |
| `Math.random()` | Random number         |
| `Math.max()`    | Largest value         |
| `Math.min()`    | Smallest value        |
| `Math.pow()`    | Power calculation     |
| `Math.sqrt()`   | Square root           |
| `Math.abs()`    | Absolute value        |

Math.round() :   Math.round(4.6); // 5
Math.floor() :   Math.floor(4.9); // 4
Math.ceil()  :   Math.ceil(4.1); // 5
Math.trunc() :   Math.trunc(4.9); // 4
Math.random() : Returns random number between 0 and 1.
- Random Number Between 1–10 : Math.floor(Math.random() * 10) + 1;
Math.max()   :   Math.max(10, 20, 30); // 30
Math.min()   :   Math.min(10, 20, 30); // 10
Math.pow()   :   Math.pow(2, 3); // 8
Math.sqrt()  :   Math.sqrt(25); // 5
Math.abs()   :   Math.abs(-10); // 10

----------------------------------------------------------------------------------------

* `Date` : The Date object is used to work with:

dates
time
months
years
timestamps

JavaScript stores dates internally as milliseconds since: January 1, 1970 (UTC)

* `Creating Dates` :

1. `Current Date & Time ` :

let now = new Date();
console.log(now);           // 2026-05-17T07:10:20.334Z

2. `Specific Date ` :

let date = new Date("2025-01-01");
console.log(date);          // 2025-01-01T00:00:00.000Z

3. `Using Year, Month, Day `: 

let date = new Date(2025, 0, 1);
console.log(date);          //  2025-01-01T00:00:00.000Z

⚠️ Month starts from 0

| Month    | Value |
| -------- | ----- |
| January  | 0     |
| February | 1     |
| December | 11    |

* `Date Formats` :

| Format     | Example             |
| ---------- | ------------------- |
| ISO Format | `"2025-01-01"`      |
| Full Date  | `"January 1, 2025"` |
| Timestamp  | `1735689600000`     |

* `Getting Date Values` : 

| Method              | Description          |
| ------------------- | -------------------- |
| `getFullYear()`     | Returns year         |
| `getMonth()`        | Returns month (0–11) |
| `getDate()`         | Returns day of month |
| `getDay()`          | Returns weekday      |
| `getHours()`        | Returns hours        |
| `getMinutes()`      | Returns minutes      |
| `getSeconds()`      | Returns seconds      |
| `getMilliseconds()` | Returns milliseconds |
| `getTime()`         | Returns timestamp    |

`getFullYear()` :

let date = new Date();
console.log(date.getFullYear());    // 2026

`getMonth()` :

let date = new Date();
console.log(date.getMonth());       // 4

`getDate()` :

let date = new Date();
console.log(date.getDate());        // 17

`getDay()` :

let date = new Date();
console.log(date.getDay());         // 0

| Day      | Value |
| -------- | ----- |
| Sunday   | 0     |
| Monday   | 1     |
| Saturday | 6     |

* `Setting Date Values` :

| Method          | Purpose   |
| --------------- | --------- |
| `setFullYear()` | Set year  |
| `setMonth()`    | Set month |
| `setDate()`     | Set day   |
| `setHours()`    | Set hours |

let date = new Date();
date.setFullYear(2030);
console.log(date);        // 2030-05-17T07:15:53.302Z

* `Converting Dates to Strings` :

| Method                 | Description |
| ---------------------- | ----------- |
| `toDateString()`       | Date only   |
| `toTimeString()`       | Time only   |
| `toISOString()`        | ISO format  |
| `toLocaleDateString()` | Local date  |
| `toLocaleTimeString()` | Local time  |

`toDateString()` :

let date = new Date();
console.log(date.toDateString());          // Sun May 17 2026

`toTimeString()` : 

let date = new Date();
console.log(date.toTimeString());    // 07:18:21 GMT+0000 (Coordinated Universal Time)

`toISOString()` :

let date = new Date();
console.log(date.toISOString());    // 2026-05-17T07:19:03.395Z

`toLocaleDateString()` :

let date = new Date();
console.log(date.toLocaleDateString());   // 5/17/2026

`Timestamp` : A timestamp is milliseconds since Jan 1, 1970.

`Date.now()` : console.log(Date.now());   // 1779002657828

- `Get Timestamp from Date` 

let date = new Date();
console.log(date.getTime());    // 1779002675652
 
* `Date Calculations` :

- `Difference Between Dates` :

let d1 = new Date("2025-01-01");
let d2 = new Date("2025-01-10");
let diff = d2 - d1;
console.log(diff);                // 777600000

- `Convert Milliseconds to Days` :

let days = diff / (1000 * 60 * 60 * 24);
console.log(days);                // 9

- `Important Notes` :

| Concept                        | Explanation                      |
| ------------------------------ | -------------------------------- |
| Months start from 0            | January = 0                      |
| `getDay()` returns weekday     | Not day of month                 |
| Dates are objects              | `typeof new Date()` → `"object"` |
| Timestamps are in milliseconds | Not seconds                      |

- `Common Date Methods` :

| Category   | Methods                                    |
| ---------- | ------------------------------------------ |
| Get Values | `getFullYear()`, `getMonth()`, `getDate()` |
| Set Values | `setFullYear()`, `setMonth()`              |
| Formatting | `toDateString()`, `toISOString()`          |
| Timestamp  | `Date.now()`, `getTime()`                  |

----------------------------------------------------------------------------------------
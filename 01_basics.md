* `Variable` : JavaScript variables are containers for storing values. You use them to keep data in memory so your program can work with it later.

let name = "Rahul";

- Think of a variable like a labeled box:
    name → label on the box
    "Rahul" → value inside the box

* `Creating Variables` : JavaScript has 3 ways to declare variables:

let
const
var

| Feature                        | `var`           | `let`                      | `const`                          |
| ------------------------------ | --------------- | -------------------------- | -------------------------------- |
| Scope                          | Function-scoped | Block-scoped               | Block-scoped                     |
| Re-declaration                 | Allowed         | Not allowed                | Not allowed                      |
| Reassignment                   | Allowed         | Allowed                    | Not allowed                      |
| Hoisted                        | Yes             | Yes                        | Yes                              |
| Accessible before declaration  | `undefined`     | Error (Temporal Dead Zone) | Error (Temporal Dead Zone)       |
| Must initialize at declaration | No              | No                         | Yes                              |
| Preferred modern usage         | Rarely          | Yes                        | Yes                              |
| Typical use                    | Legacy code     | Variables that change      | Variables that should not change |


* `Naming Rules` : 

- Variable names can contain:
- ✅ Allowed :
Letters (a-z, A-Z)   ( let name; )
Digits (0-9)         ( let user1; )
Underscore (_)       ( let _total; )
Dollar sign ($)      ( let $price; )

- ❌ Not Allowed :
Cannot start with a number ( let 1name; )
Cannot contain spaces ( let user name; )
Cannot use special characters ( let user-name; let total@amount; )

----------------------------------------------------------------------------------------

* `Data Types` : Data types tell JavaScript what kind of value a variable holds.

* `Primitive vs Non-Primitive Types` :

| Type               | Includes                                                               |
| ------------------ | ---------------------------------------------------------------------- |
| Primitive Types    | `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol` |
| Non-Primitive Type | `Object`                                                               |


| Feature            | Primitive Data Types                                                   | Non-Primitive Data Types              |
| ------------------ | ---------------------------------------------------------------------- | ------------------------------------- |
| Definition         | Store single simple values                                             | Store collections or complex data     |
| Stored By          | Value                                                                  | Reference                             |
| Mutable            | Immutable                                                              | Mutable                               |
| Memory Usage       | Less memory                                                            | More memory                           |
| Comparison         | Compared by value                                                      | Compared by reference                 |
| Copy Behavior      | Creates separate copy                                                  | Copies reference/address              |
| Performance        | Faster                                                                 | Slower compared to primitives         |
| Methods/Properties | Temporary wrapper objects                                              | Have properties and methods           |
| Examples           | `String`, `Number`, `Boolean`, `Null`, `Undefined`, `BigInt`, `Symbol` | `Object`, `Array`, `Function`, `Date` |


* `JavaScript Data Types Table` :

| Data Type   | Description                        | Example                 |
| ----------- | ---------------------------------- | ----------------------- |
| `String`    | Text values                        | `"Hello"`               |
| `Number`    | Integer or decimal numbers         | `25`, `3.14`            |
| `BigInt`    | Very large integers                | `12345678901234567890n` |
| `Boolean`   | `true` or `false` values           | `true`                  |
| `Undefined` | Variable declared but not assigned | `let x;`                |
| `Null`      | Intentional empty value            | `null`                  |
| `Symbol`    | Unique identifier values           | `Symbol("id")`          |
| `Object`    | Collection of key-value pairs      | `{name: "Rahul"}`       |

* `Important Notes` :

| Concept                         | Explanation                                   |
| ------------------------------- | --------------------------------------------- |
| JavaScript is dynamically typed | A variable can change its type during runtime |
| Arrays are objects              | `typeof []` returns `"object"`                |
| `null` is a bug in JS           | `typeof null` returns `"object"`              |
| Functions are special objects   | `typeof function() {}` returns `"function"`   |

* `typeof` : used to check the data type of a variable or value.

| Value          | `typeof` Result |
| -------------- | --------------- |
| `"Hello"`      | `"string"`      |
| `25`           | `"number"`      |
| `3.14`         | `"number"`      |
| `true`         | `"boolean"`     |
| `false`        | `"boolean"`     |
| `undefined`    | `"undefined"`   |
| `null`         | `"object"` ⚠️   |
| `123n`         | `"bigint"`      |
| `Symbol("id")` | `"symbol"`      |
| `{}`           | `"object"`      |
| `[]`           | `"object"` ⚠️   |
| `function(){}` | `"function"`    |
| `NaN`          | `"number"` ⚠️   |
| `Infinity`     | `"number"`      |

- Checking Arrays Properly :   Array.isArray([1,2,3]); // true

* `Type Conversion` : changing a value from one data type to another, like converting a string into a number or a number into a boolean.

- JavaScript does this in two ways:

| Type                    | Meaning                              |
| ----------------------- | ------------------------------------ |
| **Explicit Conversion** | You manually convert the type        |
| **Implicit Conversion** | JavaScript automatically converts it |

1. `Explicit Type Conversion (Manual)` : You convert values using built-in functions.

| Function    | Purpose             |
| ----------- | ------------------- |
| `Number()`  | Converts to number  |
| `String()`  | Converts to string  |
| `Boolean()` | Converts to boolean |

2. `Implicit Type Conversion (Automatic)` : JavaScript automatically converts types when needed.

- String + Number → String ( "5" + 2 = "52" )
- String - Number → Number ( "10" - 2 = 8 )
- Boolean in Math ( true = 1, false = 0 )
- Comparison Operators ( "5" == 5;   // true (type conversion happens) )

* `Truthy and Falsy Values` :

- Falsy Values : 
false
0
""
null
undefined
NaN

- Everything else is mostly truthy.

----------------------------------------------------------------------------------------

* `Operators` : Operators are symbols that let you do actions on values.

- Main categories:

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Unary Operators
Ternary Operator

1. `Arithmetic Operators` : Used for mathematical calculations.

| Operator | Meaning        | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `5 + 2`  | `7`    |
| `-`      | Subtraction    | `5 - 2`  | `3`    |
| `*`      | Multiplication | `5 * 2`  | `10`   |
| `/`      | Division       | `10 / 2` | `5`    |
| `%`      | Remainder      | `10 % 3` | `1`    |
| `**`     | Exponent       | `2 ** 3` | `8`    |

2. `Assignment Operators` : Used to assign values to variables.

| Operator | Meaning             | Example  |
| -------- | ------------------- | -------- |
| `=`      | Assign              | `x = 5`  |
| `+=`     | Add and assign      | `x += 2` |
| `-=`     | Subtract and assign | `x -= 2` |
| `*=`     | Multiply and assign | `x *= 2` |
| `/=`     | Divide and assign   | `x /= 2` |
| `%=`     | Remainder assign    | `x %= 2` |

3. `Comparison Operators` : Used to compare values.

| Operator | Meaning          | Example     | Result  |
| -------- | ---------------- | ----------- | ------- |
| `==`     | Equal (loose)    | `"5" == 5`  | `true`  |
| `===`    | Equal (strict)   | `"5" === 5` | `false` |
| `!=`     | Not equal        | `5 != 3`    | `true`  |
| `!==`    | Strict not equal | `"5" !== 5` | `true`  |
| `>`      | Greater than     | `5 > 3`     | `true`  |
| `<`      | Less than        | `5 < 3`     | `false` |
| `>=`     | Greater or equal | `5 >= 5`    | `true`  |
| `<=`     | Less or equal    | `5 <= 3`    | `false` |

4. `Logical Operators` : Used to combine conditions.

| Operator | Meaning | Example         | Result  |
| -------- | ------- | --------------- | ------- |
| `&&`     | AND     | `true && false` | `false` |
| `||`     | OR      | `true || false` | `true`  |
| `!`      | NOT     | `!true`         | `false` |

5. `Unary Operators` : Work with a single operand.

| Operator | Meaning     | Example     |
| -------- | ----------- | ----------- |
| `++`     | Increment   | `x++`       |
| `--`     | Decrement   | `x--`       |
| `typeof` | Type check  | `typeof 10` |
| `!`      | Logical NOT | `!true`     |

6. `Ternary Operator` : Short form of if-else.

condition ? value1 : value2

7. `Type Operators` :

| Operator     | Meaning            | Example                |
| ------------ | ------------------ | ---------------------- |
| `typeof`     | Returns data type  | `typeof "hi"`          |
| `instanceof` | Checks object type | `arr instanceof Array` |

8. `Bitwise Operators` (Advanced / low-level) : Work on binary (0s and 1s)

| Operator | Meaning     |
| -------- | ----------- |
| `&`      | AND         |
| `|`      | OR          |
| `^`      | XOR         |
| `~`      | NOT         |
| `<<`     | Left shift  |
| `>>`     | Right shift |

9. `Nullish Coalescing Operator` (??) : Returns right value only if left is null or undefined

let name = null;
let result = name ?? "Guest";
console.log(result); // "Guest"

10. `Optional Chaining` (?.) : Safely accesses nested properties
- Prevents "cannot read property of undefined" errors

let user = {};
console.log(user.address?.city); // undefined (no error)

11. `Comma Operator` (,) : The comma operator allows you to evaluate multiple expressions in a single statement, but it returns only the last expression’s value.

let x = (1, 2, 3);
console.log(x); // 3

12. `Delete Operator` : Removes object properties

let user = { name: "Rahul" };
delete user.name;
console.log(user); // {}

13. `Spread Operator` (...) : It expands (spreads) elements of an array or object.

🔹 Spread in Arrays : 

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);            // [1, 2, 3, 4, 5]

🔹 Copying an Array :

let original = [10, 20, 30];
let copy = [...original];
console.log(copy);

🔹 Spread in Objects : 

let user = { name: "Rahul", age: 20 };
let newUser = { ...user, city: "Bangalore" };
console.log(newUser);

🔹 Merging Objects : 

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = { ...obj1, ...obj2 };
console.log(merged);

14. `Rest Operator` (...) : It collects multiple values into a single array or object

🔹 Rest in Function Parameters :

function sum(...numbers) {
  return numbers;
}
console.log(sum(1, 2, 3, 4));   // [1, 2, 3, 4]

🔹 Rest with Reduce Example : 

function add(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3));      // 6

🔹 Rest in Destructuring (Array) :

let [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

- Spread vs Rest :

| Feature  | Spread                           | Rest                            |
| -------- | -------------------------------- | ------------------------------- |
| Purpose  | Expands values                   | Collects values                 |
| Use case | Arrays, objects copying          | Function params, destructuring  |
| Output   | Expands into individual elements | Combines into array             |
| Position | Right side of assignment         | Left side / function parameters |

----------------------------------------------------------------------------------------

* `Template Literals` :
- Template literals are a modern way to work with strings in JavaScript. They make it easier to include variables, expressions, and multi-line text.
- They use backticks ` ` instead of quotes.

let name = "Rahul";
let message = `Hello ${name}`;
console.log(message); // Hello Rahul

👉 ${} is used to insert variables inside strings.

----------------------------------------------------------------------------------------

* `Destructuring` : 
- Destructuring is a way to extract values from arrays or objects and store them in variables easily.
- Instead of writing multiple lines, you can unpack data in a single line.

1. `Array Destructuring` : 

let arr = [10, 20, 30];
let [a, b, c] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

- Skipping Values : middle value skipped

let arr = [10, 20, 30];
let [a, , c] = arr;
console.log(a); // 10
console.log(c); // 30

- Default Values :

let arr = [10];
let [a, b = 50] = arr;
console.log(b); // 50

- Swapping Variables :

let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10

2. `Object Destructuring` :

let user = {
  name: "Rahul",
  age: 21
};
let { name, age } = user;
console.log(name); // Rahul
console.log(age);  // 21

- Different Variable Names :

let user = {
  name: "Rahul",
  age: 21
};
let { name: userName, age: userAge } = user;
console.log(userName); // Rahul
console.log(userAge);  // 21

- Default Values :

let user = {
  name: "Rahul"
};
let { name, age = 25 } = user;
console.log(age); // 25

3. `Nested Destructuring` : Object inside Object

let user = {
  name: "Rahul",
  address: {
    city: "Bangalore",
    country: "India"
  }
};
let {
  address: { city, country }
} = user;
console.log(city);    // Bangalore
console.log(country); // India

4. `Function Parameter Destructuring` : 

- Object in function :

function showUser({ name, age }) {
  console.log(name, age);
}
showUser({ name: "Rahul", age: 21 });

- Array in function :

function sum([a, b]) {
  return a + b;
}
console.log(sum([10, 20])); // 30

- `Summary` :

| Type    | Syntax         |
| ------- | -------------- |
| Array   | `[a, b] = arr` |
| Object  | `{a, b} = obj` |
| Rename  | `{a: newName}` |
| Default | `{a = 10}`     |

----------------------------------------------------------------------------------------

*`Conditionals` : Conditionals let your program make decisions.

1. `if Statement` : Runs code only if condition is true.

let age = 20;
if (age >= 18) {
  console.log("You can vote");    // You can vote
}

2. `if...else` :If condition is false, else runs.

let age = 16;
if (age >= 18) {
  console.log("You can vote");     // You can vote
} else {
  console.log("You cannot vote");
}

3. `if...else if...else` : Used for multiple conditions.

let marks = 75;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 70) {
  console.log("B grade");         // B grade
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

4. `Comparison Inside Conditions` : Conditionals usually use comparison operators:

| Operator | Meaning          |
| -------- | ---------------- |
| `>`      | greater than     |
| `<`      | less than        |
| `>=`     | greater or equal |
| `<=`     | less or equal    |
| `===`    | equal            |
| `!==`    | not equal        |

5. `Logical Operators in Conditions` :

AND (&&) : Both must be true
OR (||) : Any one can be true
NOT (!) : Reverses condition

6. `Ternary Operator (Shortcut)` : Short form of if-else.

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);   // Adult

7. `switch` : The switch statement is another way to write multiple conditions (like if...else if...else), but in a cleaner way when you are checking one value against many options.

switch (expression) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
    // code
}

- break : Without break, execution continues into next cases (called fall-through).
- default case : Runs when no match is found.

----------------------------------------------------------------------------------------

* `Loops` : Loops let you repeat a block of code multiple times without writing it again and again.

- `Types of Loops in JavaScript` :
for loop (most used)
while loop
do...while loop
for...of loop
for...in loop

- `for Loop` :

for (initialization; condition; update) {
  // code
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

1
2
3
4
5

- `while Loop` : Used when you don’t know exact number of iterations.

while (condition) {
  // code
}

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

1
2
3
4
5

- `do...while Loop` : Runs code at least once, even if condition is false.

do {
  // code
} while (condition);

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

1
2
3
4
5

- `for...of Loop` (Arrays) : Used for arrays and strings.

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

apple
banana
mango

let name = "Rahul";
for (let char of name) {
  console.log(char);
}

R
a
h
u
l

- `for...in Loop` (Objects) : Used for objects (keys).

let user = {
  name: "Asha",
  age: 22
};
for (let key in user) {
  console.log(key, user[key]);
}

name Asha
age 22

- `forEach()` (Array Loop Method) :
- forEach() is a special loop for arrays in JavaScript.
- It is used to run a function for every item in an array.

let fruits = ["apple", "banana", "mango"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

apple
banana
mango

- Syntax :
array.forEach(function(element, index, array) {
  // code
});

`Loop Control Statements` :

1. `break` (stop loop)

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

1
2

2. `continue` (skip one iteration)

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

1
2
4
5

----------------------------------------------------------------------------------------

* `Functions` : a block of reusable code designed to perform a specific task.

- Syntax :

function functionName() {
  // code
}

Ex:
----

function greet() {
  console.log("Hello World");
}
greet();

| Part       | Meaning                    |
| ---------- | -------------------------- |
| `function` | Keyword to create function |
| `greet`    | Function name              |
| `()`       | Parameters section         |
| `{}`       | Function body              |
| `greet()`  | Function call/invocation   |

----------------------------------------------------------------------------------------

* `Arrays` : 

- An array is a special type of object used to store multiple values in a single variable.
- Instead of creating many variables, arrays let you keep related data together.

let fruits = ["Apple", "Banana", "Mango"];

- Arrays use zero-based indexing

["Apple", "Banana", "Mango"]
    0          1         2

- `Accessing Array Elements` :

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

----------------------------------------------------------------------------------------

*`Objects` : An object is a collection of key-value pairs used to store related data together.

`Creating an Object` :

let user = {
  name: "Rahul",
  age: 21,
  isStudent: true
};

- `Object Structure` :

key      : value
name     : "Rahul"
age      : 21
isStudent: true

- `Accessing Object Values` :

| Method           | Example        | Use Case             |
| ---------------- | -------------- | -------------------- |
| Dot notation     | `user.name`    | Common/simple access |
| Bracket notation | `user["name"]` | Dynamic keys         |

----------------------------------------------------------------------------------------
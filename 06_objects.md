* Object :

- An object is a collection of related data and functions stored as key-value pairs.

const person = {
  name: "Rahul",
  age: 25,
  city: "Bangalore"
};

Here:

| Key    | Value         |
| ------ | ------------- |
| `name` | `"Rahul"`     |
| `age`  | `25`          |
| `city` | `"Bangalore"` |

- `Key-Value Pairs` : Objects store data in key-value format.

key: value

- Important Characteristics of Objects :

1. Objects Store Multiple Values

const book = {
  title: "JavaScript Basics",
  author: "John",
  pages: 300
};

2. Values Can Be Any Data Type

const user = {
  name: "Sam",          // string
  age: 25,              // number
  isAdmin: true,        // boolean
  skills: ["JS", "HTML"] // array
};

3. Objects Are Mutable : Mutable means changeable.

const person = {
  name: "Rahul"
};
person.name = "Amit";
console.log(person.name);  // Amit

4. Objects Can Also Store Functions : Functions inside objects are called methods.

const user = {
  name: "Rahul",
  greet: function() {
    console.log("Hello");
  }
};
user.greet();   // Hello

* ` Creating Objects ` :

1. Object Literal ✅ (Most Common)
2. new Object()
3. Constructor Function
4. Factory Function
5. Classes
6. Object.create()

1. Object Literal (Most Common) : This is the easiest and most popular way.

const objectName = {
  key: value
};

const person = {
  name: "Rahul",
  age: 25
};

2. Using new Object() : JavaScript has a built-in Object constructor.

const obj = new Object();

const user = new Object();
user.name = "Amit";
user.age = 30;
console.log(user);  // { name: "Amit", age: 30 }

3. Constructor Function : Used when we want to create multiple similar objects.

- Problem Without Constructor : Repeating code again and again is bad.

const user1 = {
  name: "Rahul",
  age: 25
};

const user2 = {
  name: "Amit",
  age: 30
};

- Constructor Function Solution :

function User(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new User("Rahul", 25);
const user2 = new User("Amit", 30);
console.log(user1);
console.log(user2);

User { name: "Rahul", age: 25 }
User { name: "Amit", age: 30 }

- Important Rules for Constructor Functions :

1. Function name usually starts with Capital Letter : function User() {}
2. Use new : new User() (Without new, behavior changes.)

4. Factory Function : Another way to create reusable objects.

function createUser(name, age) {
  return {
    name,
    age
  };
}
const user1 = createUser("Rahul", 25);
console.log(user1);   // { name: "Rahul", age: 25 }

- Factory Function vs Constructor Function :

| Factory Function     | Constructor Function |
| -------------------- | -------------------- |
| Uses `return`        | Uses `this`          |
| No `new` needed      | Requires `new`       |
| Easier for beginners | Common in older JS   |

5. Using Classes :

- Modern JavaScript introduced classes.
- Classes are easier to read and organize.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const user1 = new User("Rahul", 25);
console.log(user1);    // User { name: "Rahul", age: 25 }

6. Using Object.create() : Used for prototype-based inheritance.

const person = {
  greet() {
    console.log("Hello");
  }
};
const user = Object.create(person);
user.name = "Rahul";
console.log(user.name);
user.greet();

Rahul
Hello

- Comparison of All Methods :

| Method               | Best For                  |
| -------------------- | ------------------------- |
| Object Literal       | Simple objects            |
| `new Object()`       | Rarely used               |
| Constructor Function | Reusable object templates |
| Factory Function     | Clean reusable creation   |
| Classes              | Modern OOP                |
| `Object.create()`    | Inheritance               |

* `Accessing Object Properties` :

- JavaScript provides two main ways:
    Dot Notation
    Bracket Notation

const person = {
  name: "Rahul",
  age: 25,
  city: "Bangalore"
};

1. Dot Notation : objectName.propertyName

console.log(person.name);  // Rahul

2. Bracket Notation : objectName["propertyName"]

console.log(person["name"]);  // Rahul

- Dynamic Keys :

const key = "age";
console.log(person[key]);  // Rahul

- Properties with Spaces : Dot notation cannot handle spaces.

const user = {
  "full name": "Rahul Sharma"
};
console.log(user["full name"]);  // Rahul Sharma

- Accessing Non-Existing Properties : JavaScript returns undefined if property does not exist.

console.log(person.salary);  // undefined

- Nested Object Access : Objects can contain other objects.

const student = {
  name: "Amit",
  address: {
    city: "Delhi",
    pin: 110001
  }
};
console.log(student.address.city); // Delhi

- Optional Chaining (?.) : Prevents errors when properties may not exist.

console.log(student.address?.city);

If address does not exist:
    No crash
    Returns undefined

- Without Optional Chaining : This can cause error:

console.log(student.contact.phone); // Error : Cannot read properties of undefined

- With Optional Chaining : console.log(student.contact?.phone); // undefined

- Accessing Array Inside Object :

const user = {
  name: "Sam",
  skills: ["HTML", "CSS", "JavaScript"]
};
console.log(user.skills[0]); // HTML

- Accessing Function Inside Object :

const person = {
  name: "Rahul",
  greet() {
    return "Hello";
  }
};
console.log(person.greet());  // Hello

* `Adding, Updating, and Deleting Properties` :

- Their properties can be changed after creation.
- You can:
    Add new properties
    Update existing properties
    Delete properties

const person = {
  name: "Rahul",
  age: 25
};

1. Adding Properties : You can add new properties anytime.

person.city = "Bangalore"; ( Using Dot Notation )
person["country"] = "India"; ( Using Bracket Notation )

{
  name: "Rahul",
  age: 25,
  city: "Bangalore",
  country: "India"
}

2. Updating Properties : If property already exists, assigning a new value updates it.

person.age = 30;

{
  name: "Rahul",
  age: 30
}

3. Deleting Properties : Use the delete operator.

delete object.property

{
  name: "Rahul",
  age: 30,
  city: "Mumbai"
}

delete person.city;

{
  name: "Rahul",
  age: 30
}

* `Object Methods` :

- Objects can store not only data, but also functions.
- When a function is stored inside an object, it is called a: Method

const user = {
  name: "Rahul",
  greet: function() {
    console.log("Hello");
  }
};

| Function        | Method              |
| --------------- | ------------------- |
| Independent     | Inside object       |
| Called directly | Called using object |
| `add()`         | `obj.add()`         |

* `this` :

- this refers to: The object that is currently executing the function.
- The value of this depends on:
    how the function is called
    where the function is called

const user = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};
user.greet();  // Rahul

- In Object Methods : this refers to the object before the dot.

user.greet() , here this === user

- this in Regular Functions :

function show() {
  console.log(this);
}
show();
// window (In browsers (non-strict mode))
// undefined (In strict mode)

- this in Arrow Functions :
    Arrow Functions Do NOT Have Their Own this
    They inherit this from surrounding scope.

const user = {
  name: "Rahul",
  greet: () => {
    console.log(this.name);
  }
};
user.greet();  // undefined

- Arrow functions don't create their own this. so here this comes from outer scope (global scope). Not from user.

* `Object Iteration` :

1. for...in
2. Object.keys()
3. Object.values()
4. Object.entries()

1. for...in Loop :

for (let key in object) {
  // code
}

- Getting Both Key and Value :

for (let key in person) {
  console.log(key, person[key]);
}

2. Object.keys() : Returns all object keys as an array.

- Object.keys(object)

const keys = Object.keys(person);
console.log(keys);  // ["name", "age", "city"]

3. Object.values() : Returns all values as an array.

- Object.values(object)

const values = Object.values(person);
console.log(values);  // ["Rahul", 25, "Bangalore"]

4. Object.entries() : Returns key-value pairs as nested arrays.

- Object.entries(object)

console.log(Object.entries(person));

// output :
[
  ["name", "Rahul"],
  ["age", 25],
  ["city", "Bangalore"]
]

- Best Way with Destructuring :

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

| Method             | Returns                  |
| ------------------ | ------------------------ |
| `for...in`         | Keys                     |
| `Object.keys()`    | Array of keys            |
| `Object.values()`  | Array of values          |
| `Object.entries()` | Array of key-value pairs |

* `Object Destructuring` : Extract properties from objects into variables easily.
- Instead of writing repetitive code, destructuring provides a cleaner and shorter syntax.

- Without Destructuring :

const person = {
  name: "Rahul",
  age: 25
};
const name = person.name;
const age = person.age;
console.log(name);  // Rahul
console.log(age);  // 25

- With Destructuring : Much cleaner.

const person = {
  name: "Rahul",
  age: 25
};
const { name, age } = person;
console.log(name);  // Rahul
console.log(age);  // 25

syntax : const { propertyName } = object;

- Important Rule :

- Variable names must match property names.
- Renaming Variables : You can rename variables during destructuring.
      const { property: newVariable } = object;

const person = {
  name: "Rahul"
};
const { name: userName } = person;
console.log(userName);   // Rahul

- Why Renaming is Useful : Avoid variable conflicts.
- Default Values : Used when property may not exist.

const user = {
  name: "Rahul"
};
const { country = "India" } = user;
console.log(country);  // India

- Nested Object Destructuring :

const student = {
  name: "Amit",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const {
  address: { city }
} = student;
console.log(city);  // Delhi

- Nested Destructuring with Renaming :

const {
  address: { city: userCity }
} = student;
console.log(userCity);

- Destructuring in Function Parameters : Very common in React and APIs.

- Without Destructuring :

function printUser(user) {
  console.log(user.name);
}

- With Destructuring :

function printUser({ name }) {
  console.log(name);
}

- Destructuring Arrays vs Objects :

- Array Destructuring : Uses position.
const [a, b] = [10, 20];

- Object Destructuring : Uses property names.
const { name } = person;

* `Spread and Rest Operators` : 

| Operator | Meaning         |
| -------- | --------------- |
| Spread   | Expands values  |
| Rest     | Collects values |

1. Spread Operator (...) : The spread operator expands elements.

- Spread with Arrays : The array is expanded into individual values.

const numbers = [1, 2, 3];
console.log(...numbers);  // 1 2 3

- Copying Arrays :

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);  // [1, 2, 3]

- Merging Arrays :

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);   // [1, 2, 3, 4]

- Adding Elements :

const nums = [2, 3];
const updated = [1, ...nums, 4];
console.log(updated);  // [1, 2, 3, 4]

- Spread with Objects :

- Copying Objects :

const person = {
  name: "Rahul",
  age: 25
};
const copy = { ...person };
console.log(copy);

- Merging Objects :

const obj1 = {
  a: 1
};
const obj2 = {
  b: 2
};
const merged = {
  ...obj1,
  ...obj2
};
console.log(merged);  // { a: 1, b: 2 }

- Overriding Properties :

const user = {
  name: "Sam",
  age: 20
};
const updatedUser = {
  ...user,
  age: 30
};
console.log(updatedUser);  // { name: "Sam", age: 30 }

- Spread in Function Calls :

const nums = [1, 2, 3];
Math.max(...nums);  // Math.max(1, 2, 3);

2. Rest Operator (...) : The rest operator collects values.

- Rest with Function Parameters : All arguments are collected into an array.

function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4);  // [1, 2, 3, 4]

- Sum Example :

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));  // 6

- Rest with Array Destructuring :

const numbers = [1, 2, 3, 4];
const [first, ...rest] = numbers;
console.log(first);  // 1
console.log(rest);  // [2, 3, 4]

- Rest with Object Destructuring :

const person = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};
const { name, ...others } = person;
console.log(name);  // Rahul
console.log(others);  //  { age: 25, city: "Delhi" }

- Spread vs Rest :

| Feature | Spread                          | Rest                           |
| ------- | ------------------------------- | ------------------------------ |
| Purpose | Expands values                  | Collects values                |
| Meaning | “Spread out”                    | “Gather together”              |
| Used in | Arrays, objects, function calls | Function params, destructuring |
| Result  | Individual values               | Array/object                   |

* `Object References and Copying` :

1. Primitive vs Reference Types :

| Type                  | Stored By |
| --------------------- | --------- |
| Primitive             | Value     |
| Object/Array/Function | Reference |

- Memory Visualization :

const obj1 = { name: "Rahul" };
const obj2 = obj1;

Memory : Both reference the same object.

obj1  ──► { name: "Rahul" }
obj2  ──► same object

- Objects compare by reference :

const a = { x: 1 };
const b = { x: 1 };
console.log(a === b);  // false

- Same Reference Comparison :

const a = { x: 1 };
const b = a;
console.log(a === b);  // true

- Shallow Copy :
- A shallow copy copies only the top level.
- Nested objects still share references.

const user = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};
const copiedUser = { ...user };
copiedUser.name = "Amit";
console.log(user.name);  // Rahul

- Top-level property copied successfully.
- Problem with Nested Objects : Because nested objects are still shared.

copiedUser.address.city = "Mumbai";
console.log(user.address.city);  // Mumbai

- Methods for Shallow Copy : Both create shallow copies.

- Spread Operator : const copy = { ...obj };
- Object.assign() : const copy = Object.assign({}, obj);

- Deep Copy : A deep copy creates completely independent nested objects.

- Using structuredClone() : Modern and recommended.

const original = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};
const deepCopy = structuredClone(original);
deepCopy.address.city = "Mumbai";
console.log(original.address.city);  // Delhi

- Now nested objects are independent.

Deep Copy Visualization :

original ──► { address ──► { city: "Delhi" } }
deepCopy ──► completely new objects

- Old Deep Copy Technique :
const deepCopy = JSON.parse(JSON.stringify(obj));

Problems with JSON Method : It loses:
  Functions
  Undefined
  Date objects
  Map
  Set
  Symbols

  * `Object Comparison` : Objects compare by reference, NOT by value.

  const obj1 = {
  name: "Rahul"
};
const obj2 = {
  name: "Rahul"
};
console.log(obj1 === obj2);  // false 

- Even though both objects contain the same data.
- Because both objects are stored at different memory locations.

obj1 ──► { name: "Rahul" }
obj2 ──► { name: "Rahul" }

- Same Reference Comparison :

const obj1 = {
  name: "Rahul"
};
const obj2 = obj1;
console.log(obj1 === obj2);  // true

*`Important Object Methods` :

1. Object.assign() : Used to copy or merge objects (shallow copy).

const user = {
  name: "Rahul",
  age: 25
};
const copy = Object.assign({}, user);
console.log(copy);  // { name: "Rahul", age: 25 }

Merging Objects :

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);  // { a: 1, b: 2 }

Important Note :
  It performs shallow copy
  Nested objects are still shared

2. Object.freeze() : Used to make an object completely immutable.

const user = {
  name: "Rahul"
};
Object.freeze(user);
user.name = "Amit";
console.log(user.name);  // Rahul

What Freeze Does , Prevents:
  Adding new properties
  Updating existing properties
  Deleting properties
  Freeze is shallow
  Nested objects are NOT frozen.

3. Object.seal() : Used to allow updates but prevent adding/removing properties.

const user = {
  name: "Rahul"
};
Object.seal(user);
user.name = "Amit";      // allowed
user.age = 30;           // not allowed
delete user.name;        // not allowed
console.log(user);       // { name: "Amit" }

| Feature           | freeze | seal |
| ----------------- | ------ | ---- |
| Modify values     | ❌      | ✅    |
| Add properties    | ❌      | ❌    |
| Delete properties | ❌      | ❌    |

4. Object.hasOwn() : Checks if an object has a property directly (not inherited).

const user = {
  name: "Rahul"
};
console.log(Object.hasOwn(user, "name"));  // true

Difference from in :
  in checks own + prototype properties
  hasOwn() checks only own properties

5. Object.create() : Used to create a new object with a prototype.

const person = {
  greet() {
    console.log("Hello");
  }
};
const user = Object.create(person);
user.name = "Rahul";
console.log(user.name);  // Rahul
user.greet();  // Hello

user does NOT directly have greet
It inherits from person
user → person → Object.prototype

6. Object.keys() : Returns all keys of an object.

const user = {
  name: "Rahul",
  age: 25
};
console.log(Object.keys(user));  // ["name", "age"]

7. Object.values() : Returns all values of an object.

console.log(Object.values(user));  // ["Rahul", 25]

8. Object.entries() : Returns key-value pairs as arrays.

console.log(Object.entries(user));

[
  ["name", "Rahul"],
  ["age", 25]
]

9. Object.fromEntries() : Opposite of Object.entries().
Converts array → object.

const entries = [
  ["name", "Rahul"],
  ["age", 25]
];
const obj = Object.fromEntries(entries);
console.log(obj);  // { name: "Rahul", age: 25 }

10. Object.defineProperty() : Used to control property behavior

const user = {};
Object.defineProperty(user, "name", {
  value: "Rahul",
  writable: false
});
user.name = "Amit";
console.log(user.name);  // Rahul

Property Flags :

| Flag         | Meaning                    |
| ------------ | -------------------------- |
| writable     | can change value           |
| enumerable   | appears in loops           |
| configurable | can delete/modify property |

11. Object.getOwnPropertyDescriptors() : Shows detailed info about properties.

console.log(Object.getOwnPropertyDescriptors(user));

{
  name: {
    value: "Rahul",
    writable: false,
    enumerable: true,
    configurable: false
  }
}

12. Object.hasOwnProperty() : Older method to check own property.

user.hasOwnProperty("name");
⚠️ Still works but less recommended than: Object.hasOwn(user, "name");

Summary :

| Method                             | Purpose                          |
| ---------------------------------- | -------------------------------- |
| Object.assign()                    | Copy/merge objects               |
| Object.freeze()                    | Make immutable                   |
| Object.seal()                      | Lock structure but allow updates |
| Object.create()                    | Create prototype-based object    |
| Object.keys()                      | Get keys                         |
| Object.values()                    | Get values                       |
| Object.entries()                   | Get key-value pairs              |
| Object.fromEntries()               | Convert array → object           |
| Object.defineProperty()            | Control property behavior        |
| Object.hasOwn()                    | Check own property               |
| Object.getOwnPropertyDescriptors() | Inspect property details         |

* `Optional Chaining and Nullish Coalescing` :

`Optional Chaining (?.)` : Optional chaining is used to safely access deeply nested properties without causing errors.
- Problem Without Optional Chaining , If a property doesn’t exist, JavaScript throws an error.

const user = {};
console.log(user.address.city);  // TypeError: Cannot read properties of undefined

Solution: Optional Chaining - No error occurs.
const user = {};
console.log(user?.address?.city);

`Nullish Coalescing (??)` : Nullish coalescing provides a default value when something is null or undefined.

Problem with || - ❌ Problem: 0 is treated as falsy.
const value = 0 || 100;
console.log(value);  // 100

Solution: ?? - ✔ Only null or undefined trigger fallback.
const value = 0 ?? 100;
console.log(value);  // 0

* `JSON` : JavaScript Object Notation
- It is a lightweight data format used to exchange data.

{
  "name": "Rahul",
  "age": 25
}

- JSON vs JavaScript Object :

| JavaScript Object              | JSON                        |
| ------------------------------ | --------------------------- |
| Real JavaScript data structure | String format               |
| Keys can be unquoted           | Keys must use double quotes |
| Can store functions            | Cannot store functions      |
| Can use comments               | No comments allowed         |

- Converting Object → JSON : JSON.stringify()

const user = {
  name: "Rahul",
  age: 25
};
const json = JSON.stringify(user);
console.log(json);  // {"name":"Rahul","age":25}

- Converting JSON → Object : JSON.parse()

const json = '{"name":"Rahul","age":25}';
const obj = JSON.parse(json);
console.log(obj.name);

- Important Rules of JSON :

Rule 1: Keys Must Use Double Quotes

{
  "name": "Rahul"
}

Rule 2: No Functions Allowed ( Functions are ignored by JSON )

{
  "greet": function() {}
}

Rule 3: No Undefined 

const obj = {
  name: "Rahul",
  age: undefined
};
console.log(JSON.stringify(obj));  // {"name":"Rahul"}

Rule 4: No Comments

{
  // comment          ❌ Invalid JSON:
  "name": "Rahul"
}

Arrays work perfectly.

const arr = [1, 2, 3];
const json =
  JSON.stringify(arr);
console.log(json);  // [1,2,3]

- Nested Objects :

const user = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};
const json =
  JSON.stringify(user);
console.log(json);  // {"name":"Rahul","address":{"city":"Delhi"}}

- Pretty Printing JSON : Use extra arguments in JSON.stringify()

const user = {
  name: "Rahul",
  age: 25
};
console.log(
  JSON.stringify(user, null, 2)
);

{
  "name": "Rahul",
  "age": 25
}

- JSON.stringify() Parameters : JSON.stringify(value, replacer, space)

| Parameter | Purpose                  |
| --------- | ------------------------ |
| value     | object to convert        |
| replacer  | filter/modify properties |
| space     | formatting               |

* `Object-Oriented Concepts` : Even before classes existed, JavaScript used objects and prototypes to implement OOP concepts.

Main OOP Concepts

There are 4 major concepts:

Encapsulation
Inheritance
Polymorphism
Abstraction

JavaScript implements these using:

Objects
Functions
Prototypes
Classes

1. Encapsulation : bundling data and the methods that operate on that data together, while restricting direct access to some internal details.
- It also means controlling access to internal data.

JavaScript supports encapsulation in multiple ways :

1. Basic Object Encapsulation :

const bankAccount = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  }
};

bankAccount.deposit(500);
console.log(bankAccount.balance); // 1500

- The balance is still publicly accessible. So this is not true protection.
  ( bankAccount.balance = -999999; )

2. Encapsulation using Closures : Closures allow private variables.

function createBankAccount() {
  let balance = 1000; // private variable

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount();
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined

Why this works :
- balance exists inside the function scope and cannot be accessed directly from outside.
- Only the returned methods can interact with it.
- This is classic JavaScript encapsulation.

3. Encapsulation using Classes : ES6 classes provide cleaner syntax.

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(200);
console.log(account.getBalance());

But here balance is still public ( account.balance = 0; )

4. True Private Fields (#) : Modern JavaScript supports real private fields.

class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

Trying to access private fields directly: console.log(account.#balance);
Results in: SyntaxError
This is the strongest built-in encapsulation in modern JS.

2. Inheritance : Inheritance means a class or object can reuse properties and methods from another class or object.

Inheritance allows you to:
    Reuse code
    Extend existing functionality
    Create cleaner object hierarchies
    Follow DRY (“Don’t Repeat Yourself”)

1. Inheritance using Classes (extends) : Modern JavaScript uses the extends keyword.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rocky");
dog.speak(); // inherited method
dog.bark();  // own method

Dog inherits from Animal.
So Dog automatically gets:
name
speak()
and can also define its own methods like bark().

2. Using super() : super() calls the parent class constructor.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }
}

const dog = new Dog("Rocky", "Labrador");
console.log(dog.name);
console.log(dog.breed);

Without super(), this cannot be used in child constructors.

3. Method Overriding : Child classes can replace parent methods.

class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak();  // Dog barks

- This is called method overriding.

4. Calling Parent Methods with super :

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog bark");
  }
}

const dog = new Dog();
dog.speak();

Animal sound
Dog bark

5. Prototype-based Inheritance : JavaScript inheritance is actually based on prototypes under the hood.

const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log("Dog barks");
};

dog.speak();
dog.bark();

Here:
dog inherits from animal
animal becomes the prototype of dog

Inheritance Chain :

JavaScript looks for properties in this order:
object → prototype → parent prototype → Object.prototype
This is called the prototype chain.

3. Polymorphism :  Polymorphism means: “One interface, many forms.”
- Different objects can respond to the same method call in different ways.

For example:
A dog makes a barking sound
A cat makes a meowing sound
Both can have a method called speak(), but behave differently.

1. Method Overriding (Runtime Polymorphism) 
This is the most common type in JavaScript.

class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();

Woof
Meow
// Same method → different behavior.

4. Abstraction : Hiding complex implementation details and showing only the essential features.
- The user interacts with a simple interface without needing to know how everything works internally.

1. Simple Abstraction Example :

class CoffeeMachine {
  start() {
    this.#boilWater();
    this.#brewCoffee();
    console.log("Coffee is ready");
  }

  #boilWater() {
    console.log("Boiling water...");
  }

  #brewCoffee() {
    console.log("Brewing coffee...");
  }
}

const machine = new CoffeeMachine();
machine.start();

Boiling water...
Brewing coffee...
Coffee is ready

The user only calls: machine.start()
Internal steps are hidden.
This is abstraction.

2. Abstraction using Private Methods :
Modern JavaScript supports private fields/methods using #.

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (this.#validate(amount)) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }

  #validate(amount) {
    return amount > 0;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); 

The validation logic is hidden from outside users.

* `Prototypes` : Every JavaScript object has a hidden internal link to another object called its prototype.

The object can:
use its own properties
and also access properties/methods from its prototype

Think of it like this:
Object → Prototype → Prototype → null
This chain is called the prototype chain.

const person = {
  greet() {
    console.log("Hello");
  }
};

const user = {
  name: "Aman"
};

Object.setPrototypeOf(user, person);
user.greet();  // Hello

JavaScript checks:

Does user have greet()?
→ No
Check prototype (person)
→ Yes
So it executes that method.

- `Prototype Chain` :

const animal = {
  eats: true
};

const dog = {
  barks: true
};

Object.setPrototypeOf(dog, animal);
console.log(dog.barks); // own property
console.log(dog.eats);  // inherited

Chain : dog → animal → Object.prototype → null

JavaScript searches upward until:
property is found
or null is reached

- Almost Everything in JavaScript is an Object . Arrays, functions, objects all use prototypes.

const arr = [1, 2, 3];
console.log(arr.__proto__);

You’ll see array methods like:
push
pop
map
filter

These come from:
Array.prototype

- `__proto__` : __proto__ points to the prototype object.

const user = {};
console.log(user.__proto__);  // Object.prototype

- __proto__ is mostly used for learning/debugging. 

Modern methods:
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, proto)

- Constructor Functions and Prototypes :
Before ES6 classes, constructor functions were used.

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const p1 = new Person("Rahul");
const p2 = new Person("Amit");
p1.sayHi();
p2.sayHi();

Why use prototype here?
Without prototypes:

function Person(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("Hi");
  };
}
Every object gets its own copy of sayHi.

With prototypes:
one shared method
memory efficient

- How new Works Internally : const p1 = new Person("Rahul");'

JavaScript does roughly:

const obj = {};
obj.__proto__ = Person.prototype;
Person.call(obj, "Rahul");
return obj;

- Prototype vs prototype : This confuses many beginners.

__proto__
Exists on objects
Refers to actual prototype

Example:
obj.__proto__

prototype
Exists on constructor functions
Used when creating objects with new

Example:
Person.prototype

Relationship : 
p1.__proto__ === Person.prototype

- Adding Methods Using Prototype :

function Car(brand) {
  this.brand = brand;
}

Car.prototype.drive = function () {
  console.log(this.brand + " is driving");
};

const c1 = new Car("BMW");
c1.drive();

- Inheritance with Prototypes :

const person = {
  greet() {
    console.log("Hello");
  }
};

const student = {
  study() {
    console.log("Studying");
  }
};

Object.setPrototypeOf(student, person);
student.greet();
student.study();

- ES6 Classes and Prototypes :
Classes are just syntactic sugar over prototypes.

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi " + this.name);
  }
}

const p1 = new Person("Rahul");

Internally: Person.prototype.sayHi , stores the method.

- Checking Properties :

hasOwnProperty() : Checks whether property belongs directly to object.

const animal = {
  eats: true
};

const dog = {
  barks: true
};

Object.setPrototypeOf(dog, animal);
console.log(dog.hasOwnProperty("barks")); // true
console.log(dog.hasOwnProperty("eats"));  // false

- Prototype Chain Lookup :

const grandParent = {
  money: true
};

const parent = {};
const child = {};

Object.setPrototypeOf(parent, grandParent);
Object.setPrototypeOf(child, parent);
console.log(child.money);

child
↓
parent
↓
grandParent
↓
Object.prototype
↓
null

- Object.create() : Creates object with specific prototype.

const animal = {
  eats: true
};

const dog = Object.create(animal);
console.log(dog.eats);

Here : dog → animal

           Object.prototype
                  ↑
               animal
                  ↑
                 dog

| `__proto__`                | `prototype`              |
| -------------------------- | ------------------------ |
| Exists on objects          | Exists on functions      |
| Points to actual prototype | Used for inheritance     |
| Internal link              | Template for new objects |

* `Classes` : Classes in JavaScript are a blueprint for creating objects

1. What is a Class?

A class is a template for creating objects.

Think of it like:
Class = blueprint
Object = real instance created from blueprint

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const car1 = new Car("Toyota");
console.log(car1.brand);

- Constructor : The constructor is a special method that runs automatically when an object is created.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new User("Rahul", 25);
console.log(u1);

- Class Methods : Methods are functions inside a class.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const p1 = new Person("Rahul");
p1.greet();  // Hello Rahul

- Class vs Object :

| Class             | Object     |
| ----------------- | ---------- |
| Blueprint         | Instance   |
| Defines structure | Holds data |
| Not real data     | Real data  |

- this Keyword in Classes : this refers to the current object instance.

class User {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(this.name);
  }
}
const u = new User("Rahul");
u.show();  // Rahul

Methods are Shared (Important) :
  Methods are NOT duplicated in every object.
  They are stored in prototype.

class Test {
  hello() {
    console.log("Hi");
  }
}

const a = new Test();
const b = new Test();
// Both share the same method internally.

Static Methods : Static methods belong to the class itself, not objects.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3));  // 8

Wrong Usage :
const obj = new MathUtils();
obj.add(); // ❌ Error

Class Inheritance : One class can inherit another class using extends.

class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const d = new Dog();
d.eat();
d.bark();

Eating...
Woof

super Keyword : Used to call parent class constructor or methods.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

Why super() is needed?
Because child class must initialize parent first.

- Getters and Setters in Classes : Used to control access to properties.

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("Rahul");
console.log(u.name);

- Class vs Constructor Function :

Before ES6 classes:

function User(name) {
  this.name = name;
}

With class:

class User {
  constructor(name) {
    this.name = name;
  }
}

👉 Both are internally the same (prototype-based)
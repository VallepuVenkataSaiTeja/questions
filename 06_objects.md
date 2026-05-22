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
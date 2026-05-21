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

* `Object Destructuring` :
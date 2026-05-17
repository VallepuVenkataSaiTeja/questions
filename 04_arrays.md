* `Arrays` : An array is a special object used to store multiple values in a single variable.

- Arrays are:
    ordered
    zero-indexed
    mutable

* `Creating Arrays ` :

1. `Array Literal` (Most Common) :

let fruits = ["Apple", "Banana", "Mango"];

2. Using `new Array()` :

let numbers = new Array(1, 2, 3);

`Array Structure` : 👉 Index starts from 0

["Apple", "Banana", "Mango"]
    0         1         2

* `Accessing Array Elements ` :

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

* `Updating Array Elements ` :

let fruits = ["Apple", "Banana"];
fruits[1] = "Orange";
console.log(fruits);

* `Array Length` :

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // 3

- Arrays Can Store Mixed Types : let data = ["Rahul", 21, true, null];

* `Checking Arrays ` : Array.isArray([1,2,3]); // true

* `Important Array Methods` :

1. `Adding` Elements :

- `push()` : Adds element at end.

let arr = [1, 2];
arr.push(3);
console.log(arr);   // [ 1, 2, 3 ]

- `unshift()` : Adds element at beginning.

let arr = [2, 3];
arr.unshift(1);
console.log(arr);   // [ 1, 2, 3 ]

2. `Removing Elements` : 

- `pop()` : Removes last element.

let arr = [1, 2, 3];
arr.pop();
console.log(arr);   // [ 1, 2 ]

- `shift()` : Removes first element.

let arr = [1, 2, 3];
arr.shift();
console.log(arr);   // [ 2, 3 ]

3. `Searching Methods` :

- `includes()` : Checks if value exists.

let arr = [1, 2, 3];
console.log(arr.includes(2)); // true

- `indexOf()` : Returns first matching index.

let arr = [10, 20, 30];
console.log(arr.indexOf(20));   // 1

- `lastIndexOf()` : Returns last matching index.

let arr = [1, 2, 1];
console.log(arr.lastIndexOf(1));   // 2

4. `Extracting / Modifying Arrays` :

- `slice()` : Returns part of array. ⚠️ Does NOT modify original array.

let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3));   // [ 2, 3 ]

- `splice()` : Add/remove elements.
- array.splice(start, deleteCount, item1, item2)
    start → index to begin
    deleteCount → number of elements to remove
    item1, item2... → elements to add

let arr = [1, 2, 4];
arr.splice(2, 0, 3);
console.log(arr);   // [ 1, 2, 3, 4 ]

5. `Joining & Converting` : 

- `join()` : Converts array to string.

let arr = ["Apple", "Banana"];
console.log(arr.join(", "));   // Apple, Banana

- `toString()` : Converts array to string.

let arr = [1, 2, 3];
console.log(arr.toString());   // 1,2,3

6. `Combining Arrays` :

- `concat()` : Merges arrays.

let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));   // [ 1, 2, 3, 4 ]

7. `Reversing & Sorting` :

- `reverse()` : Reverses array.

let arr = [1, 2, 3];
console.log(arr.reverse());   // [ 3, 2, 1 ]

- `sort()` : Sorts array. (⚠️ Default sort is string-based.)

let arr = [3, 1, 2];
console.log(arr.sort());   // [ 1, 2, 3 ]

- `Numeric Sort` :

let arr = [10, 5, 100];
arr.sort((a, b) => a - b);
console.log(arr);   // [ 5, 10, 100 ]

8. `Looping Methods` :

- `forEach()` : Runs function for each element.

let arr = [1, 2, 3];
arr.forEach(num => {
  console.log(num);
});

1
2
3

- `map()` : Creates new transformed array.

let arr = [1, 2, 3];
let result = arr.map(num => num * 2);
console.log(result);      // [ 2, 4, 6 ]

- `filter()` : Returns filtered elements.

let arr = [1, 2, 3, 4];
let even = arr.filter(num => num % 2 === 0);
console.log(even);    // [ 2, 4 ]

- `reduce()` : Reduces array to single value.

let arr = [1, 2, 3];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);   // 6

9. `Finding Elements` :

- `find()` : Returns first matching value.

let arr = [10, 20, 30];
console.log(arr.find(num => num > 15));   // 20

- `findIndex()` : Returns matching index.

let arr = [10, 20, 30];
console.log(arr.findIndex(num => num > 15));  // 1

10. `Array Destructuring` :

let arr = [10, 20, 30];
let [a, b] = arr;
console.log(a); // 10

11. `Spread Operator with Arrays` :

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);            // [ 1, 2, 3, 4 ]

* `Important Notes` :

| Concept                 | Explanation               |
| ----------------------- | ------------------------- |
| Arrays are mutable      | Original array can change |
| Arrays are objects      | `typeof []` → `"object"`  |
| Index starts at 0       | First element index = 0   |
| `slice()` vs `splice()` | One copies, one modifies  |

----------------------------------------------------------------------------------------
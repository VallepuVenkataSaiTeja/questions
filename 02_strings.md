* `Strings` : A string is a sequence of characters used to represent text.

* `Creating Strings` :

| Type                          | Example       |
| ----------------------------- | ------------- |
| Single quotes                 | `'Hello'`     |
| Double quotes                 | `"Hello"`     |
| Backticks (template literals) | `` `Hello` `` |

* `String Length` : Use .length to get total characters.

let text = "Hello";
console.log(text.length); // 5

* `Accessing Characters` : Strings use zero-based indexing.

let text = "Hello";
console.log(text[0]); // H
console.log(text[1]); // e

* `Strings are Immutable` : Strings cannot be changed directly.

let text = "Hello";
text[0] = "Y";
console.log(text); // Hello

👉 Original string does not change.

* `String Concatenation` : Combining strings together.

Using + :

let first = "Hello";
let second = "World";
console.log(first + " " + second);

Using Template Literals :

let name = "Rahul";
console.log(`Hello ${name}`);

* `Common String Methods` :

| Method          | Purpose                 |
| --------------- | ----------------------- |
| `length`        | Total characters        |
| `toUpperCase()` | Convert to uppercase    |
| `toLowerCase()` | Convert to lowercase    |
| `trim()`        | Remove spaces           |
| `slice()`       | Extract part of string  |
| `substring()`   | Extract characters      |
| `replace()`     | Replace text            |
| `split()`       | Convert string to array |
| `includes()`    | Check text exists       |
| `startsWith()`  | Check starting text     |
| `endsWith()`    | Check ending text       |

* `Escape Characters` :

| Escape | Meaning      |
| ------ | ------------ |
| `\n`   | New line     |
| `\t`   | Tab space    |
| `\"`   | Double quote |
| `\'`   | Single quote |
| `\\`   | Backslash    |


* `String Methods` :

1. `String Length Property` : Returns total number of characters.

let text = "JavaScript";
console.log(text.length); // 10

2. `Case Conversion Methods` :

- `toUpperCase()` : Converts string to uppercase.

let text = "hello";
console.log(text.toUpperCase()); // HELLO

- `toLowerCase()` : Converts string to lowercase.

let text = "HELLO";
console.log(text.toLowerCase()); // hello

3. `Removing Spaces` :

- `trim()` : Removes spaces from both sides.

let text = "   hello   ";
console.log(text.trim()); // hello

- `trimStart()` : Removes spaces from start.

let text = "   hello";
console.log(text.trimStart());  // hello

- `trimEnd()` : Removes spaces from end.

let text = "hello   ";
console.log(text.trimEnd());  // hello

4. `Extracting Parts of Strings` : 

- `slice(start, end)` : Extracts part of string.

let text = "JavaScript";
console.log(text.slice(0, 4)); // Java
console.log(text.slice(-6)); // Script     ( Negative Index )

- `substring(start, end)` : Similar to slice but does not support negative indexes.

let text = "JavaScript";
console.log(text.substring(0, 4)); // Java

- `substr(start, length)` ⚠️ Deprecated

let text = "JavaScript";
console.log(text.substr(0, 4)); // Java

5. `Replacing Text` :

`replace()` : Replaces first matching value.

let text = "Hello World";
console.log(text.replace("World", "JS"));  // Hello JS

`replaceAll()` : Replaces all matches.

let text = "apple apple apple";
console.log(text.replaceAll("apple", "mango"));  // mango mango mango

6. `Splitting Strings` :

- `split()` : Converts string into array.

let text = "apple,banana,mango";
console.log(text.split(","));   // [ 'apple', 'banana', 'mango' ]

- `Split by Characters`

let text = "Hello";
console.log(text.split(""));  // [ 'H', 'e', 'l', 'l', 'o' ]

7. `Searching Methods` :

- `includes()` : Checks if text exists.

let text = "JavaScript";
console.log(text.includes("Script")); // true

- `startsWith()` : Checks starting text.

let text = "JavaScript";
console.log(text.startsWith("Java"));  // true

- `endsWith()` : Checks ending text.

let text = "JavaScript";
console.log(text.endsWith("Script"));  // true

- `indexOf()` : Returns first index of match.

let text = "Hello World";
console.log(text.indexOf("World"));  // 6

- `lastIndexOf()` : Returns last matching index.

let text = "hello hello";
console.log(text.lastIndexOf("hello"));  // 6

8. `Character Access Methods` :

- `charAt()` : Returns character at index.

let text = "Hello";
console.log(text.charAt(1)); // e

- `Using Bracket Notation`

let text = "Hello";
console.log(text[1]); // e

9. `Repeating Strings` :

- `repeat()` : Repeats string multiple times.

let text = "Hi ";
console.log(text.repeat(3));  // Hi Hi Hi 

10. `Padding Methods` :

- `padStart()` : Adds characters at beginning.

let text = "5";
console.log(text.padStart(3, "0")); // 005

- `padEnd()` : Adds characters at end.

let text = "5";
console.log(text.padEnd(3, "0")); // 500

11. `Concatenation Methods` :

- `concat()` : Joins strings together.

let a = "Hello";
let b = "World";
console.log(a.concat(" ", b));  // Hello World

12. `Converting Values to String` :

- `toString()` : Converts value to string.

let num = 100;
console.log(num.toString());  // 100

13. `Template Literals (Modern Strings)` :

let name = "Rahul";
console.log(`Hello ${name}`);  // Hello Rahul

14. `Escape Characters` :

| Escape | Meaning      |
| ------ | ------------ |
| `\n`   | New line     |
| `\t`   | Tab          |
| `\"`   | Double quote |
| `\'`   | Single quote |
| `\\`   | Backslash    |

- `Important Notes` :

| Concept                              | Explanation                |
| ------------------------------------ | -------------------------- |
| Strings are immutable                | Methods return new strings |
| `slice()` supports negatives         | `substring()` does not     |
| `replace()` changes first match only | Use `replaceAll()` for all |
| `split()` returns array              | Very commonly used         |
| Strings are zero-indexed             | First char index = 0       |

- 🧠 `Quick Summary Table` :

| Category        | Methods                              |
| --------------- | ------------------------------------ |
| Case Conversion | `toUpperCase()`, `toLowerCase()`     |
| Space Removal   | `trim()`, `trimStart()`, `trimEnd()` |
| Extracting      | `slice()`, `substring()`             |
| Searching       | `includes()`, `indexOf()`            |
| Replacing       | `replace()`, `replaceAll()`          |
| Conversion      | `split()`, `toString()`              |
| Formatting      | `padStart()`, `padEnd()`, `repeat()` |

----------------------------------------------------------------------------------------
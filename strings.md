## ✅ Must Practice

These are the important ones. Focus only on these first.

1. Reverse a String
2. Check Palindrome
3. Count Vowels and Consonants
4. Find String Length Without `.length`
5. Count Frequency of Characters
6. Find First Non-Repeating Character
7. Check Anagram
8. Remove Duplicate Characters
9. Reverse Words in a Sentence
10. Count Occurrences of Substring
11. Find Longest Word in Sentence
12. Capitalize First Letter of Every Word
13. String Compression
14. Valid Parentheses / Balanced Brackets
15. Find Maximum Occurring Character

---

# ✅ After Completing Above

Then practice these:

16. Toggle Character Case
17. Remove Spaces from String
18. Count Number of Words
19. Remove Special Characters
20. Check Substring Presence
21. Reverse Each Word in Sentence
22. Compare Two Strings
23. Find Frequency of Each Word
24. Remove Consecutive Duplicate Characters

---

# ❌ Skip for Now

* Longest Common Prefix
* Isomorphic Strings
* String Permutations
* Pangram
* Lexicographic Problems
* String Rotation
* Convert String ↔ Integer
* Replace `%20`
* Swap Strings Without Temp Variable

---

## 1. Reverse a String :

### Using built-in methods (most common)

```js
let str = 'hello';

let res = str.split('').reverse().join('');
console.log(res);
```

### What it does step by step:

* `split('')` → converts string into array of characters: `['h','e','l','l','o']`
* `reverse()` → reverses the array: `['o','l','l','e','h']`
* `join('')` → joins back into a string: `"olleh"`

### 2. Using a loop (manual way)

```js
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // "olleh"
```

### How it works:

* Start from last character
* Keep adding characters to a new string

---

## 2. Check Palindrome :

A **palindrome** is a string that reads the same forward and backward.

Examples:

* `"madam"` → palindrome ✔️
* `"racecar"` → palindrome ✔️
* `"hello"` → not a palindrome ❌



## 1. Using reverse method (easy way)

```js
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

### How it works:

* Reverse the string
* Compare with original



## 2. Using two pointers (best for interviews)

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```

### How it works:

* Compare first and last characters
* Move inward step by step
* If any mismatch → not a palindrome

---

## 3. Count Vowels and Consonants :

### ✅ Logic

* Vowels: `a, e, i, o, u`
* Consonants: all alphabets except vowels
* Ignore spaces, numbers, and special characters


### ✅ Solution

```js id="vowel1"
let str = "hello world";

let vowels = "aeiou";
let vCount = 0;
let cCount = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        if (vowels.includes(ch)) {
            vCount++;
        } else {
            cCount++;
        }
    }
}

console.log("Vowels:", vCount);
console.log("Consonants:", cCount);
```

### 📌 Output for `"hello world"`

```
Vowels: 3
Consonants: 7
```

### 🔥 Key idea

* First check if character is an alphabet
* Then classify it as vowel or consonant

---
## Vowels + Consonants with frequency 

```js id="freq2"
let str = "hello world";

str = str.toLowerCase();

let vowels = "aeiou";

let vowelCount = {};
let consonantCount = {};

for (let ch of str) {

    if (ch >= 'a' && ch <= 'z') {

        if (vowels.includes(ch)) {
            vowelCount[ch] = (vowelCount[ch] || 0) + 1;
        } else {
            consonantCount[ch] = (consonantCount[ch] || 0) + 1;
        }
    }
}

console.log("Vowel Frequency:", vowelCount);
console.log("Consonant Frequency:", consonantCount);
```

### 📌 Output for `"hello world"`

```js
Vowel Frequency: { e: 1, o: 2 }
Consonant Frequency: { h: 1, l: 3, w: 1, r: 1, d: 1 }
```

---

## 4. Find String Length Without `.length`

```js id="len1"
let str = "hello world";

let count = 0;

for (let ch of str) {
    count++;
}

console.log("Length:", count);
```

## 📌 Output

```
Length: 11
```

---

## 5. Count Frequency of Characters

To **count frequency of characters in a string**, you store each character as a key and increment its count.


```js id="freq3"
let str = "hello world";

str = str.toLowerCase();

let freq = {};

for (let ch of str) {

    if (ch >= 'a' && ch <= 'z') {
        freq[ch] = (freq[ch] || 0) + 1;
    }
}

console.log(freq);
```


### 📌 Output for `"hello world"`

```js id="out1"
{ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```


### 🔥 How it works

* Loop through each character
* Check if it’s a letter (ignore spaces)
* If exists → increment count
* If not → initialize to 1


### 💡 Optional (include spaces too)

If you want to count everything including spaces:

```js id="freq4"
let str = "hello world";
let freq = {};

for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
}

console.log(freq);
```

---

## 6. Find First Non-Repeating Character

To find the **first non-repeating character** in a string, you first count frequency, then scan again to pick the first character whose count is 1.

```js id="nonrep1"
let str = "aabbcdeff";

let freq = {};

// Step 1: count frequency
for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
}

// Step 2: find first non-repeating
let result = null;

for (let ch of str) {
    if (freq[ch] === 1) {
        result = ch;
        break;
    }
}

console.log(result);
```

### 📌 Output

For `"aabbcdeff"`:

```
c
```

### 🔥 How it works

1. First loop → builds frequency map
2. Second loop → preserves original order
3. First character with count = 1 is returned

---

## 7. Check Anagram

An **anagram** means two strings have the same characters in the same frequency, just in a different order.

Examples:

* `"listen"` and `"silent"` → anagram ✔️
* `"hello"` and `"world"` → not anagram ❌


### 1. Simple way (sort method)

```js id="an1"
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');

  return str1 === str2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
```

### How it works:

* Sort both strings
* If same → anagram


### 2. Best interview approach (frequency count)

```js id="an2"
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;

  const freq = {};

  // count str1
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // subtract using str2
  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("apple", "pale"));    // false
```

### Key idea:

Two strings are anagrams if:

* Same characters
* Same frequency
* Same length

---

## 8. Remove Duplicate Characters 

### Using Set (simplest way)

```
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

console.log(removeDuplicates("banana")); // "ban"
```
### Solution (Simple) 

```
let str = "programming";

let result = "";

for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log(result);
```

### Better Approach (Using frequency map idea)

```
let str = "programming";

let seen = {};
let result = "";

for (let ch of str) {
    if (!seen[ch]) {
        seen[ch] = true;
        result += ch;
    }
}

console.log(result);
```

---

## 9. Reverse Words in a Sentence

### Simple way (split → reverse → join)

```
let str = "hello world from js";

let result = str.split(' ').reverse().join(' ');

console.log(result);
```

### Alternative (manual loop)

```
let str = "hello world from js";
let words = str.split(' ');
let result = "";

for (let i = words.length - 1; i >= 0; i--) {
    result += words[i] + " ";
}

console.log(result.trim());
```

### Manual Approach

```
let str = "hello world from js";

let words = [];
let word = "";

// Step 1: manually extract words
for (let i = 0; i < str.length; i++) {

    if (str[i] !== " ") {
        word += str[i];
    } else {
        words.push(word);
        word = "";
    }
}

// push last word
words.push(word);

// Step 2: build reversed sentence
let result = "";

for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];

    if (i !== 0) {
        result += " ";
    }
}

console.log(result);
```

---

## 10. Count Occurrences of Substring

### With Overlapping 

```
let str = "aaaaaa";
let sub = "aa";

let count = 0;

for (let i = 0; i <= str.length - sub.length; ) {

    let found = true;

    // compare substring manually
    for (let j = 0; j < sub.length; j++) {

        if (str[i + j] !== sub[j]) {
            found = false;
            break;
        }
    }

    if (found) {
        count++;

        // skip matched substring
        i += sub.length;
    } else {
        i++;
    }
}

console.log("Occurrences:", count);
```

### Without Overlapping

```
let str = "aaaaaa";
let sub = "aa";

let count = 0;

for (let i = 0; i <= str.length - sub.length; ) {

    let found = true;

    // compare substring manually
    for (let j = 0; j < sub.length; j++) {

        if (str[i + j] !== sub[j]) {
            found = false;
            break;
        }
    }

    if (found) {
        count++;

        // skip matched substring
        i += sub.length;
    } else {
        i++;
    }
}

console.log("Occurrences:", count);
```



### 🔥 Difference

### With overlapping:

`"aaaaaa"` + `"aa"`
Matches:

```id="ov1"
aa
 aa
  aa
   aa
    aa
```

Count = **5**


### Without overlapping:

```id="nov1"
aa aa aa
```

Count = **3**

---

## 11. Find Longest Word in Sentence

```
let str = "JavaScript is very powerful language";

let word = "";
let longest = "";

// traverse string
for (let i = 0; i <= str.length; i++) {

    // if not space and not end of string
    if (str[i] !== " " && str[i] !== undefined) {
        word += str[i];
    } else {

        // compare lengths manually
        if (word.length > longest.length) {
            longest = word;
        }

        word = "";
    }
}

console.log("Longest Word:", longest);
```

### 📌 Output

```
Longest Word: JavaScript
```
---

## 12. Capitalize First Letter of Every Word

### Using split() + map() (most common)

```
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));
// "Hello World"
```

### Without Built-in Methods

```
let str = "hello world from javascript";

let result = "";
let capitalize = true;

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    // check if first character of word
    if (capitalize && ch >= 'a' && ch <= 'z') {

        // convert to uppercase manually
        result += String.fromCharCode(ch.charCodeAt(0) - 32);

        capitalize = false;

    } else {

        result += ch;
    }

    // next character after space should capitalize
    if (ch === " ") {
        capitalize = true;
    }
}

console.log(result);

```
---

## 13. String Compression

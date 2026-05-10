 1. Find Largest Element in Array
 ---------------------------------

let arr = [10, 5, 8, 25, 3];
let max = Math.max(...arr);
console.log(max);


let arr = [10, 5, 8, 25, 3];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

----------------------------------------------------------------------------------------

2. Find Smallest Element in Array
----------------------------------

let arr = [10, 5, 8, 25, 3];
let min = Math.min(...arr);
console.log(min);


let arr = [10, 5, 8, 25, 3];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);

----------------------------------------------------------------------------------------

3. Find Second Largest Element
-------------------------------

let arr = [10, 5, 8, 25, 3];
arr.sort((a, b) => b - a);
console.log(arr[1]);


let arr = [10, 5, 8, 25, 3];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}
console.log(secondLargest);

----------------------------------------------------------------------------------------

4. Reverse an Array
--------------------

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);



let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);



let arr = [1, 2, 3, 4, 5];

let start = 0;
let end = arr.length - 1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
}

console.log(arr);

----------------------------------------------------------------------------------------

5. Check if Array is Sorted
----------------------------


let arr = [1, 2, 3, 4, 5];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}
console.log(isSorted);

----------------------------------------------------------------------------------------

6. Find Sum of All Elements
----------------------------


let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



let arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

----------------------------------------------------------------------------------------

7. Find Average of Array Elements
----------------------------------


let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
let average = sum / arr.length;
console.log(average);



let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum / arr.length;
console.log(average);

----------------------------------------------------------------------------------------

8. Find Duplicate Elements
---------------------------


let arr = [1, 2, 3, 2, 4, 1, 5];

let duplicates = [];

for (let i = 0; i < arr.length; i++) {

    let isDuplicate = false;

    // check if already added
    for (let k = 0; k < duplicates.length; k++) {
        if (duplicates[k] === arr[i]) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            duplicates.push(arr[i]);
            break;
        }
    }
}
console.log(duplicates);



let arr = [1, 2, 3, 2, 4, 1, 5];

let freq = {};
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (freq[num]) {
        freq[num]++;
    } else {
        freq[num] = 1;
    }
}

for (let key in freq) {
    if (freq[key] > 1) {
        duplicates.push(Number(key));
    }
}
console.log(duplicates);



let arr = [1, 2, 3, 2, 4, 1, 5];

let seen = new Set();
let duplicates = new Set();

for (let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    } else {
        seen.add(num);
    }
}

console.log([...duplicates]);


----------------------------------------------------------------------------------------

9. Remove Duplicate Elements
-----------------------------


let arr = [1, 2, 3, 2, 4, 1, 5];
let unique = [...new Set(arr)];
console.log(unique);



let arr = [1, 2, 3, 2, 4, 1, 5];

let unique = [];

for (let i = 0; i < arr.length; i++) {

    let exists = false;

    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        unique.push(arr[i]);
    }
}
console.log(unique);

----------------------------------------------------------------------------------------

10. Find Frequency of Elements
-------------------------------
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


let arr = [10, 5, 20, 8, 3, 25];

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Maximum:", max);
console.log("Minimum:", min);



let arr = [10, 5, 20, 8, 3, 25];

let max = arr[0];
let min = arr[0];

// Start loop from index 1
for (let i = 1; i < arr.length; i++) {

    // Check for maximum
    if (arr[i] > max) {
        max = arr[i];
    }

    // Check for minimum
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Maximum:", max);
console.log("Minimum:", min);

----------------------------------------------------------------------------------------

12. Sort an Array (Ascending / Descending)
-------------------------------------------


let arr = [5, 2, 8, 1, 9];

arr.sort(function(a, b) {
    return a - b;
});
console.log("Ascending Order:", arr);


let arr = [5, 2, 8, 1, 9];

arr.sort(function(a, b) {
    return b - a;
});
console.log("Descending Order:", arr);



// (Bubble Sort)

let arr = [5, 2, 8, 1, 9];

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

        // Swap if current element is greater
        if (arr[j] > arr[j + 1]) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Ascending Order:", arr);




let arr = [5, 2, 8, 1, 9];

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

        // Swap if left value is smaller
        if (arr[j] < arr[j + 1]) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Descending Order:", arr);

----------------------------------------------------------------------------------------

13. Merge Two Arrays
---------------------


// concat()

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = arr1.concat(arr2);
console.log(mergedArray);


// Spread Operator (...)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);


// Without Built-in Methods

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [];

// Add elements of first array
for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
}

// Add elements of second array
for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
}

console.log(mergedArray);

----------------------------------------------------------------------------------------

14. Find Missing Number in Array
---------------------------------


let arr = [1, 2, 3, 5];

let n = 5;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = arr.reduce((sum, num) => sum + num, 0);
let missingNumber = expectedSum - actualSum;
console.log("Missing Number:", missingNumber);



let arr = [1, 2, 3, 5];

let n = 5;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

// Find actual sum
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}

let missingNumber = expectedSum - actualSum;

console.log("Missing Number:", missingNumber);

----------------------------------------------------------------------------------------

15. Find Even and Odd Numbers
------------------------------

// filter()

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = arr.filter(num => num % 2 === 0);

let oddNumbers = arr.filter(num => num % 2 !== 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);



let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < arr.length; i++) {

    // Check even
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }

    // Check odd
    else {
        oddNumbers.push(arr[i]);
    }
}

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

----------------------------------------------------------------------------------------

16. Count Even and Odd Numbers
-------------------------------


let arr = [1, 2, 3, 4, 5, 6];

let evenCount = arr.filter(num => num % 2 === 0).length;

let oddCount = arr.filter(num => num % 2 !== 0).length;

console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);



let arr = [1, 2, 3, 4, 5, 6];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {

    // Check even
    if (arr[i] % 2 === 0) {
        evenCount++;
    }

    // Otherwise odd
    else {
        oddCount++;
    }
}
console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);

----------------------------------------------------------------------------------------

17. Find Common Elements Between Two Arrays
--------------------------------------------
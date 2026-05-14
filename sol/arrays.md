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


arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]
// [3, 4]


let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let common = [];

for (let i = 0; i < arr1.length; i++) {

    if (arr2.includes(arr1[i])) {
        common.push(arr1[i]);
    }
}

console.log("Common Elements:", common);



let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let common = [];

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

        if (arr1[i] === arr2[j]) {

            common.push(arr1[i]);
        }
    }
}

console.log("Common Elements:", common);

----------------------------------------------------------------------------------------

18. Rotate Array Left / Right
------------------------------

[1, 2, 3, 4, 5]
Left rotate by 2:
[3, 4, 5, 1, 2]

// LEFT ROTATE

function leftRotate(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}
console.log(leftRotate([1,2,3,4,5], 2));      // [3,4,5,1,2]



function leftRotate(arr, k) {
    let n = arr.length;

    k = k % n;

    for (let i = 0; i < k; i++) {

        let first = arr[0];

        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[n - 1] = first;
    }

    return arr;
}
console.log(leftRotate([1,2,3,4,5], 2));


// RIGHT ROTATE

function rightRotate(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
console.log(rightRotate([1,2,3,4,5], 2));     // [4,5,1,2,3]



function rightRotate(arr, k) {

    let n = arr.length;

    k = k % n;

    for (let i = 0; i < k; i++) {

        let last = arr[n - 1];

        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = last;
    }

    return arr;
}
console.log(rightRotate([1,2,3,4,5], 2));

----------------------------------------------------------------------------------------

19. Find Intersection of Arrays
--------------------------------

arr1 = [1, 2, 2, 3, 4]
arr2 = [2, 2, 4, 6]
// [2, 4]


function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1,2,2,3,4], [2,2,4,6]));



function intersection(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                // avoid duplicates in result
                if (!result.includes(arr1[i])) {
                    result.push(arr1[i]);
                }
                break;
            }
        }
    }

    return result;
}
console.log(intersection([1,2,2,3,4], [2,2,4,6]));

----------------------------------------------------------------------------------------

20. Find Union of Arrays
-------------------------

arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(union([1,2,3,4], [3,4,5,6]));         // [1, 2, 3, 4, 5, 6]



function union(arr1, arr2) {
    let result = [];

    // add arr1 elements
    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    // add arr2 elements
    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}

console.log(union([1,2,3,4], [3,4,5,6]));

----------------------------------------------------------------------------------------

21. Find Pair With Given Sum
-----------------------------

arr = [2, 7, 11, 15]
target = 9 
- [2, 7]


function findPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}
console.log(findPair([2,7,11,15], 9));

----------------------------------------------------------------------------------------

22. Find Largest Difference
----------------------------

Find the maximum difference between two elements in an array
(i.e., arr[j] - arr[i] where j >i)

[2, 3, 10, 6, 4, 8, 1] -> 8



function largestDifference(arr) {
    let maxDiff = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            let diff = arr[j] - arr[i];

            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }

    return maxDiff;
}
console.log(largestDifference([2,3,10,6,4,8,1]));

----------------------------------------------------------------------------------------

23. Move All Zeros to End
--------------------------

arr = [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]


function moveZeros(arr) {
    let nonZero = arr.filter(x => x !== 0);
    let zeroCount = arr.length - nonZero.length;

    return nonZero.concat(new Array(zeroCount).fill(0));
}

console.log(moveZeros([0,1,0,3,12]));




function moveZeros(arr) {
    let result = [];

    // first add non-zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        }
    }

    // then add zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result.push(0);
        }
    }

    return result;
}

console.log(moveZeros([0,1,0,3,12]));

----------------------------------------------------------------------------------------

24. Remove Falsy Values
------------------------

arr = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN]
[1, 2, 3, "hello"]


function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy([0,1,false,2,"",3,null,"hello",undefined,NaN]));



function removeFalsy(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeFalsy([0,1,false,2,"",3,null,"hello",undefined,NaN]));

----------------------------------------------------------------------------------------

25. Find Second Smallest Element
---------------------------------


function secondSmallest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => a - b);

    return unique[1];
}
console.log(secondSmallest([5,1,2,1,3]));



function secondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}
console.log(secondSmallest([5,1,2,1,3]));

----------------------------------------------------------------------------------------

26. Find Unique Elements
-------------------------

arr = [1, 2, 2, 3, 4, 4, 5] -> [1, 3, 5]


function findUnique(arr) {
    return arr.filter((val) => {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
console.log(findUnique([1,2,2,3,4,4,5]));



function findUnique(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count === 1) {
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(findUnique([1,2,2,3,4,4,5]));

----------------------------------------------------------------------------------------
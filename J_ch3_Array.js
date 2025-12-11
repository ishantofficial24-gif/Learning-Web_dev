//======================================== Arrays in JavaScript ===============================================
// In JavaScript, arrays are a type of object.
// They are dynamic, meaning their size can change, and they can store elements of different datatypes.

let arr = [12, 1, 45, "Ishant", 90, true, 343.33];

// NOTE: In JavaScript, you can print the entire array directly using console.log() without using a loop.


//----------------------------------------- Push ---------------------------------------------------------------
// Adds an element to the end of the array.

let numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.push(5);
console.log(numbers);   // [1, 2, 3, 4, 5]


//----------------------------------------- Pop ---------------------------------------------------------------
// Removes the last element from the array.

numbers.pop();
console.log(numbers);   // [1, 2, 3, 4]


//----------------------------------------- Unshift -----------------------------------------------------------
// Adds an element at the beginning of the array.

numbers.unshift(0);
console.log(numbers);   // [0, 1, 2, 3, 4]


//----------------------------------------- Shift -------------------------------------------------------------
// Removes the first element from the array.

numbers.shift();
console.log(numbers);   // [1, 2, 3, 4]


// NOTE: An array declared with 'let' can be reassigned to a completely different datatype.
numbers = 24;
console.log(numbers);   // 24


//----------------------------------------- Using const --------------------------------------------------------
// Arrays declared with const cannot be reassigned to another datatype.
// However, their contents can still be modified (push, pop, etc. work normally).

const brr = [1, 3, 4, 5, 6];
// brr = 23;   // Error: Assignment to constant variable

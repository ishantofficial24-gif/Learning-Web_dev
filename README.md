# Learning-Web_dev
================================================================ HTML SECTION ==================================================================
This repository is about learning HTML , CSS and JAVASCRIPT 
In this repo we will learn HTML , CSS and JAVASCRIPT from basis to advanced in very easy and good manner.

📚 Learning Web Development — HTML Basics

Welcome to my Web Development Learning Repository!
This project contains my practice files as I learn HTML, and later CSS & JavaScript.

📖 Chapter 1 — Introduction to HTML

This chapter explains the basic structure of a webpage and introduces the most essential HTML tags.

What’s covered in this chapter

Meaning of <!DOCTYPE html>

Basic structure

<html>

<head>

<title>

<body>

Headings (h1 to h6)

Closed tags (like <p>)

Self-closing tags (like <br>)

Horizontal rule (<hr>)

This chapter helps build a strong foundation of how an HTML document is created.

📖 Chapter 2 — Commonly Used HTML Tags

This chapter focuses on useful formatting tags.

Topics covered

Importance of the <pre> tag for preserving spaces and formatting

Common inline tags:

No.	Tag Name	Syntax	Usage
1️⃣	Line Break	<br>	Inserts a line break.
2️⃣	Bold	<b>text</b>	Makes text bold (visual).
3️⃣	Strong	<strong>text</strong>	Important text (semantic bold).
4️⃣	Italic	<i>text</i>	Makes text italic (visual style).
5️⃣	Emphasis	<em>text</em>	Emphasizes text (semantic italic).
6️⃣	Underline	<u>text</u>	Underlines text.
7️⃣	Inserted Text	<ins>text</ins>	Shows inserted/underlined text.
8️⃣	Big Text	<big>text</big>	Slightly increases text size (deprecated).
9️⃣	Small Text	<small>text</small>	Reduces text size.
🔟	Superscript	<sup>text</sup>	Text above baseline (e.g., X<sup>2</sup>).
1️⃣1️⃣	Subscript	<sub>text</sub>	Text below baseline (e.g., H<sub>2</sub>O).
1️⃣2️⃣	Highlight	<mark>text</mark>	Highlights the text.


=================================================== JAVASCRIPT SECTION===================================================
📘 JavaScript Overview

JavaScript (JS) is a high-level, dynamic, and widely used programming language that makes web pages interactive. It works together with HTML and CSS and runs directly inside the browser as well as on servers using Node.js.

📖:::: Chapter 1 — Basics ::::

In this chapter, we learn the fundamental concepts of JavaScript:

* Console Output
    console.log ();
The console is used to display messages, values, and results for debugging and learning.
It helps us understand how our code works internally.

* Variables (var, let, const)
Variables are used to store values.
let and const are modern and preferred.
var is older and allows redeclaration.
const is used for values that must not change.

* Datatypes
JavaScript supports multiple datatypes:
Number → integers and decimals
String → text written in quotes
Boolean → true or false
Null → represents an empty or unknown value
Undefined → a variable declared but not assigned
JavaScript does not have a separate character datatype; single characters are stored as strings.

* Reassigning Values
JavaScript allows changing the value and even the datatype of a variable.
However, variables declared with let cannot be redeclared.
Variables declared with var can be redeclared.




📖:::: Chapter 2 — Operators & Conditionals::::

This chapter explains how JavaScript performs calculations, compares values, and makes decisions using conditional statements.
➤ Arithmetic Operators
JavaScript supports the basic mathematical operators used for calculations:
Addition, subtraction, multiplication, division
Modulus (remainder)
JavaScript always returns decimal results in division when needed because both integers and floats belong to the same datatype: number.

➤ Exponential Operator
JavaScript uses the exponential operator to calculate powers (a raised to the power b).
This provides a simple way to perform exponential calculations.
➤ Comparison Operators
Comparison operators work differently in JavaScript:
✔ Loose Equality (==)
Compares values only
Ignores datatype
Example: the number 23 and the string "23" are considered equal

✔ Strict Equality (===)
Compares both value and datatype
More predictable and recommended for most comparisons
The number 23 and the string "23" are not equal here

➤ Conditionals

JavaScript supports conditional statements that allow decision-making in the code:
if
else
else if

They execute different blocks depending on whether conditions are true or false.
While writing conditions, be careful when choosing between == and === to avoid unexpected results.
Remember some statement that are always false  --> 0,false,null,NaN,undefined.


📖:::: Chapter 3 — ARRAYS::::

This chapter introduces arrays in JavaScript, how they work, and the basic operations used to modify them.

🔹 What Are Arrays?
Arrays in JavaScript are a special type of object.
They can store multiple values of different datatypes (numbers, strings, booleans, etc.).
JavaScript arrays are dynamic, meaning their size can grow or shrink.
Entire arrays can be printed directly using console.log().

🔹 Common Array Operations
-Push
Adds a new element to the end of an array.

-Pop
Removes the last element from an array.

-Unshift
Inserts an element at the beginning of the array.

-Shift
Removes the first element of an array.

🔹 Reassigning Arrays
Arrays declared with let can be reassigned to another datatype (e.g., number, string), even though it's unusual.

🔹 Using const With Arrays
Arrays declared with const cannot be reassigned,
but their contents can still be changed using operations like push, pop, shift, etc.

📖 ::::Chapter 4 — Loops in JavaScript::::

This chapter explains different types of loops used in JavaScript and how they help in repeating tasks efficiently.

🔹 Standard Loops
JavaScript supports the usual loops found in most programming languages:
while
for
do–while
These loops work the same as in other languages and are used when you need full control over conditions and iterations.

🔹 for…of Loop
The for…of loop is used to iterate over the values of an array.
It creates a copy of each element, so modifying the loop variable does not change the original array.
Useful for reading array values one by one.

🔹 forEach Loop
The forEach() method allows more detailed iteration:
It provides element, index, and even the entire array during each iteration.
Commonly used when processing each element without needing to break or return.
It does not create a copy — but you typically should not modify the array inside it.


📖 :::Chapter 5 — Strings in JavaScript:::

Strings in JavaScript work very similarly to Java.
A string is a sequence of characters, and each character can be accessed using its index (like an array).

🔹 Accessing Characters
You can access any character of a string using its index, starting from 0 as in c++.

🔹 Length of a String
The length property returns the total number of characters in the string, including spaces.

🔹 Uppercase & Lowercase
toUpperCase() → converts the entire string to uppercase
toLowerCase() → converts the entire string to lowercase
These methods do not modify the original string, they return a new one.

🔹 Trim
trim() removes all leading and trailing spaces from a string.
(Spaces in the middle are not affected.)

🔹 Finding Index of Characters
indexOf() → returns the first occurrence of a character
lastIndexOf() → returns the last occurrence of a character
If the character is not found, both return -1.

🔹 Character at a Given Index
charAt() returns the character at the specified index.

🔹 Slice (Substring)
slice(start)
Returns the substring from the given index to the end.
slice(start, end)
Returns characters from index start up to end - 1.

🔹 Split
split(separator) breaks a string into an array based on the separator provided.
For example, splitting on a space will divide the string into words.


📖 :::Chapter 6 — Template Literals in JavaScript:::

Template literals provide a modern and flexible way to create and print strings in JavaScript. They make string formatting easier and more readable.

🔹 Traditional String Printing
Before template literals, strings were printed using:
Comma-separated values
String concatenation using the + operator
These methods work but become difficult to manage with complex strings.

🔹 Template Literals (Backticks)
Template literals use backticks `` instead of quotes.
Advantages:
Allows variable interpolation using ${}
Makes strings more readable and cleaner
Widely used in modern JavaScript

🔹 Embedding Variables
Using ${} inside backticks, variables and expressions can be directly inserted into strings without concatenation.

🔹 Handling Quotes in Strings
Template literals make it easy to include:
Double quotes (")
Single quotes (')
Backticks (`)
This reduces the need for escape characters (\) and improves readability.

🔹 Why Use Template Literals?
Cleaner syntax
Less error-prone
Ideal for dynamic strings and messages


📖 :::Chapter 7 — Objects in JavaScript:::

Objects in JavaScript are used to store multiple related values together.
They work on a key–value pair system, where each key represents a property and each value represents its data.

🔹 What Is an Object?
An object is a collection of variables grouped together.
Each property has a key and an associated value.
Object values can be of any datatype (string, number, boolean, etc.).
Keys that contain spaces must be written using quotes.

🔹 Accessing Object Properties
JavaScript provides two ways to access object properties:
✔ Dot Notation
Used when the key does not contain spaces.
Simple and commonly used.

✔ Bracket Notation
Used when keys contain spaces.
Also works for keys without spaces.
More flexible than dot notation.

🔹 Iterating Over Objects — for…in Loop
The for…in loop is used to iterate over keys of an object.
Each key can be used to access its corresponding value.
Syntax must use object[key] (not object.key).
This loop is especially useful when working with all properties of an object.


📖 :::Chapter 9 — Functions & Math Methods in JavaScript:::

This chapter explains how functions work in JavaScript and introduces commonly used built-in mathematical operations.

🔹 Functions in JavaScript
Functions work similarly to other programming languages.
JavaScript does not require datatype declarations for parameters.
There is no need to specify a return type.
Functions are created using the function keyword and can return values.
Functions help in writing reusable and organized code.

🔹 Built-in Math Object
JavaScript provides a powerful Math object that contains many useful mathematical methods.

🔹 Absolute Value
Returns the absolute (positive) value of a number.
Useful for removing negative signs.

🔹 Maximum & Minimum
Finds the largest value among given numbers.
Finds the smallest value among given numbers.
Unlike some languages, JavaScript allows multiple values in these methods.

🔹 Power, Square Root & Cube Root
Calculates power (exponentiation).
Finds square roots and cube roots of numbers.

🔹 Logarithmic Functions
Natural logarithm (base e)
Base 10 logarithm
Base 2 logarithm
These are useful in mathematical and scientific calculations.

🔹 Floor & Ceiling
Floor → rounds down to the nearest integer.
Ceiling → rounds up to the nearest integer.

🔹 Random Numbers
Generates a random number between 0 and 1.
Can be modified to generate random integers within a specific range.
Random numbers are commonly used in games, simulations, and applications.


📖 :::Chapter 10 — Function Writing Styles & Callback Functions:::

This chapter explains the different ways to write functions in JavaScript and introduces the concept of callback functions.

🔹 Function Declarations (Simple Function)
Written using the function keyword.
These functions are hoisted, meaning they can be called before their declaration in the code.
Commonly used for simple and readable logic.

🔹 Function Expressions
Functions can be stored inside variables.
Usually declared using const.
These functions are not hoisted, so they must be defined before use.
Useful when functions need to be treated as values.

🔹 Arrow Functions
A modern and concise way to write functions.
Uses the => syntax.
Improves readability and is widely used in modern JavaScript.

✔ Single-line Arrow Functions
Can be written without curly braces.
The returned value is implicit.

✔ No-Argument Arrow Functions
Parentheses are used even when no parameters are required.

🔹 Callback Functions
A callback function is a function passed as an argument to another function.
It allows one function to be executed inside another function.
Callbacks are fundamental to asynchronous programming in JavaScript.
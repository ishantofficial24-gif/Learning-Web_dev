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

:::: Chapter 1 — Basics ::::

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
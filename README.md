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



📖 :::HTML Chapter 3 — Hyperlinks:::
This chapter explains hyperlinks, which are used to navigate from one webpage to another or to open files and external websites.

🔹 What is a Hyperlink?
A hyperlink is a clickable element that takes the user to another webpage, website, or file.
Hyperlinks are created using the <a> (anchor) tag.

🔹 Important Attributes of <a> Tag
✔ href
Stands for Hyperlink Reference.
Specifies the destination URL or file path.

✔ target
Controls where the link opens.
_blank opens the link in a new tab or window.

✔ title
Displays a tooltip message when the mouse hovers over the link.
Helps users understand the purpose of the link.

🔹 Key Points
Hyperlinks improve navigation and user experience.
Attributes make links more functional and user-friendly.
Understanding link syntax is essential for building websites.


📖 :::HTML Chapter 4 — Images, GIFs & Audio:::

This chapter explains how to add images, GIFs, and audio files to a webpage using HTML.

🔹 Images & GIFs
Images and GIFs are added using the <img> tag.
Important Attributes:
src → Specifies the path or URL of the image or GIF
alt → Displays alternate text if the image fails to load
height / width → Controls the size of the image (can also be done using CSS)

🔹 Image as a Hyperlink
Images can be made clickable by wrapping the <img> tag inside an <a> tag.
Clicking the image redirects the user to another page or website.
This technique is commonly used for banners, profile images, and buttons.

🔹 Audio in HTML
Audio files are added using the <audio> tag.
Important Attributes:
src → Specifies the audio file location
controls → Displays play, pause, and volume controls

Without controls, the audio will not be visible to the user.
🔹 Additional Audio Features
autoplay → Plays audio automatically when the page loads
muted → Starts the audio in muted mode
loop → Repeats the audio continuously


📖 :::HTML Chapter 5 — Video:::

This chapter explains how to add videos to a webpage using HTML.

🔹 Adding Video in HTML
Videos are added using the <video> tag.
The <video> element works similarly to image and audio elements.

🔹 Important Video Attributes
src → Specifies the path or URL of the video file
controls → Displays play, pause, volume, and other controls
width / height → Controls the size of the video
Using controls is recommended so users can easily interact with the video.

🔹 Additional Video Features
autoplay → Automatically plays the video when the page loads
muted → Starts the video in muted mode
loop → Repeats the video continuously

🔹 Video as a Hyperlink
A video can be made clickable by wrapping the <video> tag inside an <a> tag.
Clicking the video redirects the user to another webpage or website.

🔹 Using the <source> Tag
The <source> tag can be used inside <video> to specify video files.
This approach allows better format support and flexibility.

🔹 Key Points
Videos improve user engagement.
Controls enhance usability.
Videos can be styled further using CSS.


📖 :::HTML Chapter 6 — Favicon:::

This chapter explains how to add a favicon (website icon) to a webpage.

🔹 What is a Favicon?
A favicon is a small icon that appears in the browser tab, bookmarks, and history.
It helps in branding and makes a website easily recognizable.

🔹 Adding a Favicon
Favicons are added inside the <head> section using the <link> tag.

🔹 Important Attributes
✔ rel="icon"

Specifies that the linked file is the website’s icon.
✔ type

Defines the image format (commonly image/png or image/x-icon).
✔ href

Specifies the path or location of the favicon file.

🔹 Key Points
Favicons improve user experience and site identity.
The image should be small and clear.
The favicon loads automatically when the page is opened.


📖 HTML Chapter 7 — Div & Span

This chapter explains the difference between <div> and <span>, two commonly used container elements in HTML.

🔹 span — Inline Container

span is an inline element.
It occupies only the space required by its content.
Commonly used for styling specific words or small parts of text.
Does not start on a new line.

🔹 div — Block Container
div is a block-level element.
It occupies the entire width available.
Always starts on a new line.
Used to group larger sections of content.

🔹 Key Differences
Feature          	span	           div
Type            	Inline	          Block
Space	        Content only	   Full width
New Line	          No             Yes
Usage	Small text styling	Layout & sections

🔹 Note
Basic styling was used only to visually show the difference.
Actual styling and layout control will be done using CSS.


📖 :::HTML Chapter 8 — Lists:::

This chapter explains the different types of lists in HTML and how they are used to organize content.

🔹 Types of Lists in HTML
HTML supports three types of lists, each used for different purposes.

1️⃣ Unordered List (<ul>)
The order of items does not matter.
Items are displayed using bullets.
Each item is written using the <li> tag.
Lists can be nested (a list inside another list).

2️⃣ Ordered List (<ol>)
The order of items matters.
Items are displayed in a nmbered or ordered format.
Each item uses the <li> tag.
Commonly used for steps or rankings.

3️⃣ Description List (<dl>)
Used to define terms and their descriptions.
Consists of:
<dt> → term
<dd> → description

Useful for definitions, glossaries, and explanations.
🔹 Key Points
Lists improve readability and structure.
Nested lists help organize related item.
Lists are widely used in menus and content layouts.


📖 :::HTML Chapter 9 — Tables:::

This chapter explains how to create and structure tables in HTML to display data in rows and columns.

🔹 Basic Table Structure
An HTML table is created using the <table> tag.
Common Table Tags:
tr → Table row
th → Table heading (bold and centered by default)
td → Table data (regular cells)

🔹 Creating a Table
The first row usually contains headings using <th>.
Each new row is created using <tr>.
Data inside rows is written using <td>.

🔹 Table Headings in Rows
Headings can be placed in the first row to describe each column.
This is the most commonly used table layout.

🔹 Table Headings in Columns
Headings can also be placed in the first column.
This style is useful when describing data row-wise instead of column-wise.

🔹 Styling Tables
The border attribute can be used to add borders (basic styling).
Advanced styling and layout control are done using CSS.

🔹 Key Points
Tables are useful for structured data.
Headings can be placed in rows or columns.
Proper use of table tags improves readability.


📖 :::HTML Chapter 10 — Buttons:::

This chapter explains how to create buttons in HTML and how they are used on websites.

🔹 Button Tag
Buttons are created using the 'button' tag.
Buttons are clickable elements used to perform actions.

🔹 Basic Button
A simple button displays text and can be clicked by the user.

🔹 Button as a Hyperlink
A button can be wrapped inside an 'a' tag.
This allows the button to behave like a link and redirect the user to another page or website.

🔹 Button Usage
Buttons are commonly used for:
Submitting forms
Navigating pages
Triggering actions

🔹 JavaScript Interaction
Buttons become powerful when used with JavaScript.
JavaScript can be used to:
Handle click events
Perform calculations
Change content dynamically

🔹 Key Notes
'button' is a semantic and accessible element.
Styling and advanced behavior are usually handled using CSS and JavaScript.


📖 :::Chapter 11 — HTML Forms:::

HTML Forms are used to collect user input and send data to a server for processing.

🔹 Form
A form is created using the 'form' element.
It sends user data to a server file.
Important attributes:
action → address where data is sent
method → GET or POST
enctype → how data is encoded

🔹 Label
Label describes what data the user should enter.
The for attribute connects the label to an input using its id.
Improves clarity and accessibility.

🔹 Common Input Types
text → single-line text input
password → hides typed text
email → email input with validation
tel → phone number input
date → date picker
number → numeric input with min / max
radio → select only one option
checkbox → select multiple options
file → upload files
submit → send form data
reset → clear all inputs

🔹 Select & Textarea
select + option → dropdown menu
textarea → multi-line text input (comments, feedback)

🔹 Important Attributes
required → makes input mandatory
placeholder → hint text inside input
min / max → restrict values
minlength / maxlength → restrict text length
value → default input value
name → key sent to server
accept → allowed file types


📖:::Chapter 12 — Header and Footer:::

HTML Header and Footer elements help structure a webpage in a clean and organized way.

🔹 Header
'header' represents the top section of a webpage.
Used for:
Website title
Navigation
Introductory content
Everything written inside the header stays grouped together at the top.
Styling is usually done using CSS.

🔹 Main
'main' contains the central content of the webpage.
It holds the most important information.
Optional but recommended for better structure and readability.

🔹 Footer
'footer' represents the bottom section of a webpage.
Used for:
Copyright information
Contact details
Extra links
All footer content stays together at the bottom of the page.





=================================================CSS portion ===========================================================

🎨 :::CSS Chapter 1 — Colors:::

CSS supports multiple color formats for flexibility in design.
Color names are simple but limited.
RGB and Hex are widely used for precise color control.
HSL is useful for adjusting shades, brightness, and intensity easily.
Colors can be applied to both text and backgrounds.
Proper color combinations improve readability and UI appearance.


📘 :::Chapter 2: Fonts in CSS:::
🔹 Built-in Fonts

CSS allows you to use system-available fonts directly.
You can list multiple fonts so the browser uses the first available one as a fallback.
This ensures better compatibility across different devices.

🔹 Google Fonts

Google Fonts provide modern and web-safe fonts that are not available by default.
They are imported into the stylesheet and then applied like normal fonts.
This helps in improving design consistency and readability.


📘 :::Chapter 3: Borders in CSS:::
🔹 What are Borders?

Borders in CSS are used to draw lines around elements.
They help in separating content, improving layout clarity, and enhancing visual structure.

🔹 Where Borders Apply
Borders can be applied to:
Text elements (like paragraphs)
Containers (like divs)
Any visible HTML element
They wrap around the content and padding of an element.

🔹 Border Styles
CSS provides multiple border styles to create different visual effects:
Solid → simple continuous line
Dotted / Dashed → decorative borders
Double → two parallel lines
Groove / Ridge → 3D carved or raised effects
Inset / Outset → pressed-in or raised look
Each style changes the appearance without changing the content.

🔹 Border Properties
Borders can be customized using:
Width → thickness of the border
Color → border color
Style → type of border
Radius → rounded corners
Individual sides → apply border only to top, bottom, left, or right
A shorthand property allows setting all border values at once.

🔹 Border in Box Model
In the CSS box model:
Content → inside
Padding → space around content
Border → surrounds padding
Margin → outer space
Understanding this order helps in better layout design.









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


📖 :::Chapter 8 — Functions & Math Methods in JavaScript:::

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


📖 :::Chapter 9 — Function Writing Styles & Callback Functions:::

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


📖 :::Chapter 10 — setTimeout & Callback Functions:::

This chapter explains how JavaScript handles delayed execution using the setTimeout() function and reinforces the concept of callback functions.

🔹 What is setTimeout?
setTimeout() is a built-in JavaScript function.
It executes a function after a specified delay.
The delay time is given in milliseconds.
It does not block the program; the rest of the code continues running.

🔹 Callback Function in setTimeout
The function passed to setTimeout() is a callback function.
JavaScript expects a function reference, not the result of a function call.
This is why we pass a function using an arrow function or a function expression.
Passing a function ensures the code runs after the delay, not immediately.

🔹 Inline Callback Syntax
Instead of defining a function separately, the callback can be written directly inside setTimeout().
This makes the code shorter and easier to read for small tasks.

🔹 Timers and Delays
setTimeout() can be used inside loops to create timers.
By increasing the delay step by step, actions can be executed at regular intervals.
This technique is commonly used for countdowns, animations, and delayed messages.

🔹 Key Points to Remember
Always pass a function, not a function call.
Time is measured in milliseconds.
setTimeout() is asynchronous and non-blocking.


📖 :::Chapter 11 — map() in JavaScript:::

This chapter introduces the map() method, which is used to apply the same transformation to every element of an array.

🔹 What is map()?
map() is an array method in JavaScript.
It creates a new array by applying a function to each element of the original array.
The original array remains unchanged.

🔹 How map() Works
map() takes a callback function as its argument.
The callback function runs once for every array element.
Each returned value is stored in the new array.

🔹 Ways to Use map()
Using a separate function
Using an inline function
Using a short arrow function syntax
All approaches work the same; the difference is only in readability and style.

🔹 Key Points
map() always returns a new array
Best suited for transforming data
Commonly used in functional programming


📖 :::Chapter 12 — filter() in JavaScript:::

This chapter explains the filter() method, which is used to select elements from an array based on a condition.

🔹 What is filter()?
filter() is an array method in JavaScript.
It works on a true / false condition.
Elements that satisfy the condition are included in the new array.
Elements that do not satisfy the condition are excluded.

🔹 How filter() Works
filter() takes a callback function.
The callback runs for every element in the array.
If the callback returns true, the element is kept.
If it returns false, the element is removed.

🔹 Writing filter() Functions
The condition can be written as a separate function.
It can also be written using a short arrow function.
Shorter syntax improves readability without changing behavior.

🔹 Key Points
filter() always returns a new array
The original array remains unchanged
Commonly used for selecting specific data (even numbers, valid users, etc.)
//===========================================FUNCTION================================================================
// Fuction works same as in other languages -> function making,calling all.
// difference is we dont have to write data type while making the function.
// And we dont have to write the rerturn type just have to write 'function' before its identifier.
    function factorial(n){
        let result =1;
        while(n!=0){
            result*=(n);
            n--;
        }
        return (result);
    }

    console.log (factorial(5));


//------------------------------------Builtin Mathematical operation---------------------------------------------------
// There are some builtin Mathematical operation we need to remember in javascript.

//---------------------------------------Absolute value---------------------------------------------------------------
    console.log(Math.abs(-45.43))         // prints 45.43
// This function gives the absolute value of the number , kind of work like mode||.


//------------------------------------------------Max,Min----------------------------------------------------------
    console.log(Math.max(1,2,3,4,5,6,7,8,9));                   //prints max = 9(here)
// In this function max value will be printed among all the values given in ().

    console.log(Math.min(1,2,3,4,5,6,7,8,9));                    //prints min= 1(here)
// In this function min value will be printed among all the values given in ().

//NOTE : Best thing is we can add as many as element we want , in this function , Its not possible in java,c++.


//-----------------------------------------------power/exponent----------------------------------------------------
    console.log(Math.pow(2,3));                    //prints  2^3=8
// Its prints  a^b                    a=2 and b=3 (in here)


//-------------------------------------------Square root & Cube root-------------------------------------------------
console.log(Math.sqrt(25));          // prints 5
// This function gives the square root of the given number.

console.log(Math.cbrt(27));          // prints 3
// This function gives the cube root of the given number.


//-----------------------------------------------Logarithm------------------------------------------------------------
console.log(Math.log(10));           // prints natural log (base e) of 10
// This function gives the logarithm of the number with base e.

console.log(Math.log10(100));        // prints 2
// This function gives the logarithm with base 10.

console.log(Math.log2(8));           // prints 3
// This function gives the logarithm with base 2.


//-------------------------------------------Floor & Ceiling----------------------------------------------------------
console.log(Math.floor(4.9));        // prints 4
// Floor function gives the greatest integer smaller than or equal to the number.

console.log(Math.ceil(4.1));         // prints 5
// Ceiling function gives the smallest integer greater than or equal to the number.


//-----------------------------------------------Random---------------------------------------------------------------
console.log(Math.random());          
// This function generates a random number between 0 (inclusive) and 1 (exclusive).


//--------------------------------------Important changes in random function----------------------------------------
console.log(Math.floor(Math.random() * 10));  
// This generates a random integer between 0 to 9.

console.log(Math.floor(Math.random() * 10) + 1);
// This generates a random integer between 1 to 10.

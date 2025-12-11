//                             JAVA SCRIPT
// basic
//-----------------------------------------printing-----------------------------------------------------------------
console.log ("Hello World");          //this is the line use for the printing purpose 
console.log (23);
console.log ("This is Ishant Sharma!");


//-------------------------------------var,let,const-----------------------------------------------------------------
// we use var, let , const to define/initialise the variable
// let
    let i = 1;
    let s = "Ishant";
    let c = 'Sharma';
    let f = 234.324;

// Const 
    const PI = 3.14;
    console.log (PI);
// Once a value assign to the const it can't be changed again in the whole programme . 


//--------------------------------------------------------Type for printing the variables--------------------------------------------------

    console.log (i,s,c,f);
// In the above sentence , is used to differenriate the variable , the use of the ',' is to differentiate the variable 
// and to make a whitespace between them as we can see in the output
    console.log (i+" "+s+" "+c+" "+f+" ");


//-------------------------------------------------------Datatypes in javascript ----------------------------------------------------------
// Number  -> It consist of integer and float.
    console.log (23.23,typeof(23.23));
    console.log (23,typeof(23));

// String  -> It consist the words and sentences.
    let str = "Writing something";
    console.log (str,typeof(str));

// Boolean -> It consist the true and false .
    let bool = (i==f);
    console.log (bool, typeof(bool));kjhj

// null    -> It consist nothing , If we want to initialse the variable and not want to asign any value to it then we asign with null
    let nu = null;
    console.log (nu,typeof(nu));

// character -> There is no character in javascript 
//If you write anything in single quetes '' then it is counted in string , means string can be initialise in single quetes too!
    str = 'I am steve!';
    console.log (str,typeof(str));


//---------------------------------------------------------Redefining/revaluing-----------------------------------------------------------
//NOTE: In javascript we can change the datatype of the  variable
    let a = 23;
    console.log (a,typeof(a));
    a = "Minecraft";
    console.log (a,typeof(a));
// IMPORTANT
// We can't reuse the same identifier again using 'let' same as in the other languages we do. 
// But we can redeclare the same variable using var
    var repeat = 34.333;
    var repeat = 'Virat paglu!';
    console.log (repeat);
    





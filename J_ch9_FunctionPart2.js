//===========================================FunctionPart2===========================================================
// There are 3 types of writing syntax for a function 
//1).  Simple one 
    function greet(x){
        console.log("Nameste! "+x)        // function calling 
    }
    greet("Ishant");                     // function calling

//This is hoisted means that we can call it even before declaration of this function 


//2.) 2nd method
//  storing in variable
    const sum = function(a,b){
        return(a+b);
    }
    console.log(sum(23,23));
// This is not hoisted


//3.) Arrow function 
    const add = (a,b) => {
        console.log("the sum of these numbers are:");
        return(a+b);
    }
    console.log(add(3,4));

//-----------------------------Arrow syntax if there is only single statement --------------------------------
    const sub = (a,b) => (a-b);
// a) write the name of the function with const/var (recommended const).
// b) write the "=" then your arguments if there is no arguments just write ().
// c) write the "=>" then the return of the function . 
// NOTE : if there are multiple lines then write all your lines in {} as given in previous example.
    console.log(sub(5,1));

//example when there is  no argument
    const greets = () => console.log("Nameste!");
    greets();


//------------------------------------------Callback Function-----------------------------------------------------
// we can set a function as an argument of the another function . this is the main purpose of callback function.



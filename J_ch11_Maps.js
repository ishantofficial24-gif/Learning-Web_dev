//=============================================MAPS====================================================================
// It is used to bring same changes in each element of array using the function
    let arr = [1,2,3,4,5,6,7,8,9];
    let brr =[];
    const double = (ele) => 2*ele;            //function for transformation in array
    
    brr = arr.map(double);                    // syntax , map calling the fuction
    console.log(brr);

//-----------------------------------declaring the fuction in same line------------------------------------------------
    
    brr = arr.map(function(ele){
        return 3*ele;
    })
    console.log(brr);

// Even we have a smaller syntax.

    brr = arr.map((ele) => ele*3);
// shortcut of writing even smaller syntax.
    console.log(brr);
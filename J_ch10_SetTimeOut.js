//====================================SET TIME OUT==============================================================
// setTimeout is a built-in JavaScript function that takes a callback
// and executes it after a given time delay.
//syntax   ----->        setTimeout(function,time(in miliseconds));
    const greet = (n) => {
        console.log("Nameste!"+n);
    };
    setTimeout(()=>greet("Ishant"),100);
// *PAY ATTENTION*
// In this , in calling a builtin function we re declared the function again in the brackets using =>
// We didn't write setTimeout(greet("Ishant"),1000) because in this the return type of function goes instead of 
//   the function which is not our goal at all , it is must to pass a function . 


//------------------------------------Simpler syntax------------------------------------------------------------
//  just declare direct in setTime out calling line
    let k = "Ishant";
    setTimeout(function(){
        console.log("Nameste "+k);
    },300);

//ex2
// n second timer.
    let n= 30;
    for(let i=1;i<=n;i++){
        setTimeout(function(){
            console.log(n+1-i);
        },i*1000);
    }
//============================================LOOPS===================================================================
//Normally  while loop, for loop , do-while loop are same as in other language 
for(let i=1;i<=10;i++){
    console.log (i);
}


//-----------------------------------------------ForOf loop------------------------------------------------------------
//forOf loop is similar to the for each loop 
// In this a copy is made of the each element and then operation is done for them one by one.
    let arr = [12,1,34,45,67,87,24,9.343];  
    for (let ele of arr) {
        console.log (ele);
    }

//NOTE : This work by making the copy of the elements so the changes bring in the 'ele' doesnot change the actual object.


//----------------------------------------------forEach loop----------------------------------------------------------
//forEach loop in the javascript is different 
// In this we can print the index and full array in each iteration 
  arr.forEach((ele,index) => {
    console.log (ele, index);
  });


  arr.forEach((ele,index,arr) => {
    console.log (ele,index,arr);
  });
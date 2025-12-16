//================================================FILTER===========================================================
// It works on true false system.
// if true condition is preformed in the array and if false then not.
    arr = [1,2,3,4,5,6,7,8,9];
    const  even = (ele) => {
            if (ele%2==0) return true;
            else return false;
    }
    let brr = arr.filter(even);
    console.log(brr);


//----------------------------------------------making shorter syntax-------------------------------------------------
    let crr = arr.filter((ele)=>{if(ele%2==0) return false;
                                else return true;})
    console.log(crr);
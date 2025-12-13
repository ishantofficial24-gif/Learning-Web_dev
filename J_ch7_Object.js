//==============================================OBJECT===============================================================
// Object are collection of many variables together.
// It is based on key value system.
    let detailes = {
        name : "Ishant Sharma",
        age : 18,
        favGame : 'minecraft',
        isMarried : false,
        'has laptop': true           //this is how we can create variable which has spaces.
                                     // Must be initialised by 2nd method 
    };

// object has been maded now we have 2 method to excessing them.
//1.)
    console.log (detailes.name);
    console.log (detailes.isMarried);
// in this method only used when the keys written without spaces.

//2.)
    console.log (detailes["has laptop"]);
    console.log (detailes["favGame"]);
// this method can support both the above forms with or without spaces form.


//----------------------------------------------forIn loop-----------------------------------------------------------
    for (const key in detailes) {        
        console.log (key,detailes[key]);
    }
// this is similar to the forOf loop 
// Must remember the syntax for key,object[key]
// dont write object.key
    
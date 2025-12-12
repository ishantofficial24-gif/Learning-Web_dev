//===============================================STRING===============================================================
// Almost same as java
    let string = "Ishant Sharma";
// We can also excess each character treating the string as the character array.
    console.log (string[5]);


//----------------------------------------------Length----------------------------------------------------------------
    console.log(string.length);
//prints the lenght of the string.


//-------------------------------------Uppercase and Lowercase------------------------------------------------------
    let s2 = string.toUpperCase();
    console.log(s2);
// It convert the whole string into uppercase but remember that there is no change in the actual string .
    console.log(string.toLowerCase());
// It converts the string in to lowercase


//--------------------------------------------------Trim---------------------------------------------------------------
    let s = '   Minecraft is a good game    ';
    console.log(s.trim());
// This trims the string which means it only removes all the white spaces present in starting and the ending only.


//------------------------------------------------For Index of specific character--------------------------------------------------------
    console.log(string.indexOf('a'));
// It will print the index of the character written in the bracket .
    
    console.log(string.lastIndexOf('a'));
// It also tell about the index of the character but it tell the correct index but from the last.


//-------------------------------------------For character at specific index---------------------------------------
    console.log(string.charAt(4));
// It tells the character whch  written in the bracket.


//---------------------------------------------------Slice-------------------------------------------------------
    console.log(string.slice((7)))
// print the substring from the index i to the end.           7=i here
  
    console.log(string.slice(7,12));
// It print the substring starts from the index 'i' to the index 'j-1'.      i=7 , 12=j here


//--------------------------------------------Split-------------------------------------------------------------- 
    str = string.split(" ");
// this code will split the string on the behalf of the elemint written in the bracketts . 
// this means whenever that element comes in the string then it will break it and save it in array.
    arr = ["Ishant","Sharma"];     // This is what stored in the str
    console.log(str);
    console.log(arr);
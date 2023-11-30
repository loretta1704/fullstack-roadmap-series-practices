//Question 1
 const myBoolean=true;

//Question 2
 const myString='hello world';

//Question 3
 const firstNumber=20;

//Question 4 
 let secondNumber=80; //here I used let instead of const because I would later re-assign another value to it 

 //Question 5 
 secondNumber=80;
 console.log(secondNumber); // here the output now changes to 80

//Question 6:Array
let  myArray=[myBoolean,myString];

//Question 7
const myObject={
    firstProperty:myArray, //I assigned myArray(which is already a nested array with a boolean(myBoolean) and a string(myString) in it to firstProperty
    sumProperty:firstNumber+secondNumber,//I assigned two variable with numbers as its values to sumProperty

}
//Question 8
console.log(myObject); // output:{firstProperty: Array(2), sumProperty: 100}

//Question 9
console.log(myObject.sumProperty);//Output:100.

//Question 10
console.log(myObject.firstProperty[1]); //Output:myString




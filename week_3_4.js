//	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//  Do not use numbers to reference the last element, find it programmatically, 
//	ages[7] – ages[0] is not allowed!

//1	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//	Use a loop to iterate through the array and calculate the average age. 


const numArray = [3, 9, 23, 64, 2, 8, 28, 93]; 
let firstIndex = numArray[0];
let lastIndex = numArray[numArray.length - 1];
console.log(lastIndex - firstIndex);
numArray.push(104);
lastIndex = numArray[numArray.length-1];
console.log(numArray); //returns the number of indexes before the array- why?
console.log(lastIndex - firstIndex); //how to reset to include new numbers
//console.log(numArray[numArray.length-1]-numArray[0])- another way to write this
let sum = 0 //global scope
for (let i = 0; i <numArray.length; i ++) { //block scope in for loop
sum = sum + numArray[i]
//sum = sum plus each index of the array
    console.log(numArray[i]);
}
console.log(sum / numArray.length)





//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//Use a loop to iterate through the array and calculate the average number of letters per name. 

// NEED TO ADD UP EVERY LETTER IN THE ARRAY AND DIVIDE BY "names.length"

//if (each letter is equal to 1)

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
// USE THE JOIN METHOD?
let sum2 = 0
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; 
for (let i = 0; i < names.length; i++) {
//console.log(names[i].length);
sum2 = sum2 + names[i].length
console.log(sum2);
}
console.log(sum2 / names.length);

let greeting = ["hello", "there"]
console.log(greeting[0].length);



//console.log(names[0].length);
//console.log(names.length);

//let i = names[0].length;
//for (i = 0; i < names.length; i++);
//console.log() 

    //for(let i = names[0]; i < names.length; i++);
    //console.log(names[i] +)
    
    
    //for (let i = 0; i < Array.length; i++);
       
       //console.log(stringLength);


    //sumTotal = String.length + names.length

    //for (let i = 0; i < Array.length; i++] {
        //average[i] = 
   // })
//}

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array




// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

//function multiplyWords (race,3) {
    //or (let i = 0; i <= 3; i++)
    //console.log(multiplyWords);


//Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and the last name separated by a space.

//function nameIs(firstName,lastName)

 //   return firstName + " " + lastName;
   //let fullName = (firstName + "x" + lastName);
   //console.log(fullName);



//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//function [3, 2, 5, 8] {
    


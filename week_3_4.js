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

let sum2 = 0
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; 
for (let i = 0; i < names.length; i++) {
//console.log(names[i].length);
sum2 = sum2 + names[i].length
console.log(sum2);
console.log(sum2 / names.length);
}
let nameArray = []
for (let i = 0; i < names.length; i++) {
//console.log(names[i] + " ");
let nameFinal = names[i] + " "
nameArray.push(nameFinal);
console.log(nameArray)

}









//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
//length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array


let namesArray = ["Kelly", "Sam", "Kate"]
let blankArray = []
let someArray = 0
for (i = 0; i < namesArray.length; i++) {
let nueArray = namesArray[i].length;
blankArray.push(nueArray);
someArray += nueArray //addition assignment, adds each length of a name to the length of the name prior
console.log(blankArray);



    
}



// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function multiplyWords(word, n) {
    let words = " "
    for (let i = 0; i < n; i++) {
    console.log(i, words += word);
    }
}
multiplyWords("hello", 3)





//Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and the last name separated by a space.

function fullName(firstName,lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Sally", "Field")




//Write a function that takes an array of numbers and returns true if the sum of all the 
//numbers in the array is greater than 100.
    

//I don't know why I can't get this to work!!! But everything I have seen online shows this is correct.
function numbers(arrays) {
    let numbers = 0;
    for (let i = 0; i < arrays.length; i++) {
    numbers += arrays[i];
    
   
   

}
if (numbers[i] > 100) {   //I have tried this with both numbers[i] and arrays[i]
    console.log("true");
   }
    else {
        console.log("false");
    }

}

numbers([25, 25, 25, 100])



//Write a function that takes an array of numbers and returns the average of 
//all the elements in the array.

function numbers(arrays) {
    let numbers = 0;
    for (let i = 0; i < arrays.length; i++) {
    numbers += arrays[i];
    }
    let newAverage = numbers / arrays.length
    console.log(newAverage);
}

//Write a function that takes two arrays of numbers and returns true if the average 
//of the elements in the first array is greater than the average of the elements in the second array.

//I don't even know what to do with this question. I realize that I can use some iteration of the above problem but I don't
//know how to have it "hold" information. Like- find the average of this array, now hold my beer why I find the average of the second 
//array, and then let's compare them. Am I supposed to have two for loops?!

function iHateThis(arr1, arr2) {
let counter = 0;
for (let i = 0; i < iHateThis.length; i++) {
    counter += arr1[i];
    }
    let newAverage = counter / arr1.length
    console.log(newAverage);

}

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log(true);
    } 
else {
    console.log(false);
}
    }

willBuyDrink(true, 15)


function isJasmineHungry(timeOfDay, amountAlreadyEaten, noiseLevel) {
    if (timeOfDay == 5-24 || amountAlreadyEaten < 6 || noiseLevel == true) {
    console.log("Feed her before she eats something she shouldn't");
}
else {
    console.log("You should probably feed her, anyway");
}
}

isJasmineHungry(1, 8, false)
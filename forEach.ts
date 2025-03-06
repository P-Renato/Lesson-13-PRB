/*
    Advanced array methods
    they are very useful and very commomly used tools built in js 
*/

const fruit = ["apple", "banana", "cherry"];

// Define a function to be passed to the forEach method
function printFruit( fruit ) {
    console.log(`Fruit: ${fruit}`);
}

// Passing the function "printFruit" to the "forEach" method
fruit.forEach( printFruit );

/*
    The forEach method takes a function as an argument
    This function is called for each element in the array
    One by one the elements are passed to the argument function
    Here "printFruit" is called a "callback"
*/

// second example

const drinks = ["coffee", "tea", "water"];

drinks.forEach( function(  drink ){
    console.log(`Drink: ${drink}`);
})

/*
In this example the forEach method takes an ** anonymous ** function as an argument
This callback function is called for each elemnt of the array.
It is basically the same as the first example but the function is defined inline
*/


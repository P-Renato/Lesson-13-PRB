/*

*/

const numbers = [1, 2, 3, 4, 5];

function timesTwo( num ){
    return num * 2
}

const doubled = numbers.map(timesTwo);
console.log( doubled ); // [ 2, 4, 6, 8, 10 ]
console.log( numbers ); // [ 1, 2, 3, 4, 5 ]

/*
    The map method takes a function as an argument
    this function is called for each element of the array 
    the return value of the function is added to a new array
    It's basically like forEach metho that return an array 
*/

/*
TASK
Create an array of prices
now use the map method to create a new array containg prices and currency symbol
Expected result ( ' $1.59 ', '$4,90', '$9,99')
*/

const numArr2 = [3.45, 7.89, 12.45, 5.99, 8.99];

const prices = numArr2.map( function( item ){
    return `$ ${item}`
})

console.log(prices)


// Second example

const users = [
    {name: 'Bea', age: 15},
    {name: 'Alice', age: 56},
    {name: 'Bob', age: 15},
    {name: 'Charlie', age: 75},
    {name: 'Diana', age: 40},
]

const names = users.map( function ( name1 ){  // the result from users.map is being introduced into the parameter 'name1' 
    console.log( name1.name )
    return (name1.name)
})

// const justName = name1[0]
console.log(names)
// console.log(justName)


//TASK

let listEis = ["apples", "bread", "milk", "sugar"];

const liItems = listEis.map( function ( iceCream ){
    console.log(`<li> ${iceCream} </li>`);
    return `<li> ${iceCream} </li>`
})

console.log(liItems)


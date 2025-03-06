const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven( num ){
    return num % 2 === 0;
}

const evens = numbersArr.filter( isEven )
console.log( evens )

/*
the filter method takes a function as an argument
this function is called for each element of the array
IF the function returns TRUE, the element is  added to the new array
in this case "isEven" is a callback
*/

const usersArr = [
    {name: 'Bea', age: 15},
    {name: 'Diana', age: 29},
    {name: 'Alice', age:56},
    {name: 'Bob', age: 15},
    {name: 'Charlie', age: 75},
    {name: 'Diana S.', age: 40},
];



function youngOnes( num ){
    console.log(num.age)
    return num.age < 18; // All elements matching this condition will be returned
    // In our case the entire object matching the condition will be returned 
}


const youngUsers = usersArr.filter( youngOnes )
console.log(youngOnes)
console.log(youngUsers)


// TASK return only words longer than 6 characters
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction']

function longOnes( palavra ){
    return palavra.length > 6
}

const longWords = words.filter( longOnes )
console.log(longOnes)
console.log(longWords)
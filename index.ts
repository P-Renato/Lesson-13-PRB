/*
    Different ways to use a function
*/


const double = function( x: number): number {
    return x * 2
}

console.log( typeof double);


// if double is a function, it means I can also execute it
console.log( double(2)); // 4

// function as object property
const user = {
    name: "colZero81",
    age: 24,
    greet: function() {
        console.log("Hello")
    }
}

user.greet();
console.log(user)

// function as an array element
const funcs = [
    function(){
        console.log("function1");
    },
    function(){
        console.log("function2");
    },
    
];

const func1 = funcs[0];
console.log( func1 ); // [Function]
func1(); // outputs function1

// function as parameter
function callTwice( someFunction ){
    someFunction();
    someFunction();
}

// function that will be passed to the one above
function laugh(){
    console.log("ahaha");
}

// Now we trigger "callTwice" while passing the "laugh" function to it
callTwice(laugh)
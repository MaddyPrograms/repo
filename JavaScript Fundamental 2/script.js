// Activating Strict Mode
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
//const interface = 'Audio';
//const private = 534;

// Functions
function logger() {
    console.log('My name is Maddy');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, orange) {
    console.log(apples, orange);
    const juice = `Juice with ${apples} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

// Functiona Declaration 
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(2000);

// Function Expression
const calcAge2 = function(birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(2000);

console.log(age1, age2);

// Arrow Function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntiRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntiRetirement(2000, 'Maddy'));
console.log(yearsUntiRetirement(1998, 'Haider'));

//Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, orange) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(orange);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


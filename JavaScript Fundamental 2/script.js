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

//Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnatic discipline, which works differently.
Each team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow funstion 'calcAverage' to calculate tne average of 3 scores
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphin' and 'avgKoalas'), together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. use the 'checkWinner' function to determine the winner of both DATA 1 and DATA 2.
5. Ignore draw this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

HINT: To calculate average of 3 values, add them all together and divide by 3.
HINT: TO check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores.

GOOD LUCK :)
*/

let calcAvg1 = (value1, value2, value3) => {
    const average1 = (value1 + value2 + value3) / 3;
    return average1;
}    
console.log(calcAvg1(44, 23, 71));

let calcAvg2 = (value11, value22, value33) => {
    const average2 = (value11, value22, value33) / 3;
    return average2;
}
console.log(calcAvg2(65, 54, 49));

const checkWinners = function(avgDolphins, avgKoalases) {
    if (avgDolphins >= 2 * avgKoalases) {
        console.log(`Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalases})`);
    } else if (avgKoalases >= 2 * avgDolphins) {
        console.log(`Koalas wins 🏆 (${avgKoalases} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins......');
    }
}
checkWinners(calcAvg1, calcAvg2);   
checkWinners(576, 111);

// ARRAYS

const friend1 = 'Khizer';
const friend2 = 'Haider';
const friend3 = 'Ahsan';

const friends = ['Khizer', 'Haider', 'Ahsan'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Naqvi';
console.log(friends);

const first_Name = 'Maddy';
const maddy = [first_Name, 'Abbas', 2023 - 2000, 'Student', friends];
console.log(maddy);
console.log(maddy.length);

// Exercise 
const calcAges = function (birthYear) {
    return 2023 - birthYear;
}
const _years = [1990, 1967, 2022, 2010, 2018];

const _age1 = calcAges(_years[0]);
const _age2 = calcAges(_years[1]);
const _age3 = calcAges(_years[_years.length - 1]);
console.log(_age1, _age2, _age3);

const ages = [calcAges(_years[0]), calcAges(_years[1]), calcAges(_years.length - 1)];
console.log(ages);
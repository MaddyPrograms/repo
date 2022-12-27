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

// Function Declaration 
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
<<<<<<< HEAD

// Basic Array (Methods)

const _friends = ['Khizer', 'Haider', 'Ahsan'];

// Add elements in last "push()"
const newLength = _friends.push('Maddy');
console.log(_friends);
console.log(newLength);

// Add element in the start "unshift()"
_friends.unshift('Madad');
console.log(_friends);

// Remove element in the last "pop()"
_friends.pop();
const popped = _friends.pop();
console.log(popped);
console.log(_friends);

// Remove element in the First "shift()"
_friends.shift();
console.log(_friends);

// Know the index "indexOf()"
console.log(_friends.indexOf('Khizer'));
console.log(_friends.indexOf('Haider'));

// Check if it includes
_friends.push(23);
console.log(_friends.includes('Khizer'));
console.log(_friends.includes('Ahsan'));
console.log(_friends.includes(23));

if (_friends.includes('Haider')) {
    console.log('You have a friend called Haider');
}

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculated challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3.Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total value, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip value in separate variables forst, but rigt in the new array)

*/

const calcTips = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bill = [125, 555, 44];
const _tip = [calcTips(bill[0]), calcTips(bill[1]), calcTips(bill[2])];
const totals = [bill[0] + _tip[0], bill[1] + _tip[1], bill[2] + _tip[2]];

console.log(bill, _tip, totals);
=======
>>>>>>> 5c34835719de3b7d567189859613871986926546

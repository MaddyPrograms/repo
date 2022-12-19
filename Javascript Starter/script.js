let js = "amazing";
console.log(40 + 8 + 23 - 10);  

console.log("Jonas");
console.log(23);

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher"

console.log(myFirstJob);

// let country = "Pakistan";
// let population = "22 Crore";
// console.log(country);
// console.log(population);

true;
let javaScriptIsFunn = true;
console.log(javaScriptIsFunn);

console.log(typeof true);
console.log(typeof javaScriptIsFunn);
console.log(typeof 23);
console.log(typeof "Jonas");
// Dynamic Typing practice Here
javaScriptIsFunn = 'YES!';
console.log(typeof javaScriptIsFunn);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
//Assignment
let isIsland = true;
console.log(typeof isIsland);
isIsland = "Pakistan"
console.log(typeof "Pakistan");
console.log(typeof "population");
console.log(typeof "country");
console.log(typeof "language");

// Variable & Constant
let age = 30;
age = 31;

const birhtYear = 2000;
var job = 'programmer';
job = 'teacher';

let language = "English";

//Maths Operator
const now =  2037;
const ageJonas = now - 1991;
const ageSarah = now - 2017;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName =  "Maddy";
// const lastName = "Abbas";
// console.log(firstName+' '+lastName);

//Assignment operators
let x = 10+5; // 15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; // x=x+1
x--; // x=x-1;
x--; 
console.log(x);

// Comparison Operator 
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2017);

//Basic Operator Assignment
let country = "Pakistan";
let population =  "22";
firstPart = population/2;
console.log(firstPart);
secondPart = 22 - firstPart;
console.log(secondPart);

population++;
console.log(population);

let findLand_population = 66;
console.log(population === findLand_population);
console.log(population >= findLand_population);
console.log(population <= findLand_population);

const description = "'Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);


console.log(now - 1991 > now - 2017);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x =10
// console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/*
// Coding Challenge #1

Mark and John are trying to compare their BMI (Boday Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculated both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weight 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weight 85 kg and is 1.76 m tall.

Good Luck :)
*/

// const heightMark = 1.69;
// const weightMark = 78;
// const heightJohn = 1.95;
// const weightJohn = 92;
const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;
let markBMI = weightMark/heightMark ** 2;
console.log(markBMI);
let johnBMI = weightJohn/heightJohn ** 2;
console.log(johnBMI);
console.log(markBMI > johnBMI);

//String and Template Litertal 
const first_Name = 'Maddy';
const Hobby = 'Student';
const birth_Year = 1991;
const _year = 2037;

const Maddy = "I'm " + first_Name + ', a ' + (_year - birth_Year) + ' years old ' + Hobby + '!';
console.log(Maddy);
const maddyNew = `I'm ${first_Name}, a ${_year - birth_Year} years old ${Hobby}!`;
console.log(maddyNew);

console.log(`Just a regular string.....`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple
lines`);

// Taking Decisions if_else Statements

const currentAge = 18;
if(currentAge >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearLeft = 18 - currentAge;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthday = 1997;
let century;
if(birthday <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
/*
Coding Challenge #2
Use the BMI example from challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😁.
GOOD LUCK :)
*/
 
if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}0!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
}

// Type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coerction 
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' -3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); 

//Truthy and Falsy Values
// 5 Falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if(money) {
    console.log("Don't spent it at all :)");
} else {
    console.log('You should get a job');
}

let _height = 0;
if(_height) {
    console.log("YAY! Height is defind");
} else {
    console.log('Height is undefind');
}

// Equality Operators _ == vs. ===  & if-selse-if statement

const _age = '18';
if(_age === 18) console.log('You jsut became an adult :D (Strict)');

if(_age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //22===23 -> FALSE
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9');
} 
if (favourite !== 23) console.log('Why not 23?');

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

//////////////////////////
// Coding Challenge #3

/*
There are two gymnastic teams, Dolphin and Koalas. They conplete against each other 3 times. The winner with the highest average scpre wins the trophy!

1. Calculate the average scpre for each team, using the test data flow
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a time only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical opearator to test for minimum score, as well as multiple else-if blocks 🙂
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphin score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA Bonus 1: Dolphin score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA Bonus 2: Dolphin score 97, 112 and 101.
Koslas score 109, 95 and 106

GOOD LCUK🙂
*/

/* task:2

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


let personName: string = "Hunain"
let message: string = `Hello ${personName}, hope you are doing will these days.`
console.log(message);
________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:3

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Malik Hunain Ahmed Attari";

// step 1 show in lower case:

let lowercaseName: string = personName.toLowerCase();

console.log(lowercaseName);

// step 2 show name in uppercase

let uppercaseName: string = personName.toUpperCase();

console.log(uppercaseName);

// step 3 show name in titlecase

let words: string[] = personName.split ("");

let titlecaseName: string = ""

for (let i = 0 ; i < words.length; i++) {

    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};
_____________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:4

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// Quaid e Azam once said, “Expect the best, prepare for the worst.”


console.log('Quaid e Azam once said, “Expect the best, prepare for the worst.”');

 

console.log(titlecaseName)
_____________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:5

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// Quaid e Azam once said, “Expect the best, prepare for the worst.”


console.log('Quaid e Azam once said, “Expect the best, prepare for the worst.”')



let famous_person: string = "Quaid e Azam";/let
message: string = famous_person + 'once said, “Expect the best, prepare for the worst.”'

console.log(message);
_______________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:6

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let personName: string = "\t   Malik Hunain Ahmed Attari \n";

console.log("Name with whitespace", personName);

let strippedName: string = personName.trim()

console.log("sritpped name:", strippedName);
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:7

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Addition :

const additionResult = 4 + 4;

console.log("Addition Result:"+ additionResult)


// Subtraction

const subtractionResult = 16-8

console.log("Subtraction Result:" + subtractionResult);

// Multiplication

const multiplicationResult = 4 * 2;

console.log("Multiplications Result:" + multiplicationResult)

//Division

const divisionResult = 64 / 8;

console.log("Division Result: " + divisionResult)
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/


/* task:8

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.



console.log("-".repeat(80))
console.log(5 + 3)
console.log("-".repeat(80))
console.log(16 - 8)
console.log("-".repeat(80))
console.log(4 * 2)
console.log("=".repeat(80))
console.log(16 / 2)
console.log("-".repeat(80))
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/*task:9

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber: number = 7

let message: string = `My favorite number is ${favoriteNumber}`;


console.log(message)
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:10

// This video is for comment tutorial

// please dont change line 3 to 6.(Hunain)

let personName: string = "Malik Huunain";

let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();


let words: string[] = personName.split ("");

let titlecaseName: string = "" 

for (let i = 0 ; i < words.length; i++) {

    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};

console.log(titlecaseName);
console.log(uppercaseName);
console.log(titlecaseName);
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:11

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[]=['Malik', 'Hunain', 'Ahmed', 'Attari'];

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:12

//Hoow to use array in TypeScript

//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[]=['Malik', 'Hunain', 'Ahmed', 'Attari'];

//loop through each name in the array

for (let name of names) {
     print a personalize message for each friend

    console.log(`Good morning ${name}, I hope you are having a fantastic day!`)
    
}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:13

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransportation: Array<[transport: string, brand: string]> = []

favoriteTransportation.push(["motercycle", "Honda"])
favoriteTransportation.push(["car", "Toyota"])
favoriteTransportation.push(["bicycle", "Sohrab"])

console.log(favoriteTransportation)

// console.log(favoriteTransportation)
// I could like to own a Honda motorcycle.

// using for each loop to print a series of statements

favoriteTransportation.forEach(([transport, brand]) => {console.log(`I would liked to own a ${brand} ${transport}`) }
)
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:14

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist: Array<string> = [
    "Zia Khan",
    "Jhanzaib Tayab",
    "Abid Shirwani",
    "Muhammad Ali Jinnah",
    "Elon Musk",
    "Albert Einstein",
];

//loop for each to print invitation

guestlist.forEach((guestName) =>
{
    console.log(`Dear ${guestName}, you are invited to dinner please join us.`)
})
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:15


//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let guestList: Array<string> = [
    "Zia Khan",
    "Jhanzaib Tayab",
    "Muhammad Ali Jinnah",
];

// step 1. Print the name of person who can't make it.

let guestHowCantMakeIt: string = "Muhammad Ali Jinnah"
console.log(`${guestHowCantMakeIt} can't make it to Dinner`)

// step 2. Replace the name of guest who cant make it.

let NewGuest: string = "Abid Shirwani"
let indexOfguestHowCantMakeIt: number = guestList.indexOf(guestHowCantMakeIt)
console.log(indexOfguestHowCantMakeIt)

if (indexOfguestHowCantMakeIt !== -1)
{
    guestList[indexOfguestHowCantMakeIt] = NewGuest
}
 console.log(guestList[2])

// step 3 Print a second set of invitation messages
console.log("Second set of invitation messages:")
guestList.forEach((guest:string) =>
{
    console.log(`Dear ${guest}, you are invited to dinner.`)
}    
)
export{guestList}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:16


//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestList: Array<string> = [
    "Zia Khan",
    "Jhanzaib Tayab",
    "Abid Shirwani",
];

// Exercise 16 Solution

// Step 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table`)
}

// step 2 Add a new guest to the beginning of Array.
let newGuestAtBeginnibg: string = "Ali Phool"
guestList.unshift(newGuestAtBeginnibg)

console.log(guestList)

// 3rd step add one guest to the middle of Array
let newGuestInMiddle: string = "Mian Asif"
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)

 console.log(guestList)

// 4th step use append() to add new guest to the end of your list

let newGuestAtEnd: string = "Muhammad Ali"
guestList.push(newGuestAtEnd)

 console.log(guestList)

//Final Step Print a new set of invitation messages

console.log("New set of invitation messages:")

for(let guest of guestList)
{
    console.log(`Dear ${guest}, you are invited to dinner`)
}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:17


//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestList: Array<string> = [
    'Ali Phul',
    'Zia Khan',
    'Mian Asif',
    'Jhanzaib Tayab',
    'Abid Shirwani',
    'Muhammad Ali',
]

// message about inviting only two people.

console.log(`I can invite only two people for dinner`)

// 2nd step remove guest from th list untill only two name rmain.

while(guestList.length > 2) 
{
   let removeGuest = guestList.pop()
   console.log(`Sorry, ${removeGuest}, I cant invite you to dinner`);
}

// Part 3 - Print a message to each of the two people still on your list, letting them know they,re still invited.

for(let guest of guestList) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`)
}

// 4th part: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop()
guestList.pop()
print empty string
console.log(`Guest list after dinner: ${guestList}`)
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:18


//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



// step 1: Create an array to store Tralve destinations.

let traveldestinations: string[] = ["Tokyo", "Paris", "Madina", "Munawara", "Cayman", "St Maartin"]

// step 2: Print your array in its original order
console.log("Original Order:")
console.log(traveldestinations)

// step 3:Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list")
console.log([...traveldestinations].sort())

// Step 4:Show that your array is still in its original order by printing it again.

console.log("\nShowing array is still in its original order")
console.log(traveldestinations)

// step 5:  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modifying the actual list")
console.log([...traveldestinations].sort().reverse())

// step 6:Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order")
console.log(traveldestinations)

// Step 7:Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order")
traveldestinations.reverse()
console.log(traveldestinations)

// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original")
traveldestinations.reverse()
console.log(traveldestinations)

// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabatical order")
traveldestinations.sort()
console.log(traveldestinations)

// Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabatical order")
traveldestinations.sort().reverse()
console.log(traveldestinations)
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:19

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//Importing Guests List from Dinner Guests
import{ guestList } from '../Dinner Guests'

console.log(`\nPrinting message inicating number of guests`)
console.log(`We had finally invited ${guestList.length} guest in Changing Guest List`)
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:20


//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


const countries: string[] = ["USA", "Pakistan", "Australia", "Japan", "Chaina"]

console.log("List of Countries")

for (let country of countries)
{
    console.log(country)
}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:21


//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


const bouquet =
{
    name:"Spring Delight",
    price:250,
    description: "Beautiful arrangement of spring flowers"
}

 //define an array of objects

 let bouquets: Array<typeof bouquet> = [];

 pushing multipul object

 bouquets.push(bouquet);
 bouquets.push({
 name: "Summer bliss",
 price:350,
 description: "beautiful arrangement of Summer flowers"})  

 let bouquet3 = {
 name:"Red Hot",
 price:350,
 description: "Beautiful arrangement of red roses"
}

bouquets.push(bouquet3);

 console.log(bouquets);

bouquets.push({name:"Freshness", price:250, description:"A beautiful arrangement of white and yellow roses"})

 console.log(bouquets);
 function to display bouquets

function displayBouquets(bouquets: Array<typeof bouquet>)
{
    for(let i of bouquets) {
        console.log(`
        title: ${i.name}
        description${i.description}
        price: ${i.price}
        _____________\n`);
    }
}

displayBouquets(bouquets);
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:22


//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


//Function to create a fruit object
function createFruit(name: string, color: string, taste: string) {
    return {
        name,
        color,
        taste,
    };
}

//Create an array of fruits
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Grapes", "Purple/Green", "Sweet"),
    createFruit("Strawberry", "Red", "Sweet"),
];

//Access an invalid index
const invalidIndex = 10; // There are only 5 elements in the array, so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits [invalidIndex]);

//print the fruits 
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});

export{};
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:23


//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


//let car = 'subaru'

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car =='honda'? I predict False.");
console.log(car == 'honda'); // False

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False

console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // True

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

console.log("Is car !== 'mazda'? I predict True.");
console.log(car !== 'mazda'); // True

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

let age = 25;
console.log("Is age > 18? I predict True.");
console.log(age >18); // True

console.log("Is age > 21? I predict False.");
console.log(age >21); // False
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*

/* task:24


//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


// Test for equality and inequality with strings
const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true

// Test using the lower case function
const text1: string = "Hello World";
const text2: string = "hello world";
console.log(text1.toLowerCase() === text2); // true

// Numerical tests involing equality and inequality, greater than and less than, greater than or equal to, and less than equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false

//Tests using "and"and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); // true, both conditions are true
console.log(x < y || y > z); // true, at least one conditions is true
console.log(x > y && y < z); // false, both conditions are false
console.log(x > y || y > z); // false, both conditions are false

//Test whether an item is in an array
const fruits: string[] = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('kiwi')); // false

//Test whether an item is not in an array
const colors: string[] = ['red', 'green', 'blue', 'yellow'];

console.log(!colors.includes('purple')); // true
console.log(!colors.includes('green')); // false
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:25


//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


let alien_color = 'green'

if (alien_color == 'green') {
    console.log("Congrulations! You just earned 5 points.")
}

//second version
alien_color = 'blue'

if (alien_color == 'green') {
    console.log("Congrulations! You just earned 5 points.")
}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:26

//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.

//Version 1 (runs the if block)
console.log(`\n1st version of code`)

let alien_color: string = 'green';

if (alien_color == 'green')
{
    console.log('congratulations! You just earned 5 points for shooting the alien.');
} else {
    console.log('congratulations! You just earned 10 points for shooting the alien.');
}

//version 2 (runs the else block.)
console.log(`\n2nd version of code`)
alien_color = 'blue';

if (alien_color == 'green') {
    console.log('congratulations! You just earned 5 points for shooting the alien.');
} else {
console.log('congratulations! You just earned 10 points for shooting the alien.');
}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:27


//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


//version 1 - where align color is green
console.log(`1st version where align color is green`)
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log('Congrulations! You just earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('Congrulations! You just earned 10 points.');
} else if (alien_color === 'red') {
    console.log('Congrulations! You just earned 15 points.');
}  else {
    console.log('Unknown alien color.');
}


//version 2 - where align color is yellow

console.log(`2nd version where align color is yellow`)

alien_color = 'yellow';

if (alien_color === 'green')
{
    console.log('Congrulations! You just earned 5 points.');
}
else if (alien_color === 'yellow') 
{
    console.log('Congrulations! You just earned 10 points.');
} 
else if (alien_color === 'red') 
{
    console.log('Congrulations! You just earned 15 points.');
}  
else {
    console.log('Unknown alien color.');
}        
//version 3 - where align color is red
console.log(`3rd version where align color is red`)

alien_color = 'red';

if (alien_color === 'green')
{
    console.log('Congrulations! You just earned 5 points.');
}
else if (alien_color === 'yellow') 
{
    console.log('Congrulations! You just earned 10 points.');
} 
else if (alien_color === 'red') 
{
    console.log('Congrulations! You just earned 15 points.');
}  
else {
    console.log('Unknown alien color.');
}    
_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________--
*/

/* task:28


//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.


let age: number = 25;

 less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log(`Age is ${age}, The person is a baby.`);
} else if (age < 4) {
    console.log(`Age is ${age}, The person is a toddler.`);
} else if (age < 13) {
    console.log(`Age is ${age}, The person is a kid.`);
} else if (age < 20) {
    console.log(`Age is ${age}, The person is a teenager.`);
} else if (age < 65) {
    console.log(`Age is ${age}, The person is am adult.`);
} else {
    console.log(`Age is ${age}, The person is an elder.`);
}

//to test wiht different age
console.log(`2nd test with difrient age`)
age = 12
if (age < 2) {
    console.log(`Age is ${age},The person is a baby.`);
} else if (age < 4) {
    console.log(`Age is ${age},The person is a toddler.`);
} else if (age < 13) {
    console.log(`Age is ${age},The person is a kid.`);
} else if (age < 20) {
    console.log(`Age is ${age},The person is a teenager.`);
} else if (age < 65) {
    console.log(`Age is ${age},The person is am adult.`);
} else {
    console.log(`Age is ${age},The person is an elder.`);
}
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:29


//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


// Define the array of fruits
const favorite_fruits: string[] = ["apple", "banana", "orange"];
// syntex: arrayName.includes("element")
// Check for specific fruits using independent if statements
if (favorite_fruits.includes("apple")) {
    console.log("I like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("I enjoy bananas!");
}

if (favorite_fruits.includes("orange")) {
    console.log("Oranges are delicious!");
}

if (favorite_fruits.includes("grape")) {
    console.log("Grapes are tasty!");
}

if (favorite_fruits.includes("mango")) {
    console.log("Mangoes are one of my favorites!");
}
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:30


//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


const userName: string[] = ['Admin', 'Ali Phull', 'Muhammad', 'Kamran', 'Muhammad Bhuran', 'Muhammad Ali'];

function greetUsers(): void {
    for (const i in userName) {
        if (userName[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        } else {
            console.log(`Hello ${userName[i]}, thank you for logging in again.`);
        }
    }
}
greetUsers()
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:31


//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


// Non-empty array case
let userNames: string[] = ['admin', 'Ali Phull', 'Muhammad Kamran', 'Muhammad Burhan', 'Muhammad Ali'];

// functional case

function greetUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }

    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty username:\n`)
greetUsers(userNames);

// to make array empty we just assing an empty array to userNames
userNames = [];

console.log(`\n\n For empty username:\n`)
greetUsers(userNames);

export{};
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/*task:32



//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// step 1 arrays
const current_users: string[] = ["Kamran", "Ali", "Burhan", "Asad", "Asif", "Ahmed"];

const new_users: string[] = ["asif", "Kamran", "Phull", "Aisha", "ali"];
 
// step 2 fuction

function checkUsersNames(current_users: string[], new_users: string[]): void
{
    // 1st step of function
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
// 2nd step of function
    for (const newUsers of new_users) {
        const lowercasedNewUser = newUsers.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`Username "${newUsers}" is already taken.Please enter a new username.`);
        } else {
            console.log(`Username "${newUsers}" is available.`);
        }
    }
}

// console.log(current_users)

// Test the function


checkUsersNames(current_users, new_users);
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:33


//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.



const number: number[] = [1,2,3,4,5,6,7,8,9];

for (const number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    
    console.log(`${number}${ordinal}`);
}    
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:34


//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!



// Define the array of favorite pizzas
const favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print the name of each pizza using a for loop
console.log("My favorite pizzas are:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}

// Print a sentence for each pizza
console.log("\nI like these Pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`)
}

// Print an additional sentence about how much I like pizza
console.log(`\nI really love pizza!`);
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/*task:35


//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


// List of animals with a common characteristic
const animal: string[] = ['cat', 'dog', 'goat'];

// Printing the names of each animal using a for of loop
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animals;");
for (const animal of animals) {
    if (animal === 'dog')
    {
        console.log(`A ${animal} is a great pet.`);
    } 

    else if (animal === 'cat') 
    {

        console.log(`A ${animal} would be a good companion at home.`);

    } 

    else if (animal ==='goat') 
    {

        console.log(`A ${animal} is an adorable pet that also give us milk.`);

    }
}

// Common characteristic 
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:36


//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.

const make_shirt = (size: string, message: string) :void =>

{

    console.log(`size: ${size}, Message: '${message}'`);

}

// Call the function

// call the function with the size and the message variables.  
let size: string = "medium";
let message: string = "TypeScript Insights with Kamran"

make_shirt(size,message);
// directly call the function
make_shirt("Large", "TypeScript Insights");
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:37


//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeShirt(size: string = "Large", message: string = "I love Typescript"): void
{
    return console.log(`Size:${size}, Message: '${message}'`);
}

// large shirt with defult message 
makeShirt(); // Output: Size: Large, Message: 'I Love TypeScript'

//Medium shirt with default message
makeShirt("Medium"); // Output: Size: Medium, Message: 'I love TypeScript'

// Custom shirt with a different message and size 
makeShirt("Small", "Please Subscribe TypeScript insigts!"); // Output: Size: Small, Message: 'Please Subscribe TypeScript insigts'
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:38


//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


function describe_city(city: string, country: string = "Unknown Country"): void
{
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New_York"); // Using the default country value
describe_city("Berlin", "Germany");
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:39


//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.


// arrow function

const city_country = (city: string, country: string): string =>
{ 
   return `${city}, ${country}`;
}



// Test the function with three city-country paris

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/

/* task:40


//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.

//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly

//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.




function make_album(artist: string, title: string, tracks?: number):
{ artist: string; title: string; tracks?: number }
{
    const album = {
        artist,
        title,
        tracks,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Example function calls
const album1 = make_album('Vitel Signs', 'Hum Tum');
const album2 = make_album('Artist 2', 'Artist 2', 12);
const album3 = make_album('Artist 3', 'Artist 3', 8);

console.log(album1);
console.log(album2);
console.log(album3);
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/


/* task:41


//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Array of magician's names
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weassley"];

function show_magicians(magicians: string[]): void
{
    for (const items of magicians) {
        console.log(items);
    }
}


// Call the function to show the magician's names
show_magicians(magicianNames); 
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/


/* task:42


//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Array of magician's names
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weassley"];

function show_magicians(magicians: string[]): void
{
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}


// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = make_great(magicianNames);

// Call the function to show the orginal magician's names
console.log("Original Magicians:");
show_magicians(magicianNames); 

// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames); 
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/


/* task:43


//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Array of magician's names
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weassley"];


function show_magicians(magicians: string[]): void
{
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}


// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = make_great(magicianNames);

// Call the function to show the orginal magician's names
console.log("Original Magicians:");
show_magicians(magicianNames); 

// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames); 
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/


/* task:44


//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("   - You ordered an empty sandwich. Please add some items.");
    } else {
        items.forEach((item, i ) => {
            console.log(`   ${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}

// Call the function with different numbers of arguments

makeSandwich("Turkey", "Lettude", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/


/* task:45


//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function createCar(manufacturer: string, model: string, ...properties: [string, any][]): any {
    const car: any = {
        manufacturer,
        model,
    };

    for (const [key, value] of properties) {
        car[key] = value;
    }

    return car;

}

// Example usage:
const myCar: string = createCar("Toyota", "Corolla", ["color", "red"], ["optional Feature", "sunroof"], ["speed", "280 KM/hour"]);


console.log(myCar);
___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
*/
const num = 1; // const doesn't allow reassignment and must be initialized
let myVar; // let allows reassignment and doesn't need to be initialized

myVar = 1;
myVar = '1';
const result = myVar + num; // since the + operator is used for both aritmethic and string concatanation, if any operand is not a number, it converts everything to string and concatanates
console.log(result); // 11
console.log(typeof result); // string
const result2 = myVar - num; // the - operator is strictly aritmethic so it converts everything to numbers, if not possible, will get NaN
console.log(result2); // 0
console.log(typeof result2); // number

//console.log(myVar + 'is a' + typeof myVar);
console.log(`${myVar} is a ${typeof myVar}`); // Templates strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const number = '2';

// If/else if/else: if you have a few scenarios

if (number == 2) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  console.log('With == , the value is 2');
}

if (number === 2) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  console.log('the value is 2');
} else if (number === 3) {
  console.log('the value is 3');
} else {
  console.log('I do not know this value :(');
}

// Ternary opertator: if you have a binary decision
const message = number === 5 ? 'the number is 5' : 'I do not know this number';
console.log(message); // I do not know this number

// Same logic as the last statement but with and if/else
let messageWithIfElse;
if (number === 5) {
  messageWithIfElse = 'the number is 5';
} else {
  messageWithIfElse = 'I do not know this number';
}
console.log(messageWithIfElse);

const pokemon = 'Pikachu';

// Switch case: If you have more than a few scenarios
switch (pokemon) {
  case 'Pikachu':
    console.log('We restored your Pikachu to full health!');
    break;
  case 'Squirtle':
  case 'Magikarp':
  case 'Staryu':
    console.log('We restored your water pokemon to full health!');
    break;
  default:
    console.log('Sorry, we cannot heal your pokemon :(');
}

// Arrays
const pokemons = ['Pikachu', 'Squirtle', 'Charmander'];
console.log(pokemons.length); // 3
console.log(pokemons); // ['Pikachu', 'Squirtle', 'Charmander']
console.log(pokemons[0]); // Pikachu
console.log(pokemons[2]); // Charmander
console.log(pokemons.reverse()); // ['Charmander', 'Squirtle', 'Pikachu']
pokemons.push('Mewtwo'); // Adds to end
pokemons.unshift('Charizard'); // Adds to beginning
pokemons.pop(); // Removes last
pokemons.shift(); // Removes first
console.log(pokemons);

// Loops

// For https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
for (let pokemon = 0; pokemon <= 5; pokemon++) {
  console.log(`I encountered ${pokemon} pokemon so far`);
}
// While https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = 0;

while (n < 3) {
  console.log(n);
  n++;
}
// Do while https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
let result = '';
let i = 0;

do {
  i++;
  result = result + i;
  console.log(result);
} while (i < 5);

// Functions

// Function declaration (no params)
function talk() {
  console.log('I have no mouth, and I must scream');
  console.log('I have no mouth, and I must scream');
  console.log('I have no mouth, and I must scream');
}
// Function declaration (no args)
function talkDynamic(message, pokemon) {
  console.log(`Hello ${message} ${pokemon}`);
}
// Function expression
const square = number => {
  return number * number;
};

talk();
talkDynamic('greetings', 'pikachu');
square(3); // 9

'use strict';

console.log('====Task 1====');

let userName = prompt('Enter your name', '');

for (let i = 0; i < 4; i++) {
    if (i == 2) {
        console.log(`Happy birthday, dear ${userName}`)
    } else {
        console.log(`Happy birthday to you`);
    }
}

console.log('====Task 2====');

let someNumber = +prompt('Enter some number', '');
let someSymbol = '';

for (let i = 0; i <= someNumber - 1; i++) {
    someSymbol += '.#'   
}
console.log(someSymbol);

console.log('====Task 3====');

let randomNum = +prompt('Enter a number', '');
let sum = 0;

while (randomNum == '') {
    randomNum = +prompt('Invalid. You should enter a number' , '');
}

for (let i = 0; i <= randomNum; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(sum);

console.log('====Task 4====');

let rand = Math.random();
let iterNum = 0;

for (;;) {
    iterNum++;
    if (rand > 0.7) break;
}
console.log(`Loop was finished because of: ${rand}`);
console.log(`Number of iterations: ${iterNum}`);

console.log('====Task 5====');

for (let i = 0; i <= 50; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('Div by 5 and 3')
    } else if (i % 5 === 0) {
        console.log('Div by 5')
    } else if (i % 3 === 0) {
        console.log('Div by 3')
    } else console.log(i)
}

console.log('====Task 6====');

let date = new Date();

console.log(`date: ${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`, `time: ${date.getUTCHours()}:${date.getUTCMinutes()}`);



'use strict';
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);
// console.log("string literals:

// ''''
// 1 + 2 = ${1 + 2}");
//이건 안됨 ``로 해야지 됨.
console.log("ellie's \n\tbook")


// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
console.log(`x: ${x}`);
x -= y;
console.log(`x: ${x}`);
x *= y;
console.log(`x: ${x}`);
x /= y;
console.log(`x: ${x}`);

// 5. Comparison operators
console.log(10 < 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// key point! or는 앞에서부터 true를 찾는다.
// true를 찾으면 그 뒤로는 더이상 확인하지 않음.
// 따라서 위에처럼 시간이 오래걸리는 check()는 뒤에 놓는게 좋음

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// and도 마찬가지로 false를 찾으면 그 뒤로는 더이상 확인하지 않음.
// heavy한 애를 뒤에다 놓는게 좋음

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }
// 이건 잘 이해가 안되네.

function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('.');
    }
    return true;
}

// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
// type이 달라도 값이 같으면 같은걸로.

// === strict equality, no type conversion
console.log(stringFive === numberFive);
// type이 다르면 값이 같아도 다른거.

// === strict equality를 쓰는게 좋다.

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);        //true
console.log(0 === false);       //false
console.log('' == false);       //true
console.log('' === false);      //false
console.log(null == undefined); //true
console.log(null === undefined);//false

console.log((1==2) === false);  //true

// 8. Conditional operators: if
// if, else if, else
const name = 'a';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':      // 같은 행동을 하는 건 이렇게 묶을 수가 있네
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
i = 3;
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

for (let i = 0; i < 11; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

console.log('');
for (let i = 0; i < 11; i++) {
    console.log(i);
    if (i === 8) break;
}
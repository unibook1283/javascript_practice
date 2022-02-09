'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function ==== one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS(object처럼 매개변수로 보내던가.. 할 수 있다는 뜻)
// object처럼 function. 해서 function의 매개변수에 접근할 수 있다
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
    return 0;
}
log('Hello@');
// 여기서도 TypeScript의 필요성.
// 위의 함수를 이렇게 씀 TypeScript에서는
// function log(message: string): number {
//     console.log(message);
//     return 0;
// }

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);       // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // 여기선 접근할 수 없다.

    return undefined;   // 이게 생략되어 있다.
}
printMessage();

// 안에선 밖을 볼 수 있지만 밖에선 안을 볼 수 없다.

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// print();
const print = function () {     // anonymous function
    console.log('print');
};
print();

x();
function x () {
    console.log('xx');
}
// 이건 됨. hoisting으로 인해, 선언된 것을 제일 위로 올려주기 때문.

// printAgain();    // 여기서 하면 error 뜸
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, y, n) {
    if (answer === 'love you') {
        y();
    } else {
        n();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {  // function print() 이렇게 이름붙인건 blcok{} 안에서만 쓸 수 있구나.
    console.log('no!');
    // print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//-------------------------------------------------
//hoisting에 대한 연습
// d();
// var d = function () {
//     console.log('dd!');
// }
// d();
// 이런 '함수표현식'은 hoisting이 안되서 error남.

d();
function d () {
    console.log('dd!');
}
d();
// 이런 '함수선언식'은 hoisting이 되기 때문에 okay!

// '함수 표현식'을 쓰는게 좋다. 안전하다.
//-------------------------------------------------



// Arrow function
// always anonymous
// function을 간결하게 표현할 수 있음.
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint1 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// {} block을 안 쓰면, => 다음 값이 return 값.
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}
// {} blcok을 쓰면, return을 따로 해줘야됨.

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// 거의 쓸 일 없음.

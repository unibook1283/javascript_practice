// javascript is very flexible
// flexible = dangerous
// added ECMAScript 5
// use strict 써주면 undefined된 변수에 접근한다던지(아래 예에서는 let a를 안하는)
// 하는 비상식적인 행동에 에러를 띄워줌
// 더 빨라짐.
'use strict'
console.log('Hello World!')

let a;
a=5;

// 2. Variable, rw(read/write): 메모리에 값을 읽고 쓰는게 가능
// let (added in ES6)
// ES6 이후로 let만 쓴다.
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
// console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) - 정의가 파일의 맨 꼭대기로 간다
// -> 이 위에서 conosole.log(age) 해도 찍힌다. -> 문제다.
// has no block scope -> block 안에서 declare해도 밖에서 쓸 수 있다. -> 문제다.
console.log(age);
age = 4;
console.log(age);
var age;

{    
    aa = 11;
    var aa;
}
console.log(aa);
// 이게 가능해버림.


// 3. Constant, r(read only)
// favor immutable data type always for a few reasons: (let은 mutable)
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS


// 4. Variable types
// primitive, single item(더 이상 작은 단위로 나눠질 수 없는): number, string, boolean, null, undefined, symbol
// primitive는 메모리에 value가 저장되고
// object, box container (primitive를 모아논 것)
// object는 메모리에 내부 변수를 가리키는 reference를 저장하고 있음.
// function, first-class function: 함수를 변수처럼 사용할 수 있음.(parameter로 보내준다던지...)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) : 거의 쓸 일 없음. skip.
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(`value: ` + helloBob + ', type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects (고유한 식별자)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 이게 false임. 같은 string인데
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //이렇게 하면 true임.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// .description 해줘야 string으로 출력할 수 있음.

// 여기까지 primitive(single item)

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
// const vv = { name: 'vv', age: 22 };
// ellie = vv;
// ellie는 const라서 이렇게하면 error가 나오지만
ellie.age = 21;
// ellie 내부의 변수는 바꿀 수 있음.

// 5. Dynamic typing: dynamically typed language (run time에 할당된 값에 따라서 type이 바뀔 수 있음)
// C언어 같은거는 statically typed language: 변수를 선언할 때 어떤 type인지 결정
// dynamically typed language는 큰 프로젝트에서는 문제가 될 수 있음.
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;     // string + string 으로 인식
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';   // number / number 로 인식
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // 여기서 이걸 하면 error뜸. string에서 number로 type이 바뀌었기 때문.
// 이런 dynamically typed language의 문제를 해결한 게 TypeScript




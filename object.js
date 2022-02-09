'use strict'
// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
// object는 key와 value의 집합체이다!

// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// primitive는 하나의 값만 저장할 수 있음.
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {     // 많아지면 골치아픔.
    console.log(name);
    console.log(age);
}

const ellie = { name: 'ellie', age: 4 };
function printObject(person) {
    console.log(ellie.name);
    console.log(ellie.age);
}
printObject(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;    // JavaScript에서는 이것도 된다. 안하는게 좋다.
console.log(ellie.hasJob);

delete ellie.hasJob;    // 삭제도 마찬가지.
console.log(ellie.hasJob);  //undefined


// 2. Computed properties
// object의 property에 접근하는 두 가지 방법
console.log(ellie.name);
// 코딩할 때는 그냥 . 이걸로 하면 되고
console.log(ellie['name']); // computed properties: key를 string type으로 가져와야 한다.

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); 이거는 undefined가 나옴. 'obj에 key라는 property는 없어'
    console.log(obj[key]);
    // 동적으로 받아올 때 쓴다.
}
printValue(ellie, 'name');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 반복해서 하는 번거로움.
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) {    // 함수를 만든다.
    return {
        // name: name,
        // age: age,    JS에서는 이렇게 안해도 된다.
        name,
        age,
    };
};

const person5 = new Person('ellie', 30);
console.log(person5);

// 4. Constructor function
// 위에처럼 안하고 이렇게 하는게 좋음.
function Person(name, age) {
    // this = {} 생략되어있음.
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 위에 방법보다는 아래가 낫다.
for (value of array) {
    console.log(value);
}


// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;     // 같은 name, age를 가리키는 ref가 user2의 메모리에 저장된다.
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user); // 모든 object들은 Object을 상속받았다.
console.log(user4);

const user5 = Object.assign({}, user);  // 이렇게 해도 되고. assign에 들어가보면
                                        // parameter 두 개를 합친 걸 return하니까.
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);    //뒤에 나올 수록 앞에 나온 값을 덮어 씌운다.
console.log(mixed.color);   //그래서 color는 blue가 나옴.
console.log(mixed.size);

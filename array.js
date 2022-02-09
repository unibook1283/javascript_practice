'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit);
    console.log(index);
    console.log(array);
})

fruits.forEach((fruit, index, array) => {   //anonymous function은 arrow로 대체할 수 있었다.
    console.log(fruit);
    console.log(index);
    console.log(array);
})

fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('straw', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('peach', 'lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 뒤로 한칸 밀고 당기고 해야 되기 때문
// splice: remove an item by index position
fruits.push('peach');
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1);
console.log(fruits);
fruits.push('a');
fruits.push('b');
console.log(fruits);
fruits.splice(1, 1, 'c','d');
console.log(fruits);

// combine two arrays
const fruits2 = ['f', 'g', 'e'];
const fruits3 = ['aa'];
const newFruits = fruits.concat(fruits2, fruits3);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('lemon'));
console.log(fruits.indexOf('d'));
console.log(fruits.indexOf('x'));

// includes
console.log(fruits.includes('b'));
console.log(fruits.includes('x'));

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('lemon');
console.log(fruits);
console.log(fruits.indexOf('lemon'));   // 이건 맨 앞에있는 것의 index를
console.log(fruits.lastIndexOf('lemon'));//이건 맨 뒤에있는 것의 index를
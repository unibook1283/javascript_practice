'use strict'

// Promise is a JavaScript object for asynchronous operation.
// Key point 1. State
// state: pending -> fulfilled or rejected
// Key point 2. Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files...)
    console.log('doing something...');
    // 여기서 확인할 수 있는 것 : promise를 만드는 순간 executor(위의 콜백함수)가 실행된다.
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
})

// 2. Consumers: then, catch, finally
promise
.then(value => {
    console.log(value);
})  // then은 promise를 return하니까
.catch(error => {   // 그 promise의 .catch
    console.log(error);
})
.finally(() => {    // resolve하든 reject하든 마지막에 실행되는 것
    console.log('finally');
})


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen!'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => egg!`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fry!`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))   // .then(getEgg)로 생략 가능. 한가지 받아서 함수에 바로 넣을때
    .then(egg => cook(egg))
    .then(fry => console.log(fry))
    .catch(console.log);
